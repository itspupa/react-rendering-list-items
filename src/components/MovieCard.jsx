import movies from "../data/movies.jsx";

function MovieCard() {
  return (
    <div className="movies-container">
      {movies.map((movie, index) => {
        return (
          <article key={index} className="movie-card">
            <div className="movie-card-content">
              <img
                src={movie.image}
                alt={`${movie.title} movie poster`}
                className="movie-card-image"
              />
              <div className="movie-details">
                <h2 className="movie-title">Title: {movie.title}</h2>
                <p className="movie-info">Year: {movie.year}</p>
                <p className="movie-info">Runtime: {movie.runtime}</p>
                <div className="movie-genres">
                  <span className="movie-info">Genres: </span>

                  {movie.genres.map((genre, index) => (
                    <span key={index} className="genre">
                      {genre}
                    </span>
                  ))}
                </div>

                <div className="movie-info">IMDB Ratings: {movie.imdbRating}
                </div>
                <div className="movie-info">IMDB Votes: {movie.imdbVotes}</div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default MovieCard;
