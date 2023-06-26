import React from 'react';
import Mains from './pages/Mains';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mains/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

