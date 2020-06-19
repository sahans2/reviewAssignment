var home = {}
var reviewAssets = require('../pageAssets/reviewAssets')

module.exports = {
    beforeEach: browser => {
        home = browser.page.reviewObjects()
        home
        .navigate()
    },
    after: browser => {
        home
        .end()
    },
    'Smoke Test': browser => {
    home.enterSearch(reviewAssets)  
     
       
    }
}