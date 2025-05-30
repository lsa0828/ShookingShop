const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ws5yrj",
  e2e: {
    baseUrl: 'https://lsa0828.github.io/ShookingShop/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// https://lsa0828.github.io/ShookingShop/
// http://localhost:3000