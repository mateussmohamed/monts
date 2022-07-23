// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: '<rootDir>/src/' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/index.tsx',
    '!src/**/mock.ts',
    '!src/**/mock.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)
