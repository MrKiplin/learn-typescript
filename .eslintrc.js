module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true,
  },
  env: { node: true },
  rules: {},
  ignorePatterns: ["__generated__"],
  overrides: [
    {
      files: ["*.spec.ts"],
    },
  ],
};
