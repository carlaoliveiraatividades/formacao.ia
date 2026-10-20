# Publicar no GitHub Pages

Este projeto usa React + Vite. A publicação está configurada por GitHub Actions no ficheiro `.github/workflows/deploy.yml`.

1. Envie os ficheiros do projeto para a branch `main` do repositório `FORMACAOIA`.
2. Em **Settings → Pages**, escolha **GitHub Actions** como origem de publicação (não `Deploy from a branch`).
3. Abra **Actions** e aguarde que o workflow **Deploy to GitHub Pages** termine com sucesso.
4. Abra `https://carlamariasantosoliveira.github.io/FORMACAOIA/` e faça uma atualização forçada do navegador (Ctrl+F5 ou Cmd+Shift+R).

O workflow instala as dependências, executa `npm run build` e publica apenas a pasta `dist`. Não publique diretamente a raiz do código-fonte React/Vite.

## Verificação do PDF

O PDF original não deve ser colocado na pasta `public`, nem em qualquer pasta que seja incluída no artefacto `dist`. O pacote de produção deve conter apenas os conteúdos pedagógicos integrados nas páginas do site.
