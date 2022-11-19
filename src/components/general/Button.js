import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { icons } from '../../icons/icons';
import './general.css';

const Button = ({ label, className, onClick, icon, autoFocus }) => {
  return (
    <div className="Button">
      <button className={className} onClick={onClick}>
        {icon ? <FontAwesomeIcon icon={icons[icon]} /> : null}
        {label}
      </button>
    </div>
  );
};

Button.proTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

Button.defaultProps = {
  className: 'button-red-light',
};
export default Button;
