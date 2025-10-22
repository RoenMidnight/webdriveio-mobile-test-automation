import {Given, When, Then} from '@wdio/cucumber-framework'
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../screenobjects/components/TabBar.js';
import LoginScreen from '../screenobjects/LoginScreen.js';
import SwipeScreen from '../screenobjects/SwipeScreen.js';
import FormsScreen from '../screenobjects/FormsScreen.js';
import WebviewScreen from '../screenobjects/WebviewScreen.js';
import DragScreen from '../screenobjects/DragScreen.js';
import HomeScreen from '../screenobjects/HomeScreen.js';
import NativeAlert from '../screenobjects/components/NativeAlert.js';


Given(/^I am on the (home) tab$/, async (tab) => {
    allureReporter.addStep("opening the app main screen");
    await TabBar.waitForTabBarShown();
    await TabBar.openHome();
    await HomeScreen.waitForIsShown(true);
});

When(/^I navigate to (webview|login|signup|forms|swipe|drag) tab$/, async (tab) => {
    allureReporter.addStep("navigating through the screens");
    await TabBar.waitForTabBarShown();
    switch(tab){
        case "webview":
            await TabBar.openWebView();
            await WebviewScreen.waitForWebViewIsDisplayedByXpath(true);
            break;
        case "login":
            await TabBar.openLogin();
            await LoginScreen.waitForIsShown(true);
            await LoginScreen.tapOnLoginContainerButton();
            break;
        case "signup":
            await TabBar.openLogin();
            await LoginScreen.waitForIsShown(true);
            await LoginScreen.tapOnSignUpContainerButton();
            break;
        case "forms":
            await TabBar.openForms();
            await FormsScreen.waitForIsShown(true);
            break;
        case "swipe":
            await TabBar.openSwipe();
            await SwipeScreen.waitForIsShown(true);
            break;
        case "drag":
            await TabBar.openDrag();
            await DragScreen.waitForIsShown(true);
            break;
    }   
    
});

Then(/^I should see the (webview|login|signup|forms|swipe|drag) tab$/, async (tab) => {
    allureReporter.addStep("visualizing if the tab was loaded");
    switch(tab){
        case "webview":
            await WebviewScreen.waitForWebViewIsDisplayedByXpath(true);
            break;
        case "login":
            await LoginScreen.screen.isDisplayed();
            break;
        case "signup":
            await LoginScreen.screen.isDisplayed();
            break;
        case "forms":
            await FormsScreen.screen.isDisplayed();
            break;
        case "swipe":
            await SwipeScreen.screen.isDisplayed();
            break;
        case "drag":
            await DragScreen.screen.isDisplayed();
            break;
    }
    
});