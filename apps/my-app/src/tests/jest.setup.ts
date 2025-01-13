// Fixes Error: Jest: Got error running globalSetup - /home/mark/node/nx-jest-local-library-problem/apps/my-app/src/tests/jest.setup.ts, reason: Cannot find module '@nx-jest-local-library-problem/my-lib'
// Issue reported: https://github.com/jestjs/jest/issues/11644
// Successful fix: https://github.com/jestjs/jest/issues/11644#issuecomment-1171646729
import 'tsconfig-paths/register';

import { hello } from '@nx-jest-local-library-problem/my-lib';

module.exports = async () => {
    global.hello = hello;
};

console.log(require.resolve('@nx-jest-local-library-problem/my-lib'));
