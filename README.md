# To Do List App

This is a basic To-Do List application built with React.js and uses Mantine for the UI components. The application allows you to add, edit, mark tasks as complete, and delete tasks. The state of the tasks persists across browser refreshes thanks to local storage.

## Project Structure
The project contains the following primary files:

index.js: The entry point of the application, where the App component is rendered into the DOM.
App.js: The main App component, where the logic of the to-do list is implemented. This includes state management, event handlers for adding, updating, marking as done, and deleting tasks.
App.styles.js: This file contains the styles for the components in the App.js file. It uses Mantine's createStyles for styling.
reportWebVitals.js: This file is used for measuring the performance of the application.

## Code Details
The app's state is managed using React's useState and useEffect hooks. The to-do list tasks are stored in the local storage, so they persist across page refreshes.

Each task in the list is represented by an object with an id, title, and status (completed or not). These tasks are displayed in the order of their id, using Mantine's Paper component.

The App component renders a text input for adding a new task or updating an existing one. Depending on whether a task is being updated, the appropriate buttons and event handlers are displayed/rendered.

Each task is displayed along with buttons to mark it as completed, edit it (only if it's not already marked as done), and delete it.

## How to Use

Clone or download repo
NodeJS / NPM  should be installed in your PC

Navigate to the project directory:
cd <project-directory>


Open terminal or Git for Windows (Git Bash)
Run these commands:

### Install Dependencies

npm install

### Run app

npm start

