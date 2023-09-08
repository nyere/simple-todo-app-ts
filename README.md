# Task Manager App

This is a simple React Task Manager application that allows you to create, update, and delete tasks. It uses local storage to persist tasks even after a page refresh.

## Getting Started

To run this app locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/nyere/simple-todo-app-ts
```

2. Navigate to the project directory:

```bash
cd simple-todo-app-ts
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

## How to Use

1. Enter a task title in the input field and click the "Add Task" button to create a new task.

2. To mark a task as completed or pending, click the checkbox next to the task title.

3. To delete a task, click the "Delete" button next to the task.

4. Your tasks will be saved in local storage, so they will persist even after you refresh the page.

## Code Structure

-   `App.tsx`: This is the main component that renders the Task Manager. It uses React hooks and a reducer to manage tasks and their state.

-   `reducer.ts`: This file contains the reducer function responsible for handling actions like adding, updating, and deleting tasks.

-   `createTask.ts`: This utility function is used to create a new task object with a unique ID.

## Dependencies

-   React: A JavaScript library for building user interfaces.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
