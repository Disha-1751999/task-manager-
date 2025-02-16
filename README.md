# Intrtoduction

 The Task Management Application is a comprehensive tool designed to help users efficiently manage their daily tasks. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this application offers features like user authentication, task creation, updating, deletion, and retrieval. The system ensures secure operations through robust authentication mechanisms and provides a seamless user experience with its intuitive design. This project demonstrates the integration of modern web development technologies to deliver a scalable and user-friendly solution.


# Project Overview
The application is divided into two main components:

Frontend: Developed using React.js, the frontend is responsible for the user interface and experience. It uses Zustand for state management to ensure efficient handling of API integration and global state.

Backend: Powered by Express.js and Node.js, the backend handles the application's logic, API endpoints, and database operations. MongoDB serves as the database, providing a flexible schema for storing user and task data.



# Key Features

User Authentication: Secure registration, login, and password management using JWT and bcrypt.

Task Management: Allows users to create, update, delete, and retrieve tasks.

Global State Management: Zustand ensures efficient management of the application state.

Secure API Operations: Includes token validation, password hashing, and CORS configuration.

Deployment Ready: The project is deployed on Vercel, ensuring accessibility and scalability.


## Technologies Used

- **Frontend:**
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [React.js](https://reactjs.org/)
  - [Zustand](https://zustand-demo.pmnd.rs/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)

- **Database:**
  - [MongoDB](https://www.mongodb.com/)

- **Other Tools:**
  - [GitHub](https://github.com/)
  - [VSCode](https://code.visualstudio.com/)


#State Management

How Zustand is Used for API Integration and Managing Global State

Zustand Store: Zustand is used to create a lightweight store to manage user authentication state, task data, and other globally shared states.

# Global State Management:

API calls for user authentication (register, login, logout, etc.) and task management (create-task, update-task, etc.) are directly integrated with Zustand actions.

Zustand enables a simplified state management approach without the boilerplate of other libraries.


## Setup Instructions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [MongoDB](https://www.mongodb.com/) 

**Backend Setup**

Clone the repository:
```
git clone https://github.com/Disha-1751999/task-manager-.git
```

Navigate to the backend directory:
```
cd backend
```

Install dependencies:
```
npm install
```

Create a .env file with the following variables:
```
PORT= 5000
JWT_KEY='eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczOTIxMTE4NiwiaWF0IjoxNzM5MjExMTg2fQ.1kKRHyo8dM7HwlNjQTeJK1wHBP4m8Q_s1_ulN3mTS3I'
DATABASE='mongodb+srv://dishadas4161:dishadas4161@cluster0.z9sdk.mongodb.net/task-app?retryWrites=true&w=majority'
ORIGIN='http://localhost:5173'

```

Start the server:
```
nodemon index.js
```


**Frontend Setup**

Navigate to the frontend directory:
```
cd frontend
```

Install dependencies:
```
npm install
```

Create a .env file with the following variables:
```
VITE_SERVER_URL='http://localhost:5000'

```

Start the server:
```
npm run dev
```
## API Documentation

| Endpoint              | Method | Description                       |
|-----------------------|--------|-----------------------------------|
| `/register`           | POST   | Registers a new user             |
| `/login`              | POST   | Authenticates a user             |
| `/logout`             | GET    | Logs out the user                |
| `/send-otp`           | POST   | Sends an OTP to the user's email |
| `/verify-otp`         | POST   | Verifies the OTP                 |
| `/change-password`    | POST   | Changes the user's password      |
| `/get-user-info`      | GET    | Retrieves user information       |
| `/update-profile`     | POST   | Updates user profile             |
| `/create-task`        | POST   | Creates a new task               |
| `/update-task/:id`    | POST   | Updates an existing task         |
| `/delete-task/:id`    | GET    | Deletes a specific task          |
| `/read-task/:id`      | GET    | Reads a specific task            |
| `/read-all-task`      | GET    | Reads all tasks                  |




## Security Measures

# Password Hashing:

User passwords are hashed using bcrypt before storing them in the database.

# Token Validation:

JWT tokens are used for authentication and authorization.

Tokens are validated using middleware to ensure access to protected routes.

# Input Validation:

Data inputs are sanitized and validated to prevent SQL injection and XSS attacks.

 # CORS:

Configured CORS to allow only the client domain access to the API.




## Deployment

The deployment links for the application:

Frontend: [Deployed Frontend](https://task-management-app-client-lake.vercel.app/)

Backend: [Deployed Backend](https://task-management-app-server-henna.vercel.app/)










































# DEMO
## Login Page
![Screenshot (55)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/e6c16d98-9342-4d37-b17c-7035fcbd77dd)
## Home Page
![Screenshot (65)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/d9e4fc89-d1ad-4604-b610-6842e5e71b48)
## To-Do Page
![Screenshot (61)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/45f2bb36-08db-4e4e-9c6d-ea84845469b1)
## Task Page
![Screenshot (62)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/0ac74f42-3851-4102-a2f9-ee609ded1eba)
## Notes Page
![Screenshot (63)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/a5726406-2b8b-445b-8ee9-01bd1e64d79c)
## Dark - Mode
![Screenshot (64)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/30f8cd99-c136-4721-b552-6a146827ed88)


    
