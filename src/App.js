// import React from "react";
// import Dashboard from "./Pages/Dashboard";
// import Invest from "./Pages/Dashboard";

// function App() {
//   return (
//     <div className="App">
//        <Dashboard/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DropdownMenu from './components/DropdownMenu';
// import DropdownMenu from './Components/dropdown';
import Dashboard from "./Pages/Dashboard";
 import Invest from "./Pages/invest";

// import Stake from './pages/Stake';
// import Trade from './pages/Trade';
// import Mine from './pages/Mine';
// import Settings from './pages/Settings';
// import Support from './pages/Support';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <DropdownMenu /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invest.js" element={<Invest />} />
          {/* <Route path="/stake" element={<Stake />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

