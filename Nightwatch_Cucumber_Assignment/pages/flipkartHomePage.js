module.exports = {
  elements: {
    landingPageLogo: 'img[title="Flipkart"]',
    searchBox: 'input[name="q"]',
    searchButton: 'button[type="submit"]',
    searchResult: '.KzDlHZ',
  },

  commands: [{
    async goToHomepage() {
      const url = this.api.launchUrl;
      await this.api.url(url);
      await this.waitForElementVisible('@landingPageLogo', 10000);
    },

    async verifyLandingPageFlipkartUrl() {
      const { assert } = await import('chai');
      const currentUrl = await this.api.url();
      assert.equal(currentUrl.value, this.api.launchUrl, 'Verifying Flipkart landing page URL');
    },
    async enterTheValueIntoSearchBox(product) {
      await Promise.all([
        this.waitForElementVisible('@searchBox', 5000),
        this.waitForElementVisible('@searchButton', 5000),
      ]);

      await this.setValue('@searchBox', product);
      await this.click('@searchButton');
    },

    async verifySearchResults() {
      const { assert } = await import('chai');
      const searchResults = await this.api.elements('css selector', this.elements.searchResult.selector);
      assert.isAbove(searchResults.value.length, 0, 'No search results found.');
      for (const result of searchResults.value) {
        const elementText = await this.api.elementIdText(result.ELEMENT);
        assert.isTrue(elementText.value.startsWith('Apple'), `Search result does not start with "Apple": ${elementText.value}`);
      }
    },
  }],
};