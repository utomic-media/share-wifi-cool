/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"]
      }
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['error', { max: 4, maxEOF: 1 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'indent': ['error', 2, { ignoreComments: true, SwitchCase: 1 }],
    // TODO (unimportant): find a better solution than disable it completely
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    // TODO Unimportant: find a way to set variables to false, but allow variable funcitons in vue script
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": false }],
    "no-else-return": ["error", {"allowElseIf": true}],
  },
  overrides: [
    //
  ],
};

