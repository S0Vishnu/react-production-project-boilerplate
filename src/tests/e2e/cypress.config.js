const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "src/tests/e2e/integration/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "src/tests/e2e/support/index.ts",
  },
});
