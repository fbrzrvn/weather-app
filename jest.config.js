module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'tests/(.*)': '<rootDir>/src/tests/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(svg|jpg|jpeg|png|gif)$': '<rootDir>/src/tests/__mocks__/fileMock.ts',
  },
};
