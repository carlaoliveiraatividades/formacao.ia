import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '10mb' }));

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API endpoint for prompt testing and resource generation
app.post('/api/gemini/generate', async (req, res) => {
  try {
    const { prompt, systemInstruction } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'O prompt é obrigatório.' });
    }

    if (!ai) {
      return res.status(503).json({
        error: 'Chave GEMINI_API_KEY não configurada no ambiente. O sistema apresentará demonstrações pedagógicas preparadas.',
        fallback: true,
      });
    }

    let text = '';
    let usedModel = 'gemini-3.8-flash';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: systemInstruction ? { systemInstruction } : undefined,
      });
      text = response.text || '';
    } catch (primaryErr: any) {
      console.warn('Primary model error, attempting fallback to gemini-3.1-flash-lite...', primaryErr?.message);
      try {
        const response2 = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents: prompt,
          config: systemInstruction ? { systemInstruction } : undefined,
        });
        text = response2.text || '';
        usedModel = 'gemini-3.1-flash-lite';
      } catch (secondaryErr: any) {
        throw primaryErr;
      }
    }

    return res.json({
      text,
      model: usedModel,
      success: true,
    });
  } catch (err: any) {
    console.error('Gemini error:', err);
    return res.status(500).json({
      error: err?.message || 'Erro ao comunicar com a API do Gemini.',
      fallback: true,
    });
  }
});

// Health / status endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

async function start() {
  const isProd = process.env.NODE_ENV === 'production';
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor educativo a correr em http://localhost:${port}`);
  });
}

start();
