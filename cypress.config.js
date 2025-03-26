const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto cypress iniciante',
      reportPageTitle: 'Projeto cypress iniciante',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    e2e: {
      baseUrl : "https://automationpratice.com.br/",
      defaultCommandTimeout: 5000,
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
