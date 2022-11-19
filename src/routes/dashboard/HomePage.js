import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { movieAdapter } from '../../adapters/movie.adapter';
import Button from '../../components/general/Button';
import CenterContent from '../../components/general/CenterContent';
import Container from '../../components/general/Container';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import { getDataWithCustomFilter } from '../../services/filter.service';
import './dashboard.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState('');
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  const loadMovies = (e) => setPage((prev) => prev + 1);

  useEffect(() => {
    setLoad(true);
    getDataWithCustomFilter({ page, minYear, maxYear, genres, title, sort })
      .then((data) => setMovies(data.data.titles))
      .catch(console.log)
      .finally(() => setLoad(false));
  }, [page, minYear, maxYear, genres, title, sort]);

  return (
    <div className="HomePage">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      {!load ? (
        <Container>
          <section className="grid-movies">
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movieAdapter(movie)} />
              ))}
          </section>
          <Button
            className="load-button"
            label="Load More..."
            onClick={loadMovies}
          />
        </Container>
      ) : (
        <CenterContent>
          <SpinnerCircular color="white" />
        </CenterContent>
      )}
    </div>
  );
};
export default HomePage;
