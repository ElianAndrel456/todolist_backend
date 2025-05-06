# Task List Application - Backend

This is a simple task list application built with Node.js, Express, and MySQL. It allows users to create, read, update, and delete tasks.

## Prerequisites

- Node.js (v14 or later)
- MySQL (v5.7 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ElianAndrel456/todolist_backend.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your database configuration:
   ```bash
   # Example configuration
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=tasklistdb
   ```
4. Run application with development mode:
   ```bash
   npm run dev
   ```
5. Run application with production mode:
   ```bash
   npm run build
   npm start
   ```
