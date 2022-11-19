import PropTypes from 'prop-types';
import { useState } from 'react';
import { removeColonFromStart } from '../../utilities/string.handle';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);
  const handleTag = () => {
    if (selected) {
      const result = genres
        .split(',')
        .filter((element) => element !== genre)
        .join(',');
      setGenres(removeColonFromStart(result));
      setSelected(false);
    } else {
      const genresList = genres.split(',');
      genresList.push(genre);
      const result = genresList.join(',');
      setGenres(removeColonFromStart(result));
      setSelected(true);
    }
  };

  if (filter)
    return (
      <span>
        <li
          onClick={handleTag}
          className={`Tag ${selected ? 'movie-tag-bg-red' : ''}`}
        >
          {genre}
        </li>
      </span>
    );
  else
    return (
      <span>
        <li className="Tag selected movie-tag-bg-red">{genre}</li>
      </span>
    );
};

Tag.propTypes = {
  genre: PropTypes.string,
  filter: PropTypes.bool,
  genres: PropTypes.string,
  setGenres: PropTypes.func,
};

export default Tag;
