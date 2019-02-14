module.exports = {
  preset: "jest-puppeteer-docker",
  setupTestFrameworkScriptFile: "./test-environment-setup.js",
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
};
