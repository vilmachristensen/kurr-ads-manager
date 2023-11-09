import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import TestForm from './TestForm';

export default function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="./TestForm" element={<TestForm />} />
    </Routes>
  </div>
  );
}


