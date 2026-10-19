# Frontend Test

Aplicação de e-commerce feita com React 19, TypeScript, Vite, Sass e TanStack Query.

## Requisitos

- Node.js `20.19+` ou `22.12+`.
- pnpm `10.28.0` (versão indicada no `package.json`).

Instale o pnpm globalmente com o npm:

```bash
npm install --global pnpm@10.28.0
pnpm --version
```

O segundo comando deve exibir `10.28.0`.

## Instalação

Na raiz do projeto, instale as dependências:

```bash
pnpm install
```

## Executar em desenvolvimento

Inicie o servidor Vite:

```bash
pnpm dev
```

Abra a URL exibida no terminal, normalmente `http://localhost:5173`.

## Compilar para produção

```bash
pnpm build
```

O comando verifica os tipos TypeScript e gera os arquivos de produção em `dist/`.

Para visualizar localmente a compilação:

```bash
pnpm preview
```

O preview costuma ficar disponível em `http://localhost:4173`.

## Validar a aplicação

O projeto não possui uma suíte de testes automatizados ou um comando `pnpm test`. Para validar
estaticamente o código, use:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Para uma verificação manual da integração de produtos, inicie o servidor de desenvolvimento e
confirme que os carrosséis carregam os itens. Também é possível conferir a resposta do proxy:

```bash
curl -i http://localhost:5173/api/products
```

Depois de compilar, use `http://localhost:4173/api/products` para conferir o proxy no Vite Preview.

## API de produtos e CORS

O navegador busca os produtos em `/api/products`. A configuração do Vite encaminha essa rota para o
endpoint da Econverse durante o desenvolvimento e o Vite Preview local, evitando a chamada
cross-origin direta que é bloqueada pela política CORS do endpoint.

Esse proxy é apenas local e não faz parte dos arquivos estáticos gerados em `dist/`.

## Estrutura principal

```text
src/
├── api/products/       # Função HTTP, queries e tipos de produto
├── components/         # Componentes da interface
├── lib/                # Funções utilitárias
└── styles/             # Tokens e estilos Sass por componente
```

O alias `@/` aponta para `src/`. `src/index.scss` importa os estilos globais e os parciais dos
componentes.

## Scripts disponíveis

| Comando             | Descrição                                |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Inicia o servidor de desenvolvimento.    |
| `pnpm build`        | Verifica os tipos e compila a aplicação. |
| `pnpm preview`      | Serve localmente o build de produção.    |
| `pnpm lint`         | Verifica o código com ESLint.            |
| `pnpm lint:fix`     | Aplica correções automáticas do ESLint.  |
| `pnpm typecheck`    | Verifica os tipos TypeScript.            |
| `pnpm format`       | Formata os arquivos com Prettier.        |
| `pnpm format:check` | Verifica a formatação com Prettier.      |
