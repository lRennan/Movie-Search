import React, { useState } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import './App.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    try {
      // Fetching data from OMDB API
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=bb0c48dc`);

      if (response.data.Response === 'True') {
        // Fuse.js setup for fuzzy search
        const fuse = new Fuse(response.data.Search, {
          keys: ['Title'],
          includeScore: true,
          threshold: 0.9,
          distance: 200,
        });

        // Fuzzy search results
        const results = fuse.search(query);

        // Filtered movies (if fuzzy search results are found)
        const filteredMovies = results.length > 0 ? results.map(result => result.item) : response.data.Search;

        setMovies(filteredMovies);
        setNoMoviesFound(filteredMovies.length === 0);
        setError('');
      } else {
        setMovies([]);
        setNoMoviesFound(true);
        setError(response.data.Error);
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
      setMovies([]);
      setNoMoviesFound(true);
    }
  };

  // Reset search
  const resetSearch = () => {
    setQuery('');
    setMovies([]);
    setError('');
    setNoMoviesFound(false);
  };

  // Placeholder image URL for movies without a poster
  const placeholderImage = 'https://via.placeholder.com/300x450.png?text=No+Image+Available';

  return (
    <div className="app-container">
      <h1 onClick={resetSearch} style={{ cursor: 'pointer' }}>
        Movie Search
      </h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}

      {/* No movies found message */}
      {movies.length === 0 && !error && query && (
        <p className="no-movies-message">No movies found for "{query}"</p>
      )}

      <div className={`movie-list ${movies.length === 1 ? 'one-item' : ''}`}>
        {movies.map((movie) => (
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            key={movie.imdbID}
            className={`movie-card ${movies.length === 1 ? 'one-item' : ''}`}
          >
            {/* Display movie poster or placeholder */}
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : placeholderImage}
              alt={movie.Title}
            />
            {movie.Poster === 'N/A' && <p className="no-image-message">This movie doesn't have an image</p>}
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
