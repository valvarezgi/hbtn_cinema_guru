import './components.css';

const Activity = ({ user, title, activityType, createdAt }) => {
  return (
    <div className="Activity">
      <li>
        <p>
          <span>{user?.username}</span> Added <span>{title?.title}</span> to
          {activityType} - {createdAt}
          March 28,2022
        </p>
      </li>
    </div>
  );
};
export default Activity;
