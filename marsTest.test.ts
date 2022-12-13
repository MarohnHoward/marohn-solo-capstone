import {Mars} from './marsPage'
const mars = new Mars()

describe('Mars Solo Capstone Cookie Clicker Project', () => {
    test('Can click the cookie a lot and switch tabs', async () => {
        await mars.navigate()
        await mars.click(mars.englishBtn)
        await mars.driver.sleep(3000)
        await mars.repeatClick(200, mars.bigCookie)
        await mars.driver.sleep(2000)
        //await mars.click(mars.cusorBtn)
        await mars.click(mars.twitterBtn)
        await mars.tabs()
        await mars.repeatClick(50, mars.bigCookie)
        await mars.click(mars.legacyBtn)
        await mars.click(mars.ascendBtn)
        await mars.click(mars.reincarnateBtn)
        await mars.click(mars.yesBtn)
        await mars.repeatClick(100, mars.bigCookie)
        await mars.driver.sleep(3000)
        await mars.driver.quit()
    })
})