import { defineConfig, globalIgnores } from "eslint/config";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import importPlugin from "eslint-plugin-import";
import tailwindcss from "eslint-plugin-tailwindcss";

export default defineConfig([
  // Next.js presets
  ...nextVitals,
  ...nextTs,

  // Global ignores (override Next defaults if needed)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),

  // Custom rules
  {
    plugins: {
      import: importPlugin,
      tailwindcss,
    },

    rules: {
      /* ---------------- Tailwind ---------------- */
      "tailwindcss/classnames-order": "off", // handled by prettier-plugin-tailwindcss
      "tailwindcss/no-custom-classname": "off",

      /* ---------------- Imports ---------------- */
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      /* ---------------- Next / React ---------------- */
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off",
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
]);
