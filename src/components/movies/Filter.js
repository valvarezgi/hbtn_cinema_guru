import PropTypes from 'prop-types';
import Input from '../general/Input';
import SearchBar from '../general/SearchBar';
import SelectInput from '../general/SelectInput';
import './movies.css';
import Tag from './Tag';

const tags = [
  'Action',
  'Drama',
  'Comedy',
  'Romance',
  'Thriller',
  'War',
  'History',
  'Sport',
  'Sci-Fi',
  'Documentary',
  'Crime',
  'Fantasy',
];
const options = ['latest', 'oldest', 'highestrated', 'lowestrated'];
const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  return (
    <div className="Filter">
      <div className="filter-left">
        <SearchBar dark title={title} setTitle={setTitle} />
        <div className="filter-inputs">
          <Input
            value={minYear}
            setValue={setMinYear}
            dark
            label="Min Date"
            type="number"
          />
          <Input
            value={maxYear}
            setValue={setMaxYear}
            dark
            label="Max Date"
            type="number"
          />
          <SelectInput
            value={sort}
            setValue={setSort}
            dark
            options={options}
            label="Sort"
          />
        </div>
      </div>
      <div className="filter-right">
        {tags.map((tag, index) => (
          <Tag
            filter
            genres={genres}
            setGenres={setGenres}
            key={index}
            genre={tag}
          />
        ))}
      </div>
    </div>
  );
};

Filter.protoTypes = {
  minYear: PropTypes.number,
  setMinYear: PropTypes.func,
  maxYear: PropTypes.number,
  setMaxYear: PropTypes.func,
  sort: PropTypes.string,
  setSort: PropTypes.func,
  genres: PropTypes.string,
  setGenres: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
};
export default Filter;
