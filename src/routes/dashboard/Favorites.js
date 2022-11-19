import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { movieAdapter } from '../../adapters/movie.adapter';
import CenterContent from '../../components/general/CenterContent';
import Container from '../../components/general/Container';
import Title from '../../components/general/Title';
import MovieCard from '../../components/movies/MovieCard';
import { getFavorites } from '../../services/favorites.service';

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    getFavorites()
      .then((data) => setMovies(data.data))
      .catch((e) => e)
      .finally(() => setLoad(false));
  }, []);

  if (load)
    return (
      <CenterContent>
        <SpinnerCircular color="white" />
      </CenterContent>
    );
  return (
    <>
      <Container>
        <Title title="Movies you like" />
        <section className="grid-movies">
          {movies
            ? movies.map((movie) => (
                <MovieCard key={movie.id} movie={movieAdapter(movie)} />
              ))
            : null}
        </section>
      </Container>
    </>
  );
};
export default Favorites;
