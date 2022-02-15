module.exports = {
    bail: true,
    clearMocks: true,
    setupFilesAfterEnv: [
        '<rootDir>/test/setup.js'
    ],
    testEnvironment: "jsdom",
    testMatch: [
        // "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    transformIgnorePatterns: [
        "/node_modules/",
    ],
    moduleNameMapper: {
        "\\.css$": '<rootDir>/test/css.js'
    }
};
