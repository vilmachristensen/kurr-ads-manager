import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import CampaignPage from './views/CampaignPage';
import { CampaignProvider, useCampaign } from './state/Context';
import DisplayCampaignContent from './views/DisplayCampaignContent';
import TargetGroupPage from './views/TargetGroupPage';
import { Campaign } from './types/AdTypes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <CampaignProvider>
      <BrowserRouter>
        <Routes>
          {' '}
          <Route path="/" Component={CampaignPage} />
        </Routes>
        <Routes>
          {' '}
          <Route path="/TargetGroupPage" Component={TargetGroupPage} />
        </Routes>
      </BrowserRouter>
    </CampaignProvider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
