# Contact Manager Backend

A RESTful API backend for managing contacts, built with Node.js, Express, MongoDB, and JWT authentication. This project demonstrates core Express concepts including user authentication, CRUD operations, and protected routes.

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![bcrypt](https://img.shields.io/badge/bcrypt-2E8B57?style=for-the-badge&logo=security&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Thunder Client](https://img.shields.io/badge/Thunder%20Client-5A67D8?style=for-the-badge&logo=thunderbird&logoColor=white)

</div>

## Features

-   User registration and authentication with JWT
-   CRUD operations for contacts (Create, Read, Update, Delete)
-   Protected routes requiring authentication
-   User-specific contact management
-   MongoDB integration with Mongoose
-   Error handling middleware

## Tech Stack

-   **Node.js** - Runtime environment
-   **Express.js** - Web framework
-   **MongoDB** - Database
-   **Mongoose** - ODM for MongoDB
-   **JWT** - Authentication tokens
-   **bcrypt** - Password hashing
-   **pnpm** - Package manager
-   **Postman** - API testing
-   **Thunder Client** - VS Code API testing

## API Endpoints

### Authentication

-   `POST /api/users/register` - Register new user
-   `POST /api/users/login` - User login
-   `GET /api/users/current` - Get current user (protected)

### Contacts

-   `GET /api/contacts` - Get all contacts (protected)
-   `POST /api/contacts` - Create new contact (protected)
-   `GET /api/contacts/:id` - Get specific contact (protected)
-   `PUT /api/contacts/:id` - Update contact (protected)
-   `DELETE /api/contacts/:id` - Delete contact (protected)

## Getting Started

1. Clone the repository
2. Navigate to backend: `cd Contact-Manager-App/backend`
3. Install dependencies: `pnpm install` (recommended) or `npm install`
4. Set up environment variables in `.env`
5. Start the server: `pnpm run dev` (development) or `pnpm start` (production)

## Testing the API

Tested with:
-   **Postman** - GUI-based API testing tool
-   **Thunder Client** - VS Code extension for API testing

## Environment Variables

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
TOKEN_EXPIRE=15m
```

## Project Structure

```
Contact-Manager-App/
└── backend/
    ├── config/
    │   └── dbConnection.js          # MongoDB connection configuration
    ├── controllers/
    │   ├── contactController.js     # Contact CRUD operations
    │   └── userController.js        # User authentication logic
    ├── middleware/
    │   ├── errorHandler.js          # Global error handling
    │   └── validateToken.js         # JWT token validation
    ├── models/
    │   ├── contactModel.js          # Contact schema definition
    │   └── userModel.js             # User schema definition
    ├── routes/
    │   ├── contactRoutes.js         # Contact API routes
    │   └── userRoutes.js            # User API routes
    ├── .env                         # Environment variables
    ├── constants.js                 # HTTP status constants
    └── server.js                    # Application entry point
```
