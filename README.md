# Nx Jest globalSetup failure to find library

This is a reproduction repo to demonstrate Jest not finding library dependencies when running its globalSetup code.

This repo is in the broken state.

To reproduce the problem, clone the repo, install npm modules:

```
git clone https://github.com/markabrahams/nx-jest-local-library-problem.git
cd nx-jest-local-library-problem
npm install
```

And then run the my-app tests:

```
npx nx test my-app
```

This should result in output such as this:

```
mark@hope:/var/tmp/nx-jest-local-library-problem$ npx nx test my-app

> nx run my-app:test

Determining test suites to run...Couldn't find tsconfig.json. tsconfig-paths will be skipped

 NX   Jest: Got error running globalSetup - /var/tmp/nx-jest-local-library-problem/apps/my-app/src/tests/jest.setup.ts, reason: Cannot find module '@nx-jest-local-library-problem/my-lib'

Require stack:
- /var/tmp/nx-jest-local-library-problem/apps/my-app/src/tests/jest.setup.ts
- /var/tmp/nx-jest-local-library-problem/node_modules/jest-util/build/requireOrImportModule.js
- /var/tmp/nx-jest-local-library-problem/node_modules/jest-util/build/index.js
- /var/tmp/nx-jest-local-library-problem/node_modules/jest-config/build/getCacheDirectory.js
- /var/tmp/nx-jest-local-library-problem/node_modules/jest-config/build/Defaults.js
- /var/tmp/nx-jest-local-library-problem/node_modules/jest-config/build/normalize.js
- /var/tmp/nx-jest-local-library-problem/node_modules/jest-config/build/index.js
- /var/tmp/nx-jest-local-library-problem/node_modules/@nx/jest/src/executors/jest/jest.impl.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/config/schema-utils.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/command-line/run/executor-utils.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/devkit-internals.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/utils/assert-workspace-validity.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/project-graph/build-project-graph.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/project-graph/project-graph.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/project-graph/file-utils.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/utils/package-manager.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/utils/package-json.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/utils/print-help.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/src/command-line/run/run.js
- /var/tmp/nx-jest-local-library-problem/node_modules/nx/bin/run-executor.js
Pass --verbose to see the stacktrace.


—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 NX   Ran target test for project my-app (2s)

   ✖  1/1 failed
   ✔  0/1 succeeded [0 read from cache]
```

To run the tests successfully, replace apps/my-app/project.json with apps/my-app/project.json-without-test-target
and re-run the tests:

```
cp apps/my-app/project.json-without-test-target apps/my-app/project.json
npx nx test my-app
```

Which gives results such as this:

```
mark@hope:/var/tmp/nx-externaldependency-jest-not-found$ npx nx test my-app

> nx run my-app:test  [existing outputs match the cache, left as is]

> jest

Determining test suites to run.../var/tmp/nx-externaldependency-jest-not-found/libs/my-lib/src/index.ts
 PASS   my-app  src/tests/app.spec.ts
  App Tests
    ✓ should greet properly (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.226 s
Ran all test suites.

—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 NX   Successfully ran target test for project my-app (47ms)

Nx read the output from the cache instead of running the command for 1 out of 1 tasks.
```

While this is good, there are other contexts (e.g. the launch.json debugger and the Jest extension)
that don't work with the jest.config.ts alone, as they obviously don't share the Jest plugin's
default settings that are making this work.
