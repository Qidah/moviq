import React from "react";
import axios from "axios";

const MovieCard = ({ movie, token }) => {
  const handleSave = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/movies/save`,
        { movieId: movie.id, title: movie.title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Movie saved!");
    } catch (error) {
      console.error("Failed to save movie:", error);
    }
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MovieCard;
