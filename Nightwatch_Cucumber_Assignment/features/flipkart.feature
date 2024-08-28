Feature: Search for a product on Flipkart
  @smoke
  Scenario: Verify Flipkart homepage and search for a product
    Given I am on the Flipkart homepage
    Then I should see the Flipkart landing page
    When I enter "Apple" in the search box and click the search button
    Then I should see the search results for "Apple"