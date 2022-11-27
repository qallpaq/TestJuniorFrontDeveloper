module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'unicorn',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  extends: [
    'eslint:recommended',

    'plugin:import/warnings',
    'plugin:import/typescript',

    'plugin:jsx-a11y/recommended',

    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',

    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    'plugin:unicorn/recommended',

    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
  ],
  rules: {
    // general
    'no-param-reassign': 'error',

    // a11y
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    // import
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'error',
    'import/first': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'src/**',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],

    // ts
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        vars: 'all',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        prefix: ['I'],
        selector: 'interface',
      },
    ],

    // react
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-key': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],

    // react-hooks
    'react-hooks/exhaustive-deps': 'off',

    // unicorn
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/better-regex': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/explicit-length-check': 'error',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
  },
};
