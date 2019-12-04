// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "space-before-function-paren": "off",
    "no-unexpected-multiline": "error",
    printWidth: 110,
    quotes: "off",
    semi: "off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    // 'vue/no-unused-vars': "warn",
    "max-len": ["error", { code: 220, tabWidth: 2, ignoreTemplateLiterals: true }],
    "id-length": 0, //变量名长度
    //Strings must use singlequote.
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
