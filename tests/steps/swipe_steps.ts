import {Given, When, Then} from '@wdio/cucumber-framework'
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../screenobjects/components/TabBar.js';
import SwipeScreen from '../screenobjects/SwipeScreen.js';
import Carousel from '../screenobjects/components/Carousel.js';

Then(/^it swipe horizontal by swiping the carousel from left to right$/, async () => {
    allureReporter.addStep("swipping the carousel");
    if (!driver.isAndroid) {
        await SwipeScreen.logo.scrollIntoView({
            scrollableElement: await SwipeScreen.screen,
            direction: 'up',
            maxScrolls: 5,
            percent: 0.99,
        });
        await expect(SwipeScreen.logo).toBeDisplayed();
     }
    
     allureReporter.addStep("swipping the carousel to left");
    await expect(await Carousel.isCardActive(await Carousel.openSourceCard)).toBeTruthy();    
    await Carousel.swipeLeft();
    await expect(await Carousel.isCardActive(await Carousel.communityCard)).toBeTruthy();
    await Carousel.swipeLeft();
    await expect(await Carousel.isCardActive(await Carousel.jsFoundationCard)).toBeTruthy();
    await Carousel.swipeLeft();
    await expect(await Carousel.isCardActive(await Carousel.supportVideosCard)).toBeTruthy();
    await Carousel.swipeLeft();
    await expect(await Carousel.isCardActive(await Carousel.extendableCard)).toBeTruthy();
    await Carousel.swipeLeft();
    await expect(await Carousel.isCardActive(await Carousel.compatibleCard)).toBeTruthy();
    
    allureReporter.addStep("swipping the carousel to right");
    await Carousel.swipeRight();
    await expect(await Carousel.isCardActive(await Carousel.extendableCard)).toBeTruthy();
    await Carousel.swipeRight();
    await Carousel.swipeRight();
    await Carousel.swipeRight();
    await Carousel.swipeRight();
    await expect(await Carousel.isCardActive(await Carousel.openSourceCard)).toBeTruthy();
    
});



     
   
