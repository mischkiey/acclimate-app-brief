# Acclimate.

## Link to live static app
Standard link =  https://acclimate-app.vercel.app/loginpage

## Link to GitHub repo
Standard Link = https://github.com/mischkiey/acclimate-app-client

## Consolidated User Experience Feedback

### Sources
1. Developers
2. Non-developers/Consumers
    2.1. Tech-savvy
    2.2. Non-tech-savvy 

#### Developers

1.1. Experienced

Joshua Struve, classmate
> User Feedback: Have multiple search inputs/single click/press buttons
[] Action:

Minh Nguyen, classmate
> User Feedback: I should be able to view new password requirements
[X] Action: Error is displayed for when password does not meet requirements
[X] Action: Added tooltip on hover with password hints

Renata Dickinson, classmate
> User Feedback: I should be able to understand what the lists are for/I should be able to see an instructions page
[X] Action: Added tooltips to buttons/icons with no labels
[X] Action: Added a help page route
[X] Action: When a new user logs in for the first the time, he or she is redirected to the help page


> User Feedback: Add further username validation (spaces not allowed before or after) on sign up
[X] Action: Added simple username validation on client side which checks for spaces as user types

> User Feedback: Implement XSS
[X] Action: Implemented simple sanitation methods on data being returned to cient side

Wesley Rou, classmate
> There is a lot of white on white on white. Maybe a pastel palette would help pop the components out even more
[] Action: 

> The little face on the landing page is cute, but there's a lot of white space to the right of it. I wonder whether it should go up above to the left of the app name
[] Action: 

> After login, I get navigated to the empty dashboard. Maybe after registration, login automatically and then redirect to the search page to bypass the step where a first time user has to navigate to the search manually
[X] Action: When a new user logs in for the first the time, he or she is redirected to the help page

> Visually I like the buttons, but I think you lost a fair bit of clarity on what some of them do (specifically, I clicked on the + button on the task list 10 times before realizing that it was to add an entry into the list because I thought it was going to generate a list for me like it says in the instructions)
[X] Action: Added tooltips to buttons onhover to clear ambiguity

#### Non-developers/Consumers
1.