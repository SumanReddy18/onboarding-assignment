const { Given, Then, Before, After } = require('cucumber');
const flipkartHomePage = require('../../pages/flipkartHomePage');

Before(async function() {
  console.log('Setting up test environment');
  this.browser = await this.getBrowser();
  await this.browser.url(this.browser.launchUrl);
});

After(async function() {
  console.log('Tearing down test environment');
  await this.browser.end();
});

Given('I am on the Flipkart homepage', async function () {
  try {
    await flipkartHomePage.goToHomepage.call(this);
  } catch (error) {
    console.error('Error navigating to homepage:', error);
  }
});

Then('I should see the Flipkart landing page', async function () {
  try {
    await flipkartHomePage.verifyLandingPageFlipkartUrl.call(this);
  } catch (error) {
    console.error('Error verifying landing page URL:', error);
  }
});

Then('I should enter Apple in the search box and click search button', async function () {
  try {
    await flipkartHomePage.enterTheValueIntoSearchBox.call(this, 'Apple');
  } catch (error) {
    console.error('Error entering search value and clicking search button:', error);
  }
});

Then('Verify the search results for the entered product', async function () {
  try {
    await flipkartHomePage.verifySearchResults.call(this);
  } catch (error) {
    console.error('Error verifying search results:', error);
  }
});