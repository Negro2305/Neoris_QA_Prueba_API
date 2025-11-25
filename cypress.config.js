/*module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};*/

/*const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Guardar logs de ejecución
      on("task", {
        writeLog({ filePath, message }) {
          const p = path.resolve(filePath);
          fs.mkdirSync(path.dirname(p), { recursive: true });
          fs.appendFileSync(p, `${new Date().toISOString()} - ${message}\n`);
          return null;
        }
      });

      // Captura screenshots en fallo automáticamente
      on("after:screenshot", (details) => {
        console.log("Screenshot taken: ", details.path);
        return details;
      });

      return config;
    },
    baseUrl: "https://www.saucedemo.com",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos"
  }
});*/

/*const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.demoblaze.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
    },
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
  },
});*/

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
    },
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
  },
});



