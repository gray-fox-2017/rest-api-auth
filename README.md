# Database Hacktiv8 Students
Database hacktiv8 students with basic REST API

## rest-api-crud
List of basic routes:

| **Route** | **HTTP** | **Description**                       |
|-----------|----------|---------------------------------------|
|     /     | GET      | Print "Welcome to Hacktiv8 database!" |

List of user routes:

|      **Route**     | **HTTP** |                       **Description**                      |
|--------------------|----------|------------------------------------------------------------|
| /api/users         | GET      | Get all the users info (admin only)                        |
| /api/users/:id     | GET      | Get a single user info (admin and authenticated user)      |
| /api/users         | POST     | Create a user (admin only)                                 |
| /api/users/:id     | DELETE   | Delete a user (admin only)                                 |
| /api/users/:id     | PUT      | Update a user with new info (admin and authenticated user) |

List of user signin and signup:

|      **Route**     | **HTTP** |                       **Description**                      |
|--------------------|----------|------------------------------------------------------------|
| /api/signup        | POST     | Sign up with new user info                                 |
| /api/signin        | POST     | Sign in while get an access token based on credentials     |

## Usage
With only npm:
```
npm install
npm start
```
Access the website via http://localhost:3000 or API via http://localhost:3000/api/users.
Access the website via https://raynor-rest-auth.herokuapp.com
