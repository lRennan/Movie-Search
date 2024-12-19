# Movie Search App

A simple and interactive Movie Search App built with React. It allows users to search for movies, view their details, and handle scenarios where no movies are found or when the movie poster is unavailable.

## Features

- Search for movies by title.
- Display movie details, including title, year, and poster.
- Show a placeholder image when no poster is available.
- Display a "No movies found" message when no movies match the search query.
- Responsive design that adapts to different screen sizes.

Preview 
C:\Users\renna\OneDrive\Área de Trabalho\exercise\new\movies.jpeg
C:\Users\renna\OneDrive\Área de Trabalho\exercise\new\seach_movie.jpeg

## Technologies Used

- **React**: For building the user interface.
- **Axios**: To make HTTP requests to the OMDB API.
- **Fuse.js**: For fuzzy search to match movie titles with a high degree of accuracy.

## Files Overview

### 1. **MovieSearch.js**

- Handles the main logic of fetching movie data, performing fuzzy searches, and displaying the results.
- Uses the OMDB API to get movie data and Fuse.js for fuzzy searching.
- Handles errors and no results found scenarios.

### 2. **App.js**

- Wraps the `MovieSearch` component and contains additional UI-related logic, such as handling search input.

### 3. **Index.js**

- The entry point for the app, where the React component is rendered to the DOM.

### 4. **App.css**

- Contains the styles for the entire app, including responsive designs and movie card styling.

## How to Run the App Locally

Follow these steps to get the app up and running locally on your machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/lRennan/Movie-Search.git
   cd movie-search-app
   ```

2. **Install dependencies**:
   Run the following command to install the required npm packages:

   ```bash
   npm install
   ```

3. **Start the development server**:
   After installing the dependencies, start the app using the following command:

   ```bash
   npm start
   ```

4. **Open the app in your browser**:
   The app will automatically open in your default browser. If it doesn't, visit `http://localhost:3000`.

## How the App Works

- **Search Bar**: Users can type in a movie title and click "Search" to fetch results from the OMDB API.
- **Fuzzy Search**: When searching, it uses Fuse.js to match titles even if there are minor typos or variations in spelling.
- **No Poster Image**: If a movie doesn't have a poster, a placeholder image is displayed.
- **No Movies Found**: If no movies match the search query, a message will appear saying, "No movies found."

## API Used

- **OMDB API**: [OMDB API](http://www.omdbapi.com/) is used to fetch movie details by title. You will need an API key to use the service. You can replace the API key with your own in the code.

- **Fuse.js**: [Fuse.js](https://fusejs.io/) is used for fuzzy searching
