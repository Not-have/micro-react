export default {
  extends: [
    "@mt-kit/stylelint-config/react"
  ],

  // 在这添加忽略文件，在内部集成的不生效，待解决
  ignoreFiles: [
    "**/*.json",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.svg",
    "**/*.ico",
    "**/*.js",
    "**/*.ts",
    "node_modules/**",
    "**/node_modules/**",
    "**/.umi/**",
    "**/.umi-production/**",
    "**/.umi-test/**",
    "**/dist/**",
    "**/build/**",
    "**/*.md",
    "pnpm-store/**"
  ],
  root: true
};
