import React from 'react';
import SoilMoisture from './components/SoilMoisture';
import IrrigationControl from './components/IrrigationControl';
import Inventory from './components/Inventory';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <h1>Smart Winery Management System</h1>
      <SoilMoisture />
      <IrrigationControl />
      <Inventory />
      <Order />
    </div>
  );
}

export default App;

