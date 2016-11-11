import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 40,
  lng: -100
};

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = { greetings: ['Bob'] };
    this.onMapCreated = this.onMapCreated.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
    console.log(JSON.stringify(e));
  }

  onMouseMove(e) {
    console.log('onMouseMove', e);
  }

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={4}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: process.env.GOOGLE_MAPS_API_KEY}}
        onMouseMove={this.onMouseMove}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={1500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
}

export default Map;
