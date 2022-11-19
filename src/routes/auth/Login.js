import PropTypes from 'prop-types';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword, error }) => {
  return (
    <div className="Login">
      <h4>Sign in with your account</h4>
      <Input
        className="icon-pink"
        icon="faUser"
        label="login"
        type="text"
        value={username}
        setValue={setUsername}
        error={error}
      />
      <Input
        className="icon-pink"
        icon="faKey"
        label="password"
        type="password"
        value={password}
        setValue={setPassword}
        error={error}
      />
      <Button label="Sign In" icon="faKey" />
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};
export default Login;
