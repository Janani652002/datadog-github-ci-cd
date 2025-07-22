// eslint.config.mjs
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest"
    },
    plugins: {
      react
    },
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
];
