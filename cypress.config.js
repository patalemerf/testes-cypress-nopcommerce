const { defineConfig } = require("cypress");
module.exports = defineConfig({
  experimentalStudio: true,
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 10000;
      // implement node event listeners here
    },
  },
});