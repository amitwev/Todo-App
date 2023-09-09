# React Todo Exercise

This repos contains exercise project for the React State.

## Setup
- inside this folder you will find a React project that was generated with vite: `npm init vite@latest playground -- --template react-ts`
- This is a TypeScript based plain React project with the following dependencies:
  - `json-server` - https://github.com/typicode/json-server
- This project use `json-server` to provide a local file based database. The database is located in the `db.json` file.
- run `npm install`
- run `npm run dev` to start the dev server on `localhost:5173`
- run `npm run db` to start the local database server on `localhost:3000`

## Instructions
This app is working against a local database that is provided by `json-server` library. https://github.com/typicode/json-server

### The classic Todos app
- The app is a classic Todos app. It has a list of todos and a simple way form to add/edit/delete/complete a todo.
- While it's simple, it's a good playground to practice the basic concepts of state management.
- Our mission: manage state using different techniques.
  - You will start with the classic React `state` and `props`.
  - Then you will move to `context`.
- As a bonus: the database contains a `users` array, pagination, and sorting. You can use them to practice more advanced concepts.

### API
Full CRUD API is available for the `todos` resource, same for the `users` resource.

All Todos  [GET] `http://localhost:3000/todos`
Single Todo [GET] `http://localhost:3000/todos/:id`
Add Todo [POST] `http://localhost:3000/todos`
Update Todo [PUT] `http://localhost:3000/todos/:id`
Delete Todo [DELETE] `http://localhost:3000/todos/:id`
