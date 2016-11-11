import React, { Component } from 'react';

import TemperatureChart from './TemperatureChart';

import "../node_modules/react-vis/main.css";

const App = () => {
    return (
        <div className="App">
            <TemperatureChart />
        </div>);
};

export default App;
