# Expense Tracker App

 MERN stack application for tracking expenses.

## Features

- **Create:** Add new expenses with details such as description, amount, and date.
- **Read:** View a list of all expenses and their details.
- **Update:** Edit existing expense information.
- **Delete:** Remove expenses from the list.

## Technologies Used

- **MongoDB:** Database for storing expense data.
- **Express.js:** Web application framework for Node.js to handle server-side operations.
- **React.js:** Frontend library for building user interfaces.
- **Node.js:** JavaScript runtime for server-side development.

## Getting Started

```bash
#!/bin/bash

# Clone the repository
git clone https://github.com/Bassem-Belhadj/Expense-Tracker.git

# Change into the project directory
cd Expense-Tracker

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..

# Create a .env file in the server directory
echo "MONGODB_URI=your_mongodb_connection_string" > server/.env

# Start the application
npm start


