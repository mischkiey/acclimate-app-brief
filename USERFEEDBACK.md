# First Capstion App Name: Acclimate.

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
    > The search form should show multiple search inputs.
    
    This will be implemented in the next release.

    <p>&nbsp;</p>

    > The search form should have single-click/press inputs.

    I decided not to implement this feature to force the user to make a conscious, deliberate selection before submitting the form. This will save the user extra steps if he/she accidentally clicks on a plan (requires the user to delete the plan and make another selection by pressing the search icon). However, this decision is not final and may change in the future.

<p>&nbsp;</p>

2. Minh Nguyen, classmate
    > I should be able to view new password requirements.
    
    The app validates the password as the user types. An error message is displayed on top of the form whenever the password does not meet a certain requirement.
    I also added tooltip that displays password hints on input hover.

<p>&nbsp;</p>

3. Muhajir Sayer
    > Acclimate is super cool! I could see myself using this to make sure I’m prepared for natural disasters in the future. The design is clean, and the app is easy and intuitive to use, with great features and functionality.

<p>&nbsp;</p>

4. Renata Dickinson, classmate
    > I should be able to understand what the lists are for/I should be able to see an instructions page.
    
    I added tooltips to buttons with no labels/that may seem unintuitive.
    I added a help page. New users are redirected to this page upon first-time login.

    <p>&nbsp;</p>

    > Add further username validation (spaces not allowed anywhere) on sign up.

    I added a simple username validation logic on client side which checks for spaces as user types.

    <p>&nbsp;</p>

    > Implement XSS.

    Implemented simple sanitation methods on data being returned to cient side.
    
<p>&nbsp;</p>

5. Wesley Rou, classmate
    > There is a lot of white on white on white. Maybe a pastel palette would help pop the components out even more.
    
    Action: 

    <p>&nbsp;</p>

    > The little face on the landing page is cute, but there's a lot of white space to the right of it. I wonder whether it should go up above to the left of the app name.
    
    Action: 

    <p>&nbsp;</p>

    > After login, I get navigated to the empty dashboard. Maybe after registration, login automatically and then redirect to the search page to bypass the step where a first time user has to navigate to the search manually.
    
    Action: When a new user logs in for the first the time, he or she is redirected to the help page.

    <p>&nbsp;</p>

    > Visually I like the buttons, but I think you lost a fair bit of clarity on what some of them do (specifically, I clicked on the + button on the task list 10 times before realizing that it was to add an entry into the list because I thought it was going to generate a list for me like it says in the instructions).
    
    Action: Added tooltips to buttons onhover to clear ambiguity.

<p>&nbsp;</p>

#### Non-developers/Consumers

1.

