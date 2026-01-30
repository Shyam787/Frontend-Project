# User Dashboard – React Frontend Application

A beginner-friendly and resume-ready User Dashboard built using React, Vite, and Tailwind CSS.  
This project demonstrates modern frontend development practices such as API integration, state management, and clean UI structure.

## Tech Stack
- React (Functional Components, Hooks)
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Fetch API

## Project Overview
This application fetches user data from a public REST API and displays it on demand.  
The focus of this project is to practice real-world frontend concepts including data fetching, conditional rendering, and UI state handling.

## How Frontend Communicates with Backend
- The frontend sends an HTTP request using the Fetch API
- The backend responds with JSON data
- React stores the response in state
- The UI updates automatically based on state changes

## API Used
```
https://jsonplaceholder.typicode.com/users
```

## Features
- Fetch user data from a REST API
- Display users on button click
- Reset and clear displayed data
- Loading and error state handling
- Reusable user card component
- Responsive and clean UI using Tailwind CSS

## Project Structure
```
src/
├── components/
│   └── ErrorMessage.jsx
│   └── Loading.jsx
│   └── SkeletonCard.jsx
│   └── UserCard.jsx
│   └── UserList.jsx
├── App.jsx
├── main.jsx
├── index.css
```

## Installation and Setup
```
npm install
npm run dev
```

Application runs on:
```
http://localhost:5173
```

## Concepts Covered
- React components and props
- State management using useState
- Side effects using useEffect
- Async API handling with async/await
- Conditional rendering
- Basic component reusability
- Tailwind CSS styling

## End Description
User Dashboard – React Frontend  
Built a user dashboard using React and Tailwind CSS with REST API integration, loading and error handling, reusable components, and clean UI structure.

