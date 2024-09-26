import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Invest from './Pages/invest'; 
import Stake from './Pages/Stake';
import CelebrityDetail from './Components/CelebrityDetails'; // Ensure correct path
import { CelebritiesProvider } from './Components/CelebrityContex'; // Correct import path
import { celebrities } from './Components/CelebrityData'; // Import your celebrity data

const App = () => {
  return (
    <Router>
      <CelebritiesProvider celebrities={celebrities}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invest/*" element={<Invest />} />
            <Route path="/Stake" element={<Stake />} />
            <Route path="/celebrity/:id" element={<CelebrityDetail />} />
          </Routes>
        </div>
      </CelebritiesProvider>
    </Router>
  );
};

export default App;
