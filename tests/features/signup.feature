Feature: Signup Form

    Scenario: Successful Signup
        Given I am on the signup tab
        When I enter valid signup credentials
        Then I should see a Signed Up alert
        And the alert should be closed when I click on OK

    Scenario: Create a new user with incorrect password confirmation to Sign Up
        Given I am on the signup tab
        When I enter signup credentials with a invalid confirmation password
        Then I should see an error message "Please enter the same password"

    Scenario: Create a new user with incorrect password to Sign Up
        Given I am on the signup tab
        When I enter signup credentials with a invalid confirmation password
        Then I should see an error message "Please enter at least 8 characters"