# Acclimate.

<p>&nbsp;</p>

## Links
Live app - https://acclimate-app.vercel.app

GitHub client repo - https://github.com/mischkiey/acclimate-app-client

GitHub API repo - https://github.com/mischkiey/acclimate-app-server

<p>&nbsp;</p>

## Consolidated User Experience Feedback

### Sources
1. Developers
2. Non-developers/Consumers
    1. Tech-savvy
    2. Non-tech-savvy 

<p>&nbsp;</p>

#### Developers

1. Joshua Struve, classmate
    > User Feedback: The search form should show multiple search inputs
    
    This will be implemented in the next release.
    <p>&nbsp;</p>

    > User Feedback: The search form should have single-click/press inputs

    * Action: After careful consideration, I decided not to implement this functionality for the ff reasons:
    *

<p>&nbsp;</p>

2. Minh Nguyen, classmate
> User Feedback: I should be able to view new password requirements

** Action: Error message is displayed on top of the form whenever password does not meet a certain requirement
** Action: Added tooltip that displays password hints on input hover

3. Muhajir Sayer
> User Feedback: Acclimate is super cool! I could see myself using this to make sure I’m prepared for natural disasters in the future. The design is clean, and the app is easy and intuitive to use, with great features and functionality

4. Renata Dickinson, classmate
> User Feedback: I should be able to understand what the lists are for/I should be able to see an instructions page
* Action: Added tooltips to buttons/icons with no labels
* Action: Added a help page
* Action: When a new user logs in for the first time, he or she is redirected to the help page

> User Feedback: Add further username validation (spaces not allowed anywhere) on sign up
* Action: Added simple username validation on client side which checks for spaces as user types

> User Feedback: Implement XSS
* Action: Implemented simple sanitation methods on data being returned to cient side

5. Wesley Rou, classmate
> There is a lot of white on white on white. Maybe a pastel palette would help pop the components out even more
* Action: 

> The little face on the landing page is cute, but there's a lot of white space to the right of it. I wonder whether it should go up above to the left of the app name
* Action: 

> After login, I get navigated to the empty dashboard. Maybe after registration, login automatically and then redirect to the search page to bypass the step where a first time user has to navigate to the search manually
* Action: When a new user logs in for the first the time, he or she is redirected to the help page

> Visually I like the buttons, but I think you lost a fair bit of clarity on what some of them do (specifically, I clicked on the + button on the task list 10 times before realizing that it was to add an entry into the list because I thought it was going to generate a list for me like it says in the instructions)
* Action: Added tooltips to buttons onhover to clear ambiguity

#### Non-developers/Consumers
1.

