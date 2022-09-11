import React from "react";
import "./map-styles.css";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function GMap({google, mapStyles}) {
    return (
        <Map 
          google={google}
          zoom={17}
          initialCenter={{ lat: 17.455373447850583,  lng: 78.66668962005761}}
          style={mapStyles}
        >
            <Marker position={{ lat: 17.455373447850583,  lng: 78.66668962005761}} />

        </Map>
    );
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCuwGWzCtiTkFg1wDEh1f0YiOLgq2_01Ic'
  })(GMap);;