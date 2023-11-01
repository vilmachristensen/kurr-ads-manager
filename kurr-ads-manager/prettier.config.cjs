/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  arrowParens: 'always',
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: 'all',
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
};

module.exports = config;
