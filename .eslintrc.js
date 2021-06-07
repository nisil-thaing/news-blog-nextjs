module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: [
    'react',
    'react-hooks',
    'testing-library',
    'jest-dom'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [ 'node_modules', 'src/' ]
      }
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/prop-types': ['off'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'jsx-a11y/no-autofocus': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'arrow-parens': ['error', 'as-needed'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
};
