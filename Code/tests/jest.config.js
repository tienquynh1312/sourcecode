/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/whitebox', '<rootDir>/blackbox'],
    setupFilesAfterEnv: ['<rootDir>/setup.js'],
    testMatch: ['**/*.test.js'],
    collectCoverageFrom: [
        '../utils/**/*.js',
        '!**/node_modules/**'
    ],
    coverageDirectory: '<rootDir>/coverage',
    verbose: true,
    testTimeout: 10000
};
