import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { icons } from '../../icons/icons';
import './general.css';

const Input = ({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  dark,
  error,
  inputAttributes,
}) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={`GeneralInput ${error !== '' ? 'error' : ''} ${
        dark ? 'input-dark' : ''
      }`}
    >
      {icon ? (
        <FontAwesomeIcon
          className={`icon ${className ? className : ''}`}
          icon={icons[icon]}
        />
      ) : null}
      <label>
        {label}:
        <input required type={type} onChange={handleInput} value={value} />
      </label>
      {type === 'password' && value !== '' ? (
        <FontAwesomeIcon className="eye-icon" icon={faEye} />
      ) : null}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  icon: PropTypes.string,
  inputAttributes: PropTypes.object,
};

export default Input;
