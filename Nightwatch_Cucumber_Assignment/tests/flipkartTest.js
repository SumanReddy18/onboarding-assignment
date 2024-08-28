module.exports = {
  '@tags': ['flipkart'],

  'Verify landing page and search for products on Flipkart': async function (browser) {
    const page = browser.page.flipkartHomePage();

    await page.goToHomepage();
    await page.verifyLandingPageFlipkartUrl();
    await page.enterTheValueIntoSearchBox('Apple');
    await page.verifySearchResults();
    
    browser.end();
  },
};