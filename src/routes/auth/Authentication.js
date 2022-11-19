import PropTypes from 'prop-types';
import { lazy, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Button from '../../components/general/Button';
import { loginService, registerService } from '../../services/auth.service';
import './auth.css';

const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (_switch) {
      try {
        setLoad(true);
        const response = await loginService({ username, password });
        if (response?.data) {
          localStorage.setItem(
            'accessToken',
            `Bearer ${response.data.accessToken}`
          );
          setLoad(false);
          setIsLoggedIn(true);
          setUserUsername(username);
        }
      } catch (error) {
        if (error?.response?.data?.message)
          setError(error.response.data.message);
        else setError(error.message);
        setUsername('');
        setPassword('');
        setLoad(false);
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    } else {
      try {
        setLoad(true);
        const response = await registerService({ username, password });
        if (response?.data) {
          localStorage.setItem(
            'accessToken',
            `Bearer ${response.data.accessToken}`
          );
        }
        setLoad(false);
        setIsLoggedIn(true);
        setUserUsername(username);
      } catch (error) {
        if (error?.response?.data?.message)
          setError(error.response.data.message);
        else setError(error.message);
        setUsername('');
        setPassword('');
        setLoad(false);
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    }
  };

  const handleSignIn = (e) => {
    setUsername('');
    setPassword('');
    set_switch(true);
  };
  const handleSignUp = (e) => {
    setUsername('');
    setPassword('');
    set_switch(false);
  };

  if (load) return <SpinnerCircular color="white" />;

  return (
    <div className="Authentication">
      <div className="selection">
        <Button
          autoFocus
          className={_switch ? 'button-red-light' : 'button-red-dark'}
          label="Sign In"
          onClick={handleSignIn}
        />
        <Button
          className={!_switch ? 'button-red-light' : 'button-red-dark'}
          label="Sign Up"
          onClick={handleSignUp}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="authentication-error">
          {error.length !== '' && error}
        </div>
        {_switch ? (
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
          />
        ) : (
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
          />
        )}
      </form>
    </div>
  );
};

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func,
  setUserUsername: PropTypes.func,
};

Authentication.default = {
  setIsLoggedIn: () => {},
  setUserUsername: () => {},
};

export default Authentication;
