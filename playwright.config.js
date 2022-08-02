// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      baseURL: 'http://localhost:8080',
      headless: true,
      viewport: { width: 1280, height: 720 },
      actionTimeout: 3000,
      ignoreHTTPSErrors: true,
      video: 'on-first-retry',
 
    },

    testMatch: 'test/e2e/*test.js'
  };
  
  module.exports = config;