import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js auto import for bar chart

const CelebrityDetails = ({ celebrities = [] }) => {
  const { id } = useParams();

  if (!id) {
    return <div>No ID parameter found</div>;
  }

  // Debugging log
  console.log('ID from URL:', id);
  console.log('Celebrities array:', celebrities);

  const celebrity = celebrities.find(c => c.id.toString() === id);

  if (!celebrity) {
    return <div>Celebrity not found</div>;
  }

  if (!Array.isArray(celebrity.chartData) || celebrity.chartData.length === 0) {
    return <div>No chart data found</div>;
  }

  const chartData = {
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [
      {
        label: 'Performance',
        data: celebrity.chartData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h4 className="text-xl font-semibold mb-2">Celebrity Details</h4>
      {celebrity.image && (
        <img src={celebrity.image} alt={celebrity.name} className="w-full h-48 object-cover rounded-md" />
      )}
      {celebrity.name && (
        <h1 className="text-2xl font-bold mt-2">{celebrity.name}</h1>
      )}
      {celebrity.details && (
        <p className="mt-2">{celebrity.details}</p>
      )}
      {celebrity.additionalInfo && (
        <p className="mt-2 text-gray-600">{celebrity.additionalInfo}</p>
      )}
      <div className="mt-4">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

// Define PropTypes for the component
CelebrityDetails.propTypes = {
  celebrities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      details: PropTypes.string,
      additionalInfo: PropTypes.string,
      chartData: PropTypes.arrayOf(PropTypes.number)
    })
  )
};

export default CelebrityDetails;
