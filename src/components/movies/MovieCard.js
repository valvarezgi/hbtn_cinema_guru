import { faClockFour, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { addToFavoriteOrWatchLater } from '../../services/addtowatchlaterorfavorite.service';
import { getFavorites } from '../../services/favorites.service';
import { getWatchLater } from '../../services/watchlater.service';
import './movies.css';
import notFoundImage from './notfound.png';
import Tag from './Tag';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleFavorite = async () => {
    setIsFavorite(!isFavorite);
    await addToFavoriteOrWatchLater('favorite', movie.secondaryId)
      .then((data) => data)
      .catch(console.log);
  };
  const handleWatchLater = async () => {
    setIsWatchLater((prevState) => !prevState);
    await addToFavoriteOrWatchLater('watchlater', movie.secondaryId)
      .then((data) => data)
      .catch(console.log);
  };

  useEffect(() => {
    getFavorites()
      .then((data) =>
        data.data.map((movieFromFavorites) => {
          if (movieFromFavorites.id === movie.id) setIsFavorite(true);
          return true;
        })
      )
      .catch(console.log);
    getWatchLater()
      .then((data) =>
        data.data.map((movieFromWatchLater) => {
          if (movieFromWatchLater.id === movie.id) setIsWatchLater(true);
          return true;
        })
      )
      .catch(console.log);
  }, [movie.id]);
  return (
    <div className="MovieCard">
      <section>
        <img
          src={movie.image[0] ? movie.image[0] : notFoundImage}
          alt="main presentation"
          onError={(e) => (e.currentTarget.src = notFoundImage)}
        ></img>
        <div className="movie-card-cover"></div>

        <p className="movie-card-title">{movie.title}</p>
        <li className="movie-card-icons">
          <FontAwesomeIcon
            className={`${isFavorite ? '' : 'is-favorite'}`}
            onClick={handleFavorite}
            icon={faStar}
            fontSize={25}
          />
          <FontAwesomeIcon
            className={`${isWatchLater ? '' : 'is-watch-later'}`}
            onClick={handleWatchLater}
            icon={faClockFour}
            fontSize={25}
          />
        </li>
      </section>
      <p className="movie-card-resume">{movie.synopsis}</p>
      <div className="movie-card-tags">
        {movie.genres
          ? movie.genres.map((movieGenre, index) => (
              <Tag key={index} genre={movieGenre} />
            ))
          : null}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;
