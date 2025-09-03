import EsLint, {
  typescript,
  react
} from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  typescript,
  ...react,
  {
    ignores: [
      ".vite",
      "node_modules",
      ".pnpm-store",
      "pnpm-lock.yaml"
    ]
  }
];
