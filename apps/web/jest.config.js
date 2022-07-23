const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  displayName: 'Web Tests',
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
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
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

module.exports = createJestConfig(customJestConfig)
