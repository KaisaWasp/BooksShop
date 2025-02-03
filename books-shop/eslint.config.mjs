import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
  ),
  {
    rules: {
      semi: 2,
      eqeqeq: 2,
      indent: ["error", 2],
      "prefer-const": "error",
      "no-multi-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "prettier/prettier": ["error", { singleQuote: false }],
      "no-console": "error",
    },
  },
];

export default eslintConfig;
