module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    indent: ['error', 2, { VariableDeclarator: 'first' }],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],
    'vue/sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        ignoreChildrenOf: ['model'],
        ignoreGrandchildrenOf: [
          'computed',
          'directives',
          'inject',
          'props',
          'watch'
        ],
        minKeys: 2,
        natural: true
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
