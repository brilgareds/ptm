import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CustomProviders from './components/molecules/CustomProviders/customProviders.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CustomProviders>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </CustomProviders>
  </React.StrictMode>
);

reportWebVitals();
