module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0, 
    'no-trailing-spaces': 0,
    semi: 0, 
    quotes: 0,
    'no-multi-spaces': 0,
    'comma-spacing': 0,
    'func-call-spacing': 0,
    'no-unexpected-multiline': 0,
    'padded-blocks': 0,
    'dot-notation': 0,
    'vue/no-setup-props-destructure': 0,
    'no-unused-vars': 0
  }
}
