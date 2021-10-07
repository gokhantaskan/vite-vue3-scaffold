module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  plugins: [
    "@typescript-eslint",
    "cypress",
    "chai-friendly",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
  ],
  parser: "vue-eslint-parser",
  "parserOptions": {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    // "@typescript-eslint/no-non-null-assertion": 0,
    "arrow-parens": [1, "as-needed"],
    "comma-dangle": [1, { arrays: "always-multiline", objects: "always-multiline", imports: "never", exports: "never", functions: "never" }],
    "vue/html-indent": [1, 2, { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: false, ignores: [] }],
    "vue/no-unused-components": 1,
    "vue/no-unused-vars": 1,
    quotes: [1, "double", "avoid-escape"],
    semi: [1, "always", { omitLastInOneLineBlock: true }],
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};