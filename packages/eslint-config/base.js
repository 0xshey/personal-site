/**
 * Shared base ESLint flat config for workspace packages.
 *
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  {
    ignores: ["node_modules/**", "dist/**", ".next/**", ".turbo/**"],
  },
];

export default config;
