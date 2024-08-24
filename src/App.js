import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Invest from "./Pages/invest"; // Ensure correct path and case
import Favourite from './Components/Favourite'; // Ensure correct path
import CelebrityDetails from './Components/CelebrityDetails'; // Ensure correct path

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invest/*" element={<Invest />} />
          {/* <Route path="/invest/favourite/*" element={<Favourite />} /> */}
          <Route path="/gticelebrity/:id" element={<CelebrityDetails />} /> {/* Corrected route */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
