const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '7nz3wi',
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: 'http://localhost:8080',
  },
})
