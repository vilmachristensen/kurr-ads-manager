import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import AdForm from './views/AdForm';
import { CampaignProvider } from './state/Context';
import DisplayCampaignContent from './views/DisplayCampaignContent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <AdForm />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
