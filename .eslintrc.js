module.exports = {
  settings: {
    react: {
      "version": "detect"
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 
  "sort-destructure-keys"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "sort-destructure-keys/sort-destructure-keys": [
      2,
      {
        "caseSensitive": false
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true
      }
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": true,
        "natural": true
      }
    ],
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      0
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "max-len": [
      0
    ],
    "no-console": [
      "error"
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-underscore-dangle": [
      0
    ],
    "object-curly-newline": [
      "error",
      {
        "minProperties": 1
      }
    ],
    "object-curly-spacing": [
      "error", "always"
    ],
    "object-property-newline": [
      "error",
      {
        "allowMultiplePropertiesPerLine": false
      }
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "children": "ignore",
        "props": "always"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/jsx-indent": [
      "error",
      4
    ],
    "react/jsx-indent-props": [
      "error",
      4
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1
      }
    ],
    "react/jsx-one-expression-per-line": [
      0
    ],
    "react/jsx-props-no-spreading": [
      0
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],
    "react/no-did-update-set-state": [
      0
    ],
    "react/no-unescaped-entities": [
      0
    ],
    'react/prop-types': 0,
    "sort-destructure-keys/sort-destructure-keys": [
      2,
      {
        "caseSensitive": false
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true
      }
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": true,
        "natural": true
      }
    ],
    '@typescript-eslint/no-explicit-any': 0
  }
};