const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.js',  
    supportFile: 'cypress/support/e2e.js',  
    
    baseUrl: 'https://hyf-react-w2-example.netlify.app/',  
    
    setupNodeEvents(on, config) {
    },
  },
});