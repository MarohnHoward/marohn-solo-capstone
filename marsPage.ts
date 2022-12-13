import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class Mars extends BasePage {
    //selectors - what we are locating/ manipulating
    englishBtn: By = By.css('#langSelect-EN')
    bigCookie: By = By.xpath('//button[@id = "bigCookie"]')
    legacyBtn: By = By.xpath('//div[text() = "Legacy"]')
    ascendBtn: By = By.xpath('//a[@class = "option smallFancyButton focused"]')
    reincarnateBtn: By = By.css('#ascendButton')
    yesBtn: By = By.xpath('//a[text() = "Yes"]')
    twitterBtn: By = By.xpath('//a[text()="twitter"]')
    cusorBtn: By = By.xpath('//div[@id = "productIcon0"]')
    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"})
    }

    //methods - repeatable functionality 

    async repeatClick(clickNum, elementClick) {
        for (let i = 0; i < clickNum; i++) {
            await this.click(elementClick)
        }
    }

    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles()
        /* random expect example sorry
        let results = await this.getText(this.legacyBtn)
        expect(results).toContain("Legacy")
        */
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        await this.driver.close()
        await this.driver.switchTo().window(myTabs[0])
    }
}