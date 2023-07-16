import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'drvqa3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
