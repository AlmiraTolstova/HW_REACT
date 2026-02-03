function MovieCard({ title, year }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Год выпуска: {year}</p>
    </div>
  );
}

export default MovieCard;
