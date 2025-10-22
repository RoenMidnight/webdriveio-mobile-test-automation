import {Given, When, Then} from '@wdio/cucumber-framework'
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../screenobjects/components/TabBar.js';
import LoginScreen from '../screenobjects/LoginScreen.js';
import NativeAlert from '../screenobjects/components/NativeAlert.js';

Given(/^I am on the (login|signup) tab$/, async (tab) => {
    allureReporter.addStep("opening the login screen");
    await TabBar.waitForTabBarShown();
    await TabBar.openLogin();
    await LoginScreen.waitForIsShown(true);
});

When(/^I enter valid (login|signup) credentials$/, async (formType) => {
    allureReporter.addStep("opening the login/signup screen");
    if (formType === 'login') {
        await LoginScreen.tapOnLoginContainerButton();
        await LoginScreen.submitLoginForm({username: 'test@webdriver.io', password: 'Test1234!'});
    } else if (formType === 'signup') {
        await LoginScreen.tapOnSignUpContainerButton();
        await LoginScreen.submitSignUpForm({username: 'test@webdriver.io', password: 'Test1234!',  confirmation: 'Test1234!'});
    }
});

When(/^I enter signup credentials with a invalid (confirmation password|password)$/, async (formInfo) => {
    allureReporter.addStep("entering signup credentials");
    await LoginScreen.tapOnSignUpContainerButton();
    if (formInfo === "password"){
        await LoginScreen.submitSignUpForm({username: 'test@webdriver.io', password: 'Ts12!@',  confirmation: 'Ts12!@'});
    } else { 
        await LoginScreen.submitSignUpForm({username: 'test@webdriver.io', password: 'Test1234!',  confirmation: '!4321Tset'});
    }
});

Then(/^I should see a (Success|Signed Up) alert$/, async (alertType) => {
    allureReporter.addStep("visualizing the success/signup alert");
    await NativeAlert.waitForIsShown();
    await expect(await NativeAlert.text()).toContain(alertType);
});

Then('I should see an error message "Please enter the same password"', async () => {
    allureReporter.addStep("visualizing the error message");
    await LoginScreen.displayErrorMessage("Please enter the same password");
});

Then('I should see an error message "Please enter at least 8 characters"', async () => {
    allureReporter.addStep("visualizing the error message");
    await LoginScreen.displayErrorMessage("Please enter at least 8 characters");
});

Then('the alert should be closed when I click on OK', async () => {
    allureReporter.addStep("click to the alert ok button");
    await NativeAlert.topOnButtonWithText('OK');
    await NativeAlert.waitForIsShown(false);
});