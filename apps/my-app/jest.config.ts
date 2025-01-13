export default {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/my-app',
  globalSetup: '<rootDir>/src/tests/jest.setup.ts',
  testEnvironment: 'node',

  // moduleNameMapper should be used by the globalSetup script, but it isn't at the time of writing
  // https://github.com/jestjs/jest/issues/11644
  //
  // moduleNameMapper: {
  //   '^@nx-jest-local-library-problem/my-lib$': '<rootDir>/../../libs/my-lib/src/index.ts',
  // },

  // These were taken from the Nx repo's presets file:
  // packages/jest/preset/jest-preset.ts
  // in hope that they would fix the issue, but they didn't
  //
  // testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  // resolver: '@nx/jest/plugins/resolver',
  // moduleFileExtensions: ['ts', 'js', 'mjs', 'html'],
  // coverageReporters: ['html'],
  // transform: {
  //   '^.+\\.(ts|js|html)$': [
  //     'ts-jest',
  //     { tsconfig: '<rootDir>/tsconfig.spec.json' },
  //   ],
  // },
  // testEnvironmentOptions: {
  //   customExportConditions: ['node', 'require', 'default'],
  // },
};
