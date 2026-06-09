import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

import base from "./base.js";

/**
 * ESLint flat config for Next.js apps. Same rule sets the app used via
 * .eslintrc.json before next lint was removed in Next 16
 * (next/core-web-vitals + next/typescript).
 *
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  ...base,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ["next-env.d.ts"],
  },
];

export default config;
