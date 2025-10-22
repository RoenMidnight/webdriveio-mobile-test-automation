import {Given, When, Then} from '@wdio/cucumber-framework'
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../screenobjects/components/TabBar.js';
import DragScreen from '../screenobjects/DragScreen.js';


Then(/^should be able to solve the puzzle by dragging the pieces into the puzzle$/, async () => {
    allureReporter.addStep("drag 'n' drop screen");
    // Drag each element to the position, this uses the "new" `dragAndDrop` method that now also
    // supports native apps
    await DragScreen.dragL1.dragAndDrop(await DragScreen.dropL1);
    await DragScreen.dragC1.dragAndDrop(await DragScreen.dropC1);
    await DragScreen.dragR1.dragAndDrop(await DragScreen.dropR1);
    await DragScreen.dragL2.dragAndDrop(await DragScreen.dropL2);
    await DragScreen.dragC2.dragAndDrop(await DragScreen.dropC2);
    await DragScreen.dragR2.dragAndDrop(await DragScreen.dropR2);
    await DragScreen.dragL3.dragAndDrop(await DragScreen.dropL3);
    await DragScreen.dragC3.dragAndDrop(await DragScreen.dropC3);
    await DragScreen.dragR3.dragAndDrop(await DragScreen.dropR3);
    // Wait for the retry button to be visible, meaning the success screen is there
    // There is no expectation here because the waitForDisplayed will fail if the element is not visible
    allureReporter.addStep("drag 'n' drop wait for retry");
    await DragScreen.waitForRetryButton();
    // Retry
    allureReporter.addStep("drag 'n' drop tap retry");
    await DragScreen.tapOnRetryButton();
    // Wait for the renew button to be visible, meaning the puzzle is shown again
    // There is no expectation here because the waitForDisplayed will fail if the element is not visible
    allureReporter.addStep("drag 'n' drop wait for renew");
    await DragScreen.waitForRenewButton();
});
