module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },

  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/setup-tests.ts'],

  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  transformIgnorePatterns: ['/node_modules/'],

  moduleNameMapper: {
    '^@monts/(.*)$': '<rootDir>/src/$1'
  }
}
