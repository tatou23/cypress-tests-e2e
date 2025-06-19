const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Rapport de test Cypress',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    baseUrl: 'https://practicetestautomation.com',
    supportFile: 'cypress/support/e2e.js'
  },
});