import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-pluging-react";

/**@type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended, {
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: "dectect",
            },
        },
    },
    reactPlugin.configs.flat["jsx-runtime"],
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "react/no-unescaped-entitites": "off",
            "react/prop-types": "off",
        },
    },
    prettier,
];