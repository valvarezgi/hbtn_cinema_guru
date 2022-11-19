import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActivitiesService } from '../../services/activities.services';
import Activity from '../Activity';
import './navigation.css';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const routes = {
    Home: '/home',
    Favorites: '/favorites',
    'Watch Later': '/watchlater',
  };

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(routes[pageName]);
  };

  useEffect(() => {
    getActivitiesService()
      .then((data) => setActivities(data.data.slice(0, 10)))
      .catch((e) => console.log(e));
  }, [selected, activities]);
  return (
    <div className="Sidebar">
      <ul>
        <li
          className={`menu-item ${selected === 'Home' ? 'selected' : ''}`}
          onClick={() => setPage('Home')}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3.5V12.5C16 13.3281 15.3281 14 14.5 14H1.5C0.671875 14 0 13.3281 0 12.5V1.5C0 0.671875 0.671875 0 1.5 0H6.5L8.5 2H14.5C15.3281 2 16 2.67188 16 3.5Z"
              fill="white"
            />
          </svg>
          <div className="sidebar-text-content">Home</div>
          <FontAwesomeIcon className="next-row" icon={faArrowRight} />
        </li>
        <li
          className={`menu-item ${selected === 'Favorites' ? 'selected' : ''}`}
          onClick={() => setPage('Favorites')}
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9125 4.69688L16.4031 5.35938C16.775 5.41251 17.0875 5.67501 17.2062 6.03438C17.325 6.39689 17.2281 6.79064 16.9594 7.05939L13.7031 10.2531L14.4719 14.8344C14.5344 15.2094 14.3812 15.5906 14.0687 15.8125C13.7594 16.0344 13.35 16.0625 13.0156 15.8844L9.00311 13.7438L4.99374 15.8844C4.65624 16.0625 4.24686 16.0344 3.93749 15.8125C3.62811 15.5906 3.47186 15.2094 3.53749 14.8344L4.30624 10.2531L1.04937 7.05939C0.780305 6.79064 0.684681 6.39689 0.802805 6.03438C0.920618 5.67501 1.23218 5.41251 1.60687 5.35938L6.09374 4.69688L8.10624 0.561565C8.27186 0.217314 8.62186 -0.0012207 9.00311 -0.0012207C9.38748 -0.0012207 9.73748 0.217314 9.90311 0.561565L11.9125 4.69688Z"
              fill="white"
            />
          </svg>
          <div className="sidebar-text-content">Favorites</div>
          <FontAwesomeIcon className="next-row" icon={faArrowRight} />
        </li>
        <li
          className={`menu-item ${
            selected === 'Watch Later' ? 'selected' : ''
          }`}
          onClick={() => setPage('Watch Later')}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16ZM7.25 8C7.25 8.25 7.375 8.48438 7.58437 8.59688L10.5844 10.5969C10.9281 10.8531 11.3938 10.7594 11.5969 10.4156C11.8531 10.0719 11.7594 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41563 3 7.97188 3C7.58438 3 7.22188 3.33437 7.22188 3.75L7.25 8Z"
              fill="white"
            />
          </svg>
          <div className="sidebar-text-content">Watch later</div>
          <FontAwesomeIcon className="next-row" icon={faArrowRight} />
        </li>
        {activities.length > 0 && (
          <section className="activities">
            <h3>LATEST ACTIVITIES</h3>
            {activities
              ? activities.map((activity) => (
                  <Activity key={activity.id} {...activity} />
                ))
              : null}
          </section>
        )}
      </ul>
    </div>
  );
};
export default SideBar;
