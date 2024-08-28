module.exports = {
    testEnvironment: 'node',
    clearMocks: true,
    testMatch: [
        '**/tests/**/*.test.js',
        '**/tests/**/*.spec.js',
        '**/tests/**/*.js'
    ],
    collectCoverage: true,
    verbose: true,
    globals: {
        logLevel: 'ERROR'
    }
};