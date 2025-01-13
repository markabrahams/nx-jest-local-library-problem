export default {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/my-app',
  globalSetup: '<rootDir>/src/tests/jest.setup.ts',
  testEnvironment: 'node',
  // moduleNameMapper should be used by the globalSetup script, but it isn't at the time of writing
  // https://github.com/jestjs/jest/issues/11644
  // moduleNameMapper: {
  //   '^@nx-jest-local-library-problem/my-lib$': '<rootDir>/../../libs/my-lib/src/index.ts',
  // },
};
