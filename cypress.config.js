const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gsc3nv",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    redirectionLimit: 100,
    //retries: 2,
    //pageLoadTimeout: 50000,
    /*env: {
      viewVersion: "local",
    },
    
    setupNodeEvents(on, config) {
      if (config.env.viewVersion === "notebook") {
        config.viewportWidth = 1024;
        config.viewportHeight = 768;
      } else if (config.env.viewVersion === "mobile") {
        config.viewportWidth = 320;
        config.viewportHeight = 480;
      }
      return config;
    },*/
  },
});
