module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'jest-expo',
  transform: {
    '.+\\.(ts|tsx)$': 'babel-jest'
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/styles.ts',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
}
