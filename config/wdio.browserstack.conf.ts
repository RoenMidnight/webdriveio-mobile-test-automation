import { fileURLToPath } from 'url';
import path from 'path';
import { join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.resolve(__dirname, '..');

const isIOS = process.env.PLATFORM === 'ios';

export const config = {
  runner: 'local',
  maxInstances: 1,
  logLevel: 'info',
  framework: 'cucumber',
  reporters: ['spec'],

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["../tests/features/**/*.feature"],

  cucumberOpts : {
          require: [
             path.join(
                 __dirname,
                 "..",
                 "tests",
                 "steps",
                 "login_and_signup_steps.ts",
             ),
              path.join(
                  __dirname,
                  "..",
                  "tests",
                  "steps",
                  "navigation_steps.ts",
              ),
              path.join(
                  __dirname,
                  "..",
                  "tests",
                  "steps",
                  "forms_steps.ts",
              ),
              path.join(
                  __dirname,
                  "..",
                  "tests",
                  "steps",
                  "drag_steps.ts",
              ),
              path.join(
                  __dirname,
                  "..",
                  "tests",
                  "steps",
                  "swipe_steps.ts",
              ),
              path.join(
                  __dirname,
                  "..",
                  "tests",
                  "steps",
                  "webview_steps.ts",
              ),
  
          ], // <string[]> (file/dir) require files before executing features
          backtrace: false, // <boolean> show full backtrace for errors
          compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
          dryRun: false, // <boolean> invoke formatters without executing steps
          failFast: false, // <boolean> abort the run on first failure
          snippets: true, // <boolean> hide step definition snippets for pending steps
          source: true, // <boolean> hide source URIs
          strict: false, // <boolean> fail if there are any undefined or pending steps
          timeout: 200000, // <number> timeout for step definitions
          ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
          scenarioLevelReporter: false, // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
      },

  services: ['browserstack'],
  hostname: 'hub.browserstack.com',

  capabilities: [
    isIOS
      ? {
          platformName: 'iOS',
          'appium:deviceName': 'iPhone 14',
          'appium:platformVersion': '17.5',
          'appium:automationName': 'XCUITest',
          'appium:app': process.env.BROWSERSTACK_APP_ID || 'bs://<ios-app-id>',
          'appium:autoAcceptAlerts': true
        }
      : {
          platformName: 'Android',
          'appium:deviceName': 'Google Pixel 7',
          'appium:platformVersion': '13.0',
          'appium:automationName': 'UiAutomator2',
          'appium:platformName': 'android',
          'appium:app': 'bs://9211db2ff9fde9928b068a61e21c636d2338e3c5',
          'appium:autoGrantPermissions': true
        }
  ]
};