module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'next',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['simple-import-sort', 'import', 'react', '@typescript-eslint', 'react-hooks', 'testing-library'],
  settings: {
    jest: {
      version: 'detect'
    },
    react: {
      version: 'detect'
    },
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json']
      }
    }
  },
  rules: {
    // react
    'react/jsx-key': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    // next
    '@next/next/no-html-link-for-pages': 'off',

    // typescript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // misc
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
          ],
          // Packages. `react` related packages come first.
          ['^react', '^next', '^@?\\w'],
          // Internal packages.
          ['^(~/domains|~/ui|~/types)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$', '^.+\\.styles$']
        ]
      }
    ]
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': ['off', { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] }]
      }
    }
  ],
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', 'public', 'styles', '.next', 'coverage', 'dist', '.turbo']
}
