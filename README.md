# First Capstone

## Proposed App Name/s: Acclimate
**Link to live app proposal: https://mischkiey.github.io/thinkful-ei-first-capstone/**

### Description
* Acclimate is an informational and utility **disaster management** app
* It aims to provide accurate, reliable, and useful information and tools to be able to handle impending disasters systematically and effectively

### How It Works
* The app will provide users with general information on a selected disaster
* The app will generate a disaster management plan (based on user-selection) that has steps for before, during, and after the event
* The app will also generate a task list that incorporates the above plan
* The app will also generate a shopping list with recommended supplies
* Users can personalize the task and shopping lists to tailorfit their current circumstances/needs

### Scope of Information
**Due to the time constraint, this app will only be covering the list of topics below. However, in the implementation of the user stories, high importance will be given to scalability**

* Natural Disasters
    * Blizzards/Snowstorms
    * Hurricanes
    * Wildfires
    * Volcanic erruptions
* Man-made & Hybrid Disasters
    * Nuclear Explosions
    * Political Unrest/Terrorism
    * Pandemics
* Bonus content - Other Scenarios/Emergency Situations
    * Getting Stuck in an Elevator
    * Lost at Sea
    * Lost Hiker

### Disaster Management Utilities
* Task List
* Supplies Shopping List
* Medical Information Logger
* Forum, Public & Private - A space for exchanging information, sharing past experiences, resources, and current status

### Data Model
* Disaster
    * Table A
        * Disaster Name
            * Text Field
        * Disaster Type
            * Select
                * Natural
                * Man-made
        * Disaster Description
    * Table B
        * Disaster Management Plan
            * Plan Name
                * Text Field
            * Plan Description
                * Text Field
            * Plan Stage/Type
                * Select
                    * Readiness/Before the catastrophic event
                    * Response/During the catastrophic event
                    * Recovery/After the catastrophic event

### User Stories
**As a new user**
1. I should be able to sign up for an account - High
2. I should be able to log my medical information [for use by first responders] - High
3. I should be able to retrieve general information on a selected disaster - High
4. I should be able to generate a disaster management plan based on the selected disaster - High
5. I should be able to create a personal household inventory list, as well as a shopping list that is partially filled with recommended items from the *Readiness* stage [of the DMP] - Medium
6. I should be able to auto-generate a partially-filled task list with recommended steps from the *readiness* stage of the disaster management plan - Medium
7. I should be able to auto-generate a partially-filled task list with recommended steps from the *recovery* stage of the disaster management plan - Medium
8. I should be able to join a public forum - Very Low/If time even allows
9. I should be able to create a private forum with selected contacts - Very Low/If time even allows
10. I should be able to post messages on a forum - Very Low/If time even allows

**As a returning user**
1. I should be able to sign into my account - High
2. I should be able to access my disaster management plan - High
3. I should be able to update my medical information. - Medium
4. I should be able to update my task, inventory, and shopping lists - Medium

**As an administrator**
1. I should be able to update the guides/information - High
2. I should be able to create public forums as a moderator - Very Low/If time even allows
3. I should be able to administer/manage public forums - Very Low/If time even allows
4. I should be able to verify information exchanged in/on public forums - Very Low/If time even allows

### Wireframes
1. Landing Page: https://mischkiey.github.io/thinkful-ei-first-capstone/wireframes-html/landing-screen.html
2. Signup Page: https://mischkiey.github.io/thinkful-ei-first-capstone/wireframes-html/signup-screen.html
3. Login Page: https://mischkiey.github.io/thinkful-ei-first-capstone/wireframes-html/login-screen.html
4. Dashboard: https://mischkiey.github.io/thinkful-ei-first-capstone/wireframes-html/expanded-dashboard.html
5. Search Form: https://mischkiey.github.io/thinkful-ei-first-capstone/wireframes-html/search-form-screen.html

### Color Palette/Theme
**Color Palette**
* Font: Gunmetal
* Accent/Icons/Key Items: Red
* Main Background: Soft White
* Form Field Background: Paper White

**Theme**
* Stark accent/font colors
* Soft, calm background colors
* Light shadows for depth
* Sans serif font
* Sleek, smooth
