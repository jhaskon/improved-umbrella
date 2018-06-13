const {expect} = require('chai');
const {Builder, By, until} = require('selenium-webdriver');

describe('foo', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should check the title', async () => {
        await driver.get(`http://localhost:8000`);

        const title = await driver.getTitle();
        expect(title).to.include('umbrella');
    });

    after(async () => driver.quit());
});