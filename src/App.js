import { lazy, useEffect, useState } from 'react';
import './App.css';
// import Authentication from './routes/auth/Authentication';
// import Dashboard from './routes/dashboard/Dashboard';
import { authService } from './services/auth.service';

const Dashboard = lazy(() => import('./routes/dashboard/Dashboard'));
const Authentication = lazy(() => import('./routes/auth/Authentication'));

function App() {
  const [userUserName, setUserUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService()
      .then((data) => {
        if (data?.data) {
          setIsLoggedIn(true);
          setUserUserName(data.data.username);
        }
      })
      .catch((e) => console.log({ e }));
  }, [isLoggedIn]);
  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUserName={userUserName} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUserName}
        />
      )}
    </div>
  );
}

export default App;
