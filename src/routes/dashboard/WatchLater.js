import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { movieAdapter } from '../../adapters/movie.adapter';
import CenterContent from '../../components/general/CenterContent';
import Container from '../../components/general/Container';
import Title from '../../components/general/Title';
import MovieCard from '../../components/movies/MovieCard';
import { getWatchLater } from '../../services/watchlater.service';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    getWatchLater()
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
        <Title title="Movies to watch later" />
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

export default WatchLater;
