#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: operator creation

  Scenario: Global Mno login
    Given open "chrome" browser
    When launch site using "http://3.109.42.45:3000/sign-in"
    Then the title should be displayed
    

  Scenario Outline: validate the login page operation
    And Enter "<Account_id>", "<email_id>" and "<password>" and Click on signin button
    Then next page should be displayed
    And click on Operators

    Examples: 
      | Account_id | eail_id          | password |
      | GL1        | suresh@gmail.com | Suresh!  |
      | GL1        | suresh@gmail.com | Suresh@  |

  #Scenario Outline: validate the login page operation
    #Then click on create button
    #And verify the creation page is displaed
    #Then fill out the form from the sheet "<SheetName>" and "<RowNumber>"
#
    #Examples: 
      #| SheetName | RowNumber |
      #| testdata  |         1 |
