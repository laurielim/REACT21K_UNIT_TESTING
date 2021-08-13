# Jest project

1. Create a project folder
1. Create package.json with 'npm init':

   ```shell
   npm init -y
   ```

   The `-y` flag sets values for your package.json using the README filee.

   Or you can do the following and answer the questions.

   ```shell
   npm init
   ```

1. Install jest as devDependencies

   ```shell
   npm install jest --save-dev
   ```

   The `--save-dev` flag indicates that it just for dev purposes and will not be installed in production.

   Note: `npm install` goes through package.json and install all dependencies which means that there is no need to provide the node_modules directory when sharing projects.

1. Update test-script in package.json

   ```json
   "scripts": {
       "test": "jest"
   }"
   ```

1. Create test folder named `__tests__`
1. Write tests
1. Run tests

   ```shell
   npm test
   ```

   It is also possible to run single test files

   ```shell
   npm test --testFile <FileName.js>
   ```
