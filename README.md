# Express Application
This is a sample Express.js application that provides APIs for managing users, student statistics, and articles.

## Purpose
The purpose of this application is to demonstrate developing APIs with Express for common data entities like users, students, and articles. It uses best practices like:
- Modular project structure
- Separate routes, controllers, and middlewares
- Input validation
- Error handling
The goal is to have a reusable code base for typical CRUD (Create, Read, Update, Delete) operations.

## Installation
To install the app:
```
npm install
```
This will install the dependencies from NPM.

## Running the App
To run the app in development:
```
npm run start-local
```
This will start the Node.js app with Nodemon for auto restart on file changes.

## Routes
The app provides the following API routes:

### Users
- GET /users - Get list of users
- GET /users/:email - Get user by email
- POST /users - Create a new user
- PATCH /users/:email - Update user
- DELETE /users/:email - Delete user

### Students
- GET /students - Get list of students statistics
- GET /students/worst-homework-score - Get student with worst homework score

### Articles
- GET /articles - Get list of articles
- POST /articles - Create an article
- PATCH /articles/update-tags/:id - Update tags of an article
  
There is an auto generation of UUID for each article.

Input payload validation added for routes like POST and PATCH requests.  
Standardized error handling is implemented for all routes. 
