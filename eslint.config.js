import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ["node_modules/**", "dist/**"],
  },
];
