module.exports = {
  parser: 'babel-eslint',
  extends: ['@selleo/react', 'plugin:react-native/all', 'prettier/react'],
  plugins: ['react-native'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-debugger': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'error'],
      },
    ],
  },
}
