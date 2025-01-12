export default {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/my-app',
  globalSetup: '<rootDir>/src/tests/jest.setup.ts',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@nx-jest-local-library-problem/my-lib$': '<rootDir>/../../libs/my-lib/src/index.ts',
  },
};
