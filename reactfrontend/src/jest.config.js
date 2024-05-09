module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/src/components/__tests__/styleMock.js',
    },
  };