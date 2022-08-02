// @ts-check
const { test, expect } = require('@playwright/test');
const {LedDisplayFixture} = require('./page-helpers/led-display-fixture');
const {KeypadFixture} = require('./page-helpers/keypad-fixture');

test.beforeEach(async ({page}, testInfo) => {
  await page.goto('/')
});

test('display is displayed', async ({page}) => {
    const display = new LedDisplayFixture(page);

    await expect(display.displayContents).toBe("");

});

test('all clear displays "0."', async ({page}) => {
    const display = new LedDisplayFixture(page);
    const keypad = new KeypadFixture(page);
    await keypad.allClear(); 

    await expect(display.displayContents).toBe("0.");
});