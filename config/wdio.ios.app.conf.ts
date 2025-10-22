import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";
import path from "path";
import url from "node:url";

const isGhActions = process.env.GITHUB_ACTION;

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../tests/features/**/*.feature"],
    framework: "cucumber",
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
    
    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: "iOS",
            "wdio:maxInstances": 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/

            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            "appium:deviceName": "iPhone 16 Pro",
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            "appium:platformVersion": "18.5",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            // The path to the app
            "appium:app": join(
                process.cwd(),
                "apps",
                // Change this name according to the app version you downloaded
                "ios.simulator.wdio.native.app.v1.0.8.zip"
            ),
            "appium:newCommandTimeout": 240,
            // This is needed to wait for the webview context to become available
            "appium:webviewConnectTimeout": 5000,
        },
    ],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    afterStep: async function(step, scenario, { error, duration, passed }, context) {
        if (error || !passed) {
            const screenshotPath = '../allure-results/screenshot/temp-screenshot.png';
            await browser.takeScreenshot(); 
            await browser.saveScreenshot(screenshotPath);
        }
  },
};
