import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Hoxy from './components/Hoxy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    <Hoxy> 이렇게하면 밑에다 쓸수있는거니?</Hoxy>
  </React.StrictMode>
);
const button = ReactDOM.createRoot(document.getElementById('button'));
button.render(
  <React.StrictMode>
    <Hoxy />
  </React.StrictMode>
)

reportWebVitals();
