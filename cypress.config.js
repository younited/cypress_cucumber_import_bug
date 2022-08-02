const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    TAGS: 'not (@ci-broken or @unstable)',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents: require('./cypress/plugins/index.js'),
    specPattern: 'cypress/e2e/**/*.{feature,spec.js}',
  },
})
