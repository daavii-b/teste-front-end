# Frontend Test

Base de aplicação com React 19, TypeScript, Vite, Sass/SCSS e TanStack Query. A tela inicial contém
o header da loja Econverse.

O alias `@/` aponta para `src/` e está configurado no Vite e no TypeScript.

## Começar

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev`: inicia o servidor local.
- `pnpm build`: verifica os tipos e gera a versão de produção.
- `pnpm preview`: serve a versão gerada localmente.
- `pnpm lint` / `pnpm lint:fix`: verifica ou corrige regras do ESLint.
- `pnpm typecheck`: verifica os tipos TypeScript.
- `pnpm format` / `pnpm format:check`: formata ou verifica o Prettier.

O `QueryClientProvider` já envolve a aplicação em `src/main.tsx`. As opções padrão de consulta
definem `staleTime` de 60 segundos e uma tentativa de repetição em caso de falha.

## Padrão de estilos SCSS

`src/index.scss` é o ponto de entrada e importa os tokens e estilos globais na ordem de dependência.
Os estilos foram separados por responsabilidade:

```text
src/styles/
├── _base.scss                 # Reset, elementos globais e container
├── _breakpoints.scss          # Limites responsivos em Sass
├── _colors.scss               # Paleta e tokens semânticos de cor
├── _shadows.scss              # Tokens de sombras
├── _spacing.scss              # Escala de espaçamento
├── _typography.scss           # Escala tipográfica
└── components/
    └── _header.scss           # Estilos do header e seus breakpoints
```

### Para adicionar um componente

1. Crie um parcial em `src/styles/components/`, por exemplo `_product-card.scss`.
2. Use classes do componente como prefixo e mantenha cada regra perto das regras relacionadas.
3. Importe o parcial em `src/index.scss` com `@use './styles/components/product-card';`.
4. Prefira tokens existentes para cores, espaçamentos e tamanhos. Se um valor recorrente ainda não
   tiver token, adicione-o no parcial responsável pelos tokens.
5. Mantenha o aninhamento raso: use aninhamento para estados ou elementos diretos, evitando cadeias
   profundas de seletores.

Exemplo de token e uso:

```scss
// src/styles/_spacing.scss
$spacing: (
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
);

// Uso nos estilos do componente
.product-card {
  gap: var(--space-3);
  padding: var(--space-4);
}
```

Os mapas de `src/styles/_colors.scss`, `_spacing.scss`, `_shadows.scss` e `_typography.scss` geram
variáveis CSS semânticas, como `--color-primary`, `--space-4`, `--shadow-header-layer` e
`--font-size-base`. Para cores novas, prefira
nomes pelo propósito visual (`border`, `surface-muted`, `subtle-foreground`) em vez de nomes
dependentes de um componente. Para estilos que só pertencem a um componente, mantenha o seletor no
parcial desse componente.

Os tamanhos tipográficos usam passos de `0.25rem` (4 px com a raiz padrão de 16 px), geram tokens
`--font-size-*` e utilitários como `.text-xs`, `.text-base` e `.text-xl`. A raiz do documento continua
respeitando o tamanho de fonte configurado no navegador. O Sass usa `@use`; evite `@import`.
