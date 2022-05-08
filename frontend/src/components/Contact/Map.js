import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',  
    height: '100%',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={
          {
            lat: 27.6698818883169 ,
            lng: 85.30816845032388
          }
        }
        position={
            {
                lat: 27.6698818883169 ,
                lng: 85.30816845032388
            }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD4H7s4Cy99SdIqF8ldMgXCj4CGlnUOSro"
})(MapContainer);