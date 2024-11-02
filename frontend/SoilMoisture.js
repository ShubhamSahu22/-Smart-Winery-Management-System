import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SoilMoisture() {
  const [moisture, setMoisture] = useState(null);

  useEffect(() => {
    const fetchMoisture = async () => {
      const response = await axios.get('http://monitoring.local:8000/soil-moisture');
      setMoisture(response.data.moisture);
    };
    fetchMoisture();
  }, []);

  return (
    <div>
      <h2>Soil Moisture</h2>
      {moisture !== null ? <p>{moisture}%</p> : <p>Loading...</p>}
    </div>
  );
}

export default SoilMoisture;
