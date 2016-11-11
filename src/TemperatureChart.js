import React, { Component } from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  ClimateSeries} from 'react-vis';

import { fill, zipWith } from 'lodash';

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class TemperatureChart extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: fill(Array(12), [25,20]) };
        this.updateChart = this.updateChart.bind(this);
    }

    updateChart(newTemperature) {
        this.setState({ temperature: newTemperature });
    }

    renderData() {
        return zipWith(MONTH_NAMES, this.state.temperature, function (month, temps) {
          return {x: month, y: temps[0], y2: temps[1]};
        });
    }

    render() {
      return (
        <XYPlot
          xType="ordinal"
          yType="linear"
          yDomain={[0,35]}
          width={600}
          height={600}>
          <HorizontalGridLines tickValues={[15,20,25,30,35]} />
          <XAxis />
          <YAxis />
          <ClimateSeries data={this.renderData()}/>
        </XYPlot>
        );
    }
}

export default TemperatureChart;
