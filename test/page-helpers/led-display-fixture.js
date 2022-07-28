 class LedDisplayFixture {


    /**
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        this.ledDisplay = page.locator('led-display');
    }

    get value() {
        return "";
    }

}

module.exports = {LedDisplayFixture};