module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // 👈 This allows 'describe', 'test', 'expect', etc.
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
