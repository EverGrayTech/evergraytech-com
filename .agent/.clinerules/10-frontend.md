# Frontend Standards (Next.js 15+)
- **Package Manager**: Always use `pnpm`.
- **Linting**: Use **Biome** (`pnpm biome check --apply`). No ESLint/Prettier.
- **React Compiler**: Do NOT use `useMemo` or `useCallback` manually.
- **Components**: Prefer Server Components by default. Use 'use client' sparingly.
- **Naming**: PascalCase for components, camelCase for hooks and utilities.
