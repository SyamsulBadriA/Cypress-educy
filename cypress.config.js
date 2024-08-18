const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 60000, // 60 detik
    defaultCommandTimeout: 30000, // 30 detik untuk perintah standar
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
