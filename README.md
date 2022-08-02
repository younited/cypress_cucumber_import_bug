# cypress_cucumber_import_bug

## Install

```
yarn install
```

## To replicate the issue

Start cypress `yarn cypress open` and go to *E2ETesting* and then *Start E2E testing in (your preferred browser)*.

Then run the one available `Test.feature`. It will fail with a compile error. Without closing cypress, go to the broken file `cypress/e2e/test.js` and comment line 3 and uncomment line 5, then save the file. Nothing will happen. Altough, we would expect the test to run now.

Fully closing cypress, and reopening it will run the test fine.

Any change will be picked up now, without problem.

Until you break the import again. Then no update happens (although there is an error reported in the Cypress CLI output).
This can be confusing, and let the developer think there is no issue with the code as is.
