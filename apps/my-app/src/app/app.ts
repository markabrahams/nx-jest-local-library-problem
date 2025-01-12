import { hello } from '@nx-jest-local-library-problem/my-lib';

export function runApp(): void {
  console.log(hello('World'));
}

if (require.main === module) {
  runApp();
}
