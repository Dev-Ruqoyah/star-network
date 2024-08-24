import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CelebrityBox from './CelebrityBox';
import CelebrityDetails from './CelebrityDetails';
import ronaldo from '../images/ronaldo.jpg';

const Favourite = () => {
  const celebrities = [
    {
      id: 1,
      name: "Ronaldo",
      image: ronaldo,
      details: "This is the full detail of Celebrity One.",
      change: "+5.2",
      percentChange: "+2.4%",
      additionalInfo: "Additional information about Celebrity One.",
      chartData: [10, 20, 30] // Example data for bar chart
    },
    {
      id: 2,
      name: "Celebrity Two",
      image: "https://via.placeholder.com/150",
      details: "This is the full detail of Celebrity Two.",
      change: "-3.1",
      percentChange: "-1.5%",
      additionalInfo: "Additional information about Celebrity Two.",
      chartData: [15, 25, 35] // Example data for bar chart
    },
    // Add more celebrities as needed
  ];

  return (
    <Routes>
      {/* Route for displaying the list of celebrities */}
      <Route path="/" element={<CelebrityBox celebrities={celebrities} />} />
      {/* Route for displaying details of a specific celebrity */}
      <Route path="celebrity/:id" element={<CelebrityDetails celebrities={celebrities} />} />
    </Routes>
  );
};

export default Favourite;
