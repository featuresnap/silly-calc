class KeypadFixture {
    
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.allClearButton = page.locator('text=AC');
    }

    async allClear() {
        await this.allClearButton.click();
    }

}

module.exports = {KeypadFixture};