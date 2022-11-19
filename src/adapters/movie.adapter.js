export const movieAdapter = (movie) => {
  return {
    image: movie.imageurls,
    title: movie.title,
    synopsis: movie.synopsis,
    released: movie.released,
    id: movie.id,
    secondaryId: movie.imdbId,
    rating: movie.imdbrating,
    genres: movie.genres,
  };
};
