import EsLint, { react, typescript } from '@mt-kit/eslint-config';

export default [
  ...EsLint,
  react,
  typescript,
  {
    ignores: [
      '.vite',
      'node_modules',
      'dist',
      'build',
      'public',
      'forge.env.d.ts',
      '**/.umi/**',
      '.pnpm-store',
    ],
  },
];
