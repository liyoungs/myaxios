// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "space-before-function-paren": "off",
    "quotes": "off",
    "semi": "off",
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    // 'vue/no-unused-vars': "warn",
    "max-len": ["error", 200],
    "id-length": 0,//变量名长度
    //Strings must use singlequote.
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
