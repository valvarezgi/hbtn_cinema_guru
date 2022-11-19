import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const SearchBar = ({ title, setTitle, dark }) => {
  const handleInput = (e) => setTitle(e.target.value);

  return (
    <div className={`SearchBar ${dark ? 'searchbar-dark' : ''}`}>
      <FontAwesomeIcon icon={faSearch} />
      <input value={title} onChange={handleInput} placeholder="Search Movies" />
    </div>
  );
};

export default SearchBar;
