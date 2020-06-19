var reviewCommands = {
    enterSearch: function (reviewAssets) {
       this
        .waitForElementPresent('body')
        .setValue('@search',reviewAssets[0])
        .click('@searchButton')
        .verify.containsText('div[id="search"]',reviewAssets[0])
        .click('@search')
        .clearValue('@search')
        .setValue('@search',reviewAssets[1])
        .click('@searchButton')
        .verify.containsText('div[id="search"]',reviewAssets[1])
        .click('@search')
        .clearValue('@search')
        .setValue('@search',reviewAssets[2])
        .click('@searchButton')
        .verify.containsText('div[id="search"]',reviewAssets[2])
        .click('@homePage')
        .click('div[id="desktop-3"]')
        .click('@add')
        .click('span[id="nav-cart-count"]')
        .click('@homePage')
        .click('@menu')
        .verify.containsText('div[id="hmenu-content"]',"Amazon Music")   
return this
    },
}


module.exports = {
    url: 'https://www.amazon.com/',
    commands: [reviewCommands],
    elements: {
        search: 'input[type="text"]',
        searchButton: 'input[type="submit"]',
        menu: 'a[id="nav-hamburger-menu"]',
        homePage: 'a[class="nav-logo-link"]',
        add: 'input[id="add-to-cart-button"]'

    }
}   

