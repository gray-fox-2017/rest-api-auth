# Database Hacktiv8 Students
Database hacktiv8 students with basic REST API

## rest-api-crud
List of basic routes:

| **Route** | **HTTP** | **Description**                       |
|-----------|----------|---------------------------------------|
|     /     | GET      | Print "Welcome to Hacktiv8 database!" |

List of user routes:

|      **Route**     | **HTTP** |       **Description**         |
|--------------------|----------|-------------------------------|
| /api/users         | GET      | Get all the users             |
| /api/users/:id     | GET      | Get a single user             |
| /api/users         | POST     | Create a user                 |
| /api/users/:id     | DELETE   | Delete a user                 |
| /api/users/:id     | PUT      | Update a user with new info   |

## Usage
With only npm:
```
npm install
npm start
```
Access the website via http://localhost:3000 or API via http://localhost:3000/api/users.
