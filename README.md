# IA na Educação — Módulo 2: IA Generativa e Prompts

Plataforma educativa para apoiar professores no estudo de IA generativa, na formulação de prompts e no planeamento de atividades pedagógicas.

## Publicação no GitHub Pages

O projeto usa React + Vite. A publicação está automatizada pelo GitHub Actions, no ficheiro `.github/workflows/deploy.yml`.

1. Envie o código para a branch `main`.
2. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** como origem de publicação.
3. Em **Actions**, aguarde que o workflow `Deploy to GitHub Pages` termine com sucesso.
4. Abra o endereço publicado e atualize a página sem usar a cache do navegador.

O workflow compila o projeto com `npm run build` e publica apenas a pasta `dist`. Não configure o Pages para publicar diretamente a raiz do código-fonte.

## Executar localmente

Requer Node.js compatível com a versão do Vite indicada em `package.json`.

```bash
npm install --legacy-peer-deps
npm run dev
```

## Limites da versão estática

O GitHub Pages é um alojamento estático e não executa o servidor Express deste projeto. As ferramentas que chamam `/api/gemini/generate` usam uma demonstração/modelo de recurso quando a API não está disponível. Para respostas reais geradas por IA, é necessário alojar o backend num serviço próprio e configurar uma chave API apenas no servidor. Nunca coloque uma chave API nos ficheiros frontend ou num repositório público.

## Documento de referência

O PDF original é utilizado apenas como fonte de desenvolvimento e não deve ser incluído neste repositório público. O conteúdo pedagógico necessário deve estar integrado nas páginas do site.
