# React State Exercise

This repos contains exercise project for the React State training sessions.
Please follow the instruction below to setup the project.

## Setup
- inside this folder you will find a React project that was generated with vite: `npm init vite@latest playground -- --template react-ts`
- This is a TypeScript based plain React project with the following dependencies:
  - `zustand` - https://zustand-demo.pmnd.rs/
  - `immer` - https://immerjs.github.io/immer/
  - `json-server` - https://github.com/typicode/json-server
- This project use `json-server` to provide a local file based database. The database is located in the `db.json` file.
- cd `playground` and run `npm install`
- run `npm run dev` to start the dev server on `localhost:5173`
- run `npm run db` to start the local database server on `localhost:3000`

## Instructions
You will practice the foundational concepts of state management in React: Design Patterns, context, state, and state management libraries (zustand).
You will work against a local database that is provided by `json-server` library. https://github.com/typicode/json-server

### The classic Todos app
- The app is a classic Todos app. It has a list of todos and a simple way form to add/edit/delete/complete a todo.
- While it's simple, it's a good playground to practice the basic concepts of state management.
- Your task: during the class you will be asked to manage state using different techniques.
  - You will start with the classic React `state` and `props`.
  - Then you will move to `context`.
  - Then you will move to `zustand`.
- As a bonus: the database contains a `users` array, pagination, and sorting. You can use them to practice more advanced concepts.

### Initial Provided Code
- Single component that holds the entire app `App.tsx`
- Single CSS file `index.css`
- Recommended to split the app into multiple components.

### API
Full CRUD API is available for the `todos` resource, same for the `users` resource.

All Todos  [GET] `http://localhost:3000/todos`
Single Todo [GET] `http://localhost:3000/todos/:id`
Add Todo [POST] `http://localhost:3000/todos`
Update Todo [PUT] `http://localhost:3000/todos/:id`
Delete Todo [DELETE] `http://localhost:3000/todos/:id`
