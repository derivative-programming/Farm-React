import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  retries:{
    openMode: 2,
    runMode: 2
  },
  e2e: {
    baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
});
