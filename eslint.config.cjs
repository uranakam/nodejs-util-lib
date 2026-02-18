const { defineConfig, globalIgnores } = require("eslint/config");
const globals = require("globals");
const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  // compat.extends returns config objects that should be spread
  ...compat.extends("eslint:recommended"),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      parserOptions: {},
    },

    rules: {
      "no-useless-escape": "off",
    },
  },

  globalIgnores(["node_modules/", "eslint.config.cjs"]),
]);
