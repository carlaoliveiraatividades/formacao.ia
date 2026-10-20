# Revisão da plataforma — Módulo 2

## Alterações desta versão

- Mantida a separação entre conteúdos de estudo, biblioteca de exemplos, atividades docentes, simuladores e quizzes.
- Mantidas as quatro atividades como fichas de orientação para o professor; os simuladores não substituem as atividades do PDF.
- Mantidos os cartões de exemplos para consulta e cópia, sem encaminhamento para um simulador.
- Na página MagicSchool, distinguidos os exemplos curriculares que constam do documento das notas editoriais e dos padrões de prompt acrescentados à plataforma.
- Removida uma citação atribuída a George Couros que não consta do PDF. A página inicial apresenta agora instruções de utilização da plataforma.
- Corrigidos dados bibliográficos que o código anterior acrescentava sem suporte no PDF; referências incompletas são assinaladas como incompletas, sem inventar identificadores.
- Mantidos os campos do desafio final vazios por defeito, para o utilizador desenvolver o seu próprio trabalho.
- Removido o PDF original do pacote e mantida a publicação configurada para servir apenas a pasta `dist`.
- Acrescentado `PUBLICAR-NO-GITHUB.md` com os passos de publicação no GitHub Pages.

## Validação

- Foi verificada a estrutura dos ficheiros, a configuração Vite/GitHub Actions e a ausência de ficheiros PDF no pacote.
- A instalação das dependências não terminou neste ambiente; por isso, não foi possível executar uma compilação completa com `npm run build` nem testes de browser.
- Antes de publicar, executar `npm ci --legacy-peer-deps` e `npm run build` num ambiente com acesso às dependências. O workflow do GitHub Actions executa a compilação e publica `dist`.

## Limites editoriais

- A página MagicSchool mantém os nomes, descrições e exemplos indicados no PDF. Os padrões de prompt e notas contextuais que não constam do PDF estão identificados como complementares.
- Algumas referências bibliográficas do PDF não incluem dados editoriais completos; o site não inventa os dados em falta.
