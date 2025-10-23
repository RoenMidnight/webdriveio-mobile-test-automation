# Mobile Automation Project with WebDriverIO + Appium

This project performs automated testing on a mobile application (Android and iOS), using WebDriverIO, Appium, and Cucumber. Tests are written in the Gherkin syntax and organized following the Page Object Model (POM) design pattern.

---

## Tested Features

- Login with valid credentials  
- New user registration (positive and negative flows)  
- Form filling (including via JSON)  
- Navigation between screens  
- Interactions with horizontal swipe and dynamic content validation  
- Swipping to left and right in Carousel
- Drag'n'Dropg  feature

---

## Project Structure

```
.
├── .github/workflows/       # CI/CD pipelines for Android and iOS
├── apps/                    # APK and APP files used for local testing
├── config/                  # WebDriverIO configuration files
│   ├── wdio.android.app.conf.ts
│   ├── wdio.android.app.cucumber.conf.ts
│   ├── wdio.browserstack.conf.ts
│   └── wdio.ios.app.conf.ts
├── tests/                   # Automated tests
│   ├── data/                # JSON test data
│   ├── features/            # Gherkin Files
│   ├── helpers/             # Utility helpers
│   ├── pageobjects/         # Page Objects
│   ├── screenobjects        # Feature files written in Gherkin
│   └── steps
├── allure-reports/          # Test results and reports (Allure)
├── utils/                   # 
├── package.json             # Scripts and dependencies
└── README.md
```

---

## Requirements

- Node.js 20+  
- Appium 2.x (`npm install -g appium`)  
- Android SDK (for local Android testing)  
- Xcode with simulator (for local iOS testing – macOS only)  

---

## How to Run the Tests

### Install dependencies

```bash
npm install
```

### Run all tests (Android)

```bash
npm run android.app.cucumber
```

### Run a specific feature

```bash
npm run android.app.cucumber:feature ./tests/features/drag.feature
```

### Run by platform

```bash
# Android
npm run android.app.cucumber

# iOS
npm run ios.app
```

---

### Generate Allure Report

After test execution, you can generate and visualize Allure reports:

#### Generate report (for CI/CD or local use)

```bash
npm run report
```

> Generates report files at `reports/allure-report`, **without opening the browser**. Ideal for CI pipelines.

#### Open the report locally

```bash
npm run report:open
```

> Generates the report and **automatically opens it** in the local browser.

---

## CI/CD Execution (GitHub Actions)

The project includes continuous integration pipelines:

| Pipeline                         | Platform | Status                      |
|----------------------------------|----------|-----------------------------|
| `.github/workflows/android.yml` | Android  | Active                      |
| `.github/workflows/ios.yml`     | iOS      | Temporarily disabled        |

- CI executions use **BrowserStack**  
- The Allure report is generated as an artifact at the end of each run  

---

## 🔍 Notes

- The project is prepared for execution on **Android and iOS**, using conditional mappings (`browser.isAndroid`) to support both.
- Screenshots are captured automatically on failures and attached to the Allure report.
- The `.app` file required for iOS is not yet included — therefore, iOS tests are currently disabled.

---

## 👩‍💻 Author

Developed by [Bruno Mendes](https://github.com/RoenMidnigh)
