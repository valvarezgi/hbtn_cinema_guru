import PropTypes from 'prop-types';
import './navigation.css';

const Header = ({ setIsLoggedIn, userUserName }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };
  return (
    <nav className="Header">
      <div>Cinema Guru</div>
      <div className="header-right">
        <img alt="random" src="https://picsum.photos/100/100" />
        <p> Welcome {userUserName}</p>
        <span onClick={logout}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13H3C2.44781 13 2 12.5522 2 12V4C2 3.44781 2.44781 3 3 3H5C5.55219 3 6 2.55219 6 2C6 1.44781 5.55312 1 5 1H3C1.34312 1 0 2.34312 0 4V12C0 13.6569 1.34312 15 3 15H5C5.55219 15 6 14.5522 6 14C6 13.4478 5.55312 13 5 13ZM15.7063 7.29375L11.7063 3.29375C11.3153 2.90281 10.6825 2.90344 10.2922 3.29375C9.90156 3.68438 9.90156 4.31719 10.2922 4.70781L12.5875 7H6C5.44688 7 5 7.44688 5 8C5 8.55312 5.44719 9 6 9H12.5875L10.2944 11.2931C9.90375 11.6838 9.90375 12.3166 10.2944 12.7072C10.685 13.0978 11.3178 13.0978 11.7084 12.7072L15.7084 8.70719C16.0969 8.31563 16.0969 7.68437 15.7063 7.29375Z"
              fill="#BB000E"
            />
          </svg>
          Logout
        </span>
      </div>
    </nav>
  );
};

Header.propTypes = {
  setIsLoggedIn: PropTypes.func,
  userUsername: PropTypes.string,
};

export default Header;
