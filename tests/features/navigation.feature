Feature: Screen Navigation

  Scenario: Navigate to the Webview tab
    Given I am on the home tab
    When I navigate to webview tab
    Then I should see the webview tab

  Scenario: Navigate to the Login and Sign Up tab
    Given I am on the home tab
    When I navigate to login tab
    Then I navigate to signup tab
    Then I should see the signup tab    

 Scenario: Navigate to the Forms tab
    Given I am on the home tab
    When I navigate to forms tab
    Then I should see the forms tab

  Scenario: Navigate to the Swipe tab
    Given I am on the home tab
    When I navigate to swipe tab
    Then I should see the swipe tab

  Scenario: Navigate to the Drag tab
    Given I am on the home tab
    When I navigate to drag tab
    Then I should see the drag tab
