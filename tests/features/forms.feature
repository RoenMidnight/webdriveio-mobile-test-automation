Feature: Forms Tests

  Scenario: Fill a form
    Given I am on the home tab
    When I navigate to forms tab
    Then I fill the form with valid data and submit
    And I should see a popup with the message "This button is active"

  Scenario: Check input data at the Forms screen
    Given I am on the home tab
    When I navigate to forms tab
    Then I fill the Text field
    And I should see the correct data displayed at preview field

  Scenario: Run form tests using JSON data
    Given I am on the home tab
    When I navigate to forms tab
    Then I fill the form using the data from the JSON file