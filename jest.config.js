module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
      'node_modules/(?!axios)',
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js',
      '<rootDir>/src/polyfills.js'
    ],
    collectCoverage: true,
    coverageReporters: ['lcov', 'text'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/build/',
      '/dist/',
      '/coverage/',
      '/tests/'
    ],
    "reporters": [
      "default",
      [
        "jest-junit",
        {
          "outputDirectory": "coverage",
          "outputName": "junit.xml"
        }
      ]
    ]
  };