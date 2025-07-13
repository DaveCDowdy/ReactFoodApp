React Food App
This is a food recipe management application built with React, developed as a code-along project from the Udemy course "React JS Crash Course 2023 - Build A Food Managing App". It leverages the Spoonacular Recipe and Food API to fetch and display recipe information.

Table of Contents
Features

Technologies Used

API Key Setup

Installation and Local Setup

Usage

Project Showcase

Course Reference

License

Features
Recipe Search: Search for recipes using keywords, powered by the Spoonacular API.

Dynamic Display: View fetched recipes with their images and titles.

Add to Favorites: Save your favorite recipes to a local favorites list.

Remove from Favorites: Easily remove recipes from your favorites.

Persistent Favorites: Favorites are saved in your browser's local storage, so they persist across sessions.

Filter Favorites: Search and filter through your saved favorite recipes.

Theme Toggling: Switch between light and dark themes for a personalized experience.

Technologies Used
React.js: Frontend JavaScript library for building user interfaces.

Spoonacular Recipe and Food API: For fetching comprehensive recipe and food data.

HTML5 & CSS3: For structuring and styling the application.

JavaScript (ES6+): Core programming language.

React Hooks (useState, useEffect, useCallback, useMemo, useContext, useReducer): For state management, side effects, performance optimization, and global state.

Local Storage: For client-side data persistence (favorites).

API Key Setup
This application requires an API key from Spoonacular to function correctly. Your API key should be kept private and never committed directly to your public repository.

Get a Spoonacular API Key:

Go to the Spoonacular Food API Console.

Sign up or log in to get your free API key.

Create a .env file:

In the root directory of this project (the same directory as package.json), create a new file named .env.

Add your API key to .env:

Inside the .env file, add the following line, replacing YOUR_SPOONACULAR_API_KEY with the actual key you obtained from Spoonacular:

REACT_APP_SPOONACULAR_API_KEY=YOUR_SPOONACULAR_API_KEY

Important: The REACT_APP_ prefix is essential for Create React App to expose this environment variable to your frontend code.

Ensure .env is in .gitignore:

Verify that your .gitignore file (also in the root directory) contains the line .env. This prevents your API key from being accidentally pushed to GitHub. If you previously committed .env, you might need to untrack it using git rm --cached .env before committing again.

Installation and Local Setup
To get this project up and running on your local machine:

Clone the repository:

git clone https://github.com/DaveCDowdy/ReactFoodApp.git


Navigate to the project directory:

cd ReactFoodApp

Install dependencies:

npm install
# or yarn install

Set up your API key as described in the API Key Setup section above.

Start the development server:

npm start
# or yarn start

This will open the application in your browser, usually at http://localhost:3000.

Usage
Use the search bar to find recipes by ingredient or dish name.

Click the "Add to Favorites" button on any recipe card to save it.

Your saved favorites will appear in the "Favorites" section.

Click "Remove from favorites" to remove an item.

Use the "Search Favorites" input to filter your saved recipes.

Click the theme button to toggle between light and dark modes.

Project Showcase
This repository serves as a showcase of my React development skills, including:

Component-based architecture

State management with useState and useReducer

Side effects with useEffect

Performance optimization with useCallback and useMemo

Context API for global state management (theming)

API integration with fetch

Local Storage for data persistence

Basic CSS styling

Course Reference
This project was built as a code-along exercise from the Udemy course:
React JS Crash Course 2023 - Build A Food Managing App
Instructor: Sangam Mukherjee

License
This project is open-source and available under the MIT License.
