import React from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { MasterContainer, DetailContainer } from './containers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/articles" element={<MasterContainer />} />
        <Route path="/articles/:id" element={<DetailContainer />} />
        <Route path="*" element={<Navigate to="/articles" />}/>
      </Routes>
    </Router>
  );
}

export default App;
