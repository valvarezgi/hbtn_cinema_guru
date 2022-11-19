import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { SpinnerCircular } from 'spinners-react';
import App from './App';
import CenterContent from './components/general/CenterContent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <CenterContent>
          <SpinnerCircular color="white" />
        </CenterContent>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
