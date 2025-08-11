import "./App.css";
import movies from "./data/movies";
import teams from "./data/teams";

function App() {
  return (
    <div className="App">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-10">Movie List Section</h2>
             <section className="movie-list-section p-6 max-w-xl mx-auto space-y-14 font-semibold">
        {movies.map((movie) => (
          <article
            key={movie.title}
            className="rounded-2xl bg-white shadow-xl flex gap-6 items-start p-6"
          >
            <img
              key={`${movie.title}-img`}
              src={movie.image}
              alt={movie.title}
              className="w-24 h-24 object-cover rounded-lg"
            />

            <div className="space-y-1">
              <h3 key={`${movie.title}-title`} className="text-lg font-semibold">
                Title: {movie.title}
              </h3>
              <p className="text-sm">Year: {movie.year}</p>
              <p className="text-sm">Runtime: {movie.runtime}</p>
              <p className="text-sm">Director: {movie.director}</p>
              <p className="text-sm">Grenres: {movie.genres}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {movie.genres.map((genre) => (
                  <span
                    key={`${movie.title}-genre-${genre}`}
                    className="px-3 py-1 rounded-full bg-[#EAAC99] text-black text-xs"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-sm">IMDB Ratings: {movie.imdbRating}</p>
              <p className="text-sm">IMDB Votes: {movie.imdbVotes}</p>
            </div>
          </article>
        ))}
      </section>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-16">Team List Section</h2>
      <section className="team-list-section p-6 max-w-xl mx-auto space-y-10 font-semibold">
        {teams.map((team) => (
          <div className="space-y-6">
            <div className="rounded-2xl bg-white shadow-xl px-6 py-4 w-full text-center">
              {team.name} Team ({team.id})
            </div>
            {team.children && team.children.map((child) => (
              <div className="rounded-2xl bg-white shadow-xl px-6 py-4 w-full mx-auto text-center">
                {child.name} Team ({child.id})
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
