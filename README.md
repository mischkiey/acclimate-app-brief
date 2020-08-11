# First Capstone App Name: Acclimate

## Links
**Link to live app: https://acclimate-app.vercel.app/**

**Link to live app proposal: https://mischkiey.github.io/thinkful-ei-first-capstone/**

<p>&nbsp;</p>

## Description
* Acclimate is an informational and utility **disaster management** app
* It aims to provide accurate, reliable, and useful information and tools to be able to handle impending disasters systematically and effectively

<p>&nbsp;</p>

## How It Works
As the user, I can:
* View general information on a selected disaster
* Access disaster management plans that has steps for before, during, and after the event
* Create and customize a task list and a shopping list, utilities to help me in the implementation of my chosen plan
* Add steps from my chosen disaster plan to my lists (where appropriate) at the push of a button

<p>&nbsp;</p>

## Client Documentation/Screenshots

1. **Landing Page** - The first page the user sees, this page contains meta data on the app, such as app description and summary.
![Landing Page](/images/screenshots/landing-page.png)

<p>&nbsp;</p>

2. **Signup Page** - To get started, the user must create an account by supplying a full name, a unique username (checked against the database in real time), and a password.
![Signup Page](/images/screenshots/signup-page.png)

<p>&nbsp;</p>

3. **Password Hint** - To successfully create an account, the user must come up with a password that meets requirements. Such requirements are displayed via a tooltip that appears on input hover. Just like the username, the password is validated as the user types.
![Password Hint Tooltip](/images/screenshots/password-hint.png)

<p>&nbsp;</p>

4. **Login Page** - After creating an account, the new user is redirected to the login page for authentication.
![Login Page](/images/screenshots/login-page.png)

<p>&nbsp;</p>

5. **Help Page** - Upon successful login, the help page is first displayed for the new user. This page contains all pertinent information for the user to be able to use the app as intended. This page also contains acknowledgements and any resources used. Note: There are also **tooltips** in place that appear on hover for easier reference.
![Help Page](/images/screenshots/help-page.png)

<p>&nbsp;</p>

6. **Search Database Form** - This form contains options for all available disaster management plans that a user may choose from. Upon submission of this form, the chosen plan will be pinned to the user's dashboard.
![Search Database](/images/screenshots/search-database.png)
 
<p>&nbsp;</p>

7. **Compressed Dashboard** - This is how the dashboard looks by default. Clicking on the unfold-more icon on the bottom right of the disaster plan will expand this component.
![Compressed Dashboard](/images/screenshots/compressed-dashboard.png)

<p>&nbsp;</p>

8. **Expanded Dashboard** - This is how the dashboard looks like when fully expanded. The dashboard contains the disaster management plan/s and the task and shopping lists.
![Expanded Dashboard](/images/screenshots/expanded-dashboard.png)

<p>&nbsp;</p>

9. **Item Options** - The user may either check, edit, or delete an item in his lists.
![Item Options](/images/screenshots/item-options.png)

<p>&nbsp;</p>

10. **Add New Item** - To add a new item, the user must type in a value and submit by either pressing enter on keyboard or clicking on the add-item icon.
![Add New Item](/images/screenshots/add-new-item.png)

<p>&nbsp;</p>

11. **Add Step to List** - Some steps in the disaster management plan are 'itemable', indicated by the add-task or add-cart icons at the end. Click on the icon to add the shorthand version of the step to the appropriate list.
![Add Step to List](/images/screenshots/add-step-to-list.png)

<p>&nbsp;</p>

12. **Nav Bar** - The nav bar contains all available links to navigate the user to different views.
![Nav Bar](/images/screenshots/nav-bar.png)

<p>&nbsp;</p>

## Server Documentation

### Post User Endpoints

#### Create User Account
Returns JSON data about new user account

* **URL**

    `/api/user`

* **Method**

    `POST`

* **URL Params**
    
    None

* **Data Params**

    **Required:**

    `{user_name, user_password, user_full_name}`

* **Success Response**
    * **Code:** 200 <br />
    **Headers:** `{location: /api/user/:user_id}` <br />
    **Content:** `{user_name, user_full_name, user_id, user_date_created}`

* **Error Response**
    * **Code:** 400 <br />
    **Content:** `{error: "Missing 'user_name/user_password' in body"}` <br />
    **Content:** `{error: 'Password must be longer than 8 characters'}` <br />
    **Content:** `{error: 'Password must be shorter than 72 characters'}` <br />
    **Content:** `{error: 'Password must must not start or end with spaces'}` <br />
    **Content:** `{error: 'Password must contain 1 upper case, 1 lower case, 1 number, and 1 special character'}` <br />
    **Content:** `{error: 'Username not available'}`

<p>&nbsp;</p>

#### Add Program to User's Program List
Returns 201 Created 

* **URL**

    `/api/user/program`

* **Method**

    `POST`

* **URL Params**

    None

* **Data Params**

    **Required:**

    `{disaster_program_id}`

* **Success Response**
    * **Code:** 201 <br />
    **Content:** `{user_id, disaster_program_id}`

* **Error Response**
    * **Code:** 400 <br />
    **Content:** `{error: 'No program selected'}` <br />
    **Content:** `{error: 'Program already added'}`

<p>&nbsp;</p>

#### Add Task to User's Task List
Returns 201 Created and JSON data about new user task

* **URL**

    `/api/user/task`

* **Method**

    `POST`

* **URL Params**

    None

* **Data Params**

    **Required:**

    `{user_id, user_task}`

* Success Response
** Code: 201

    Content: {user_task_id, user_task, user_task_completed, user_id}

* Error Response
** Code: 400

    Content: {error: "Missing 'task' details in body"}

<p>&nbsp;</p>

#### Add Shopping Item to User's Shopping List
Returns JSON data about new user shopping item

* URL

    /api/user/shopping

* Method

    POST

* URL Params

&nbsp;

* Data Params

    Required

    {user_id, user_shopping_item}

* Success Response
** Code: 201

    Content: {user_shopping_item_id, user_shopping_item, user_shopping_item_completed, user_id}

* Error Response
** Code: 400

    Content: {error: "Missing 'shopping' details in body"}

<p>&nbsp;</p>

## Technology Used
1. HTML, CSS, JavaScript
2. React
3. Node.js
4. Express
5. PostgreSQL
6. Vercel
7. Heroku
8. Testing frameworks such as Jest, Mocha, Chai, & Supertest
