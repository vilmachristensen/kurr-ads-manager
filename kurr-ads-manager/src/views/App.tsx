/*import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import TestForm from './TestForm';
import AdContextProvider from '../state/AdContext';

export default function App() {
  return (
    <AdContextProvider>
      <TestForm />

      <Routes>
        <Route path="./TestForm" element={<TestForm />} />
      </Routes>
    </AdContextProvider>
  );
}*/


import React from 'react';
import AdForm from './AdForm';
import { AdProvider } from '../state/Context';

const App: React.FC = () => {
  return (
    <AdProvider>
      <div>
        <h1>Create Ad</h1>
        <AdForm />
        {/* Add other components that need access to the ad context */}
      </div>
    </AdProvider>
  );
};

export default App;