import {Given, When, Then} from '@wdio/cucumber-framework'
import TabBar from '../screenobjects/components/TabBar.js';
import FormsScreen from '../screenobjects/FormsScreen.js';
import NativeAlert from '../screenobjects/components/NativeAlert.js';
import * as testData from '../data/testData.json' with {type: 'json'};

Then(/^I fill the form with valid data and submit$/, async () => {
    await FormsScreen.fillSubmitForm({input: 'É necessário Imaginar Sisifo Feliz', dropdown: 'webdriver.io is awesome'});
    await FormsScreen.tapOnActiveButton();
});

Then(/^I should see a popup with the message "This button is active"$/, async () => {
    await NativeAlert.waitForIsShown();
    await expect(await NativeAlert.text()).toContain("This button is active");
    await NativeAlert.topOnButtonWithText('OK');
});

Then(/^I fill the Text field$/, async () => {
    await FormsScreen.tapOnInputTextResult()
    await FormsScreen.fillInputText({input: 'É necessário Imaginar Sisifo Feliz'});
});

Then(/^I should see the correct data displayed at preview field$/, async () => {
    await FormsScreen.validatePreview();
});

Then(/^I fill the form using the data from the JSON file$/, async () => {
      await testData.default.forEach(element => {
        FormsScreen.fillFormWithJson(
            {textInput: element.inputText, switchVal: element.switch, dropdown:element.dropdown}
        );
      });
});