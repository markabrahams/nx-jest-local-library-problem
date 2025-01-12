import { hello } from '@nx-jest-local-library-problem/my-lib';

module.exports = async () => {
    global.hello = hello;
};

console.log(require.resolve('@nx-jest-local-library-problem/my-lib'));
