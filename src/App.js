import React, { Component } from 'react';

import TemperatureChart from './TemperatureChart';
import Map from './Map';

import "../node_modules/react-vis/main.css";
import "./App.css";

const App = () => {
    return (
        <div className="App">
          <Map />
          <TemperatureChart />
        </div>);
};

export default App;
