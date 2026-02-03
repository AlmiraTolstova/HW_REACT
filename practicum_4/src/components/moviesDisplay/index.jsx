import MovieCard from "../movieCard";

function MoviesDisplay({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} year={movie.year} />
      ))}
    </div>
  );
}

export default MoviesDisplay;
