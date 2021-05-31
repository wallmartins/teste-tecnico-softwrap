module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-cycle': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'newline-per-chained-call': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'react/jsx-indent': 'off',
    'no-lone-blocks': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off',
  },
};
