import React from "react";
import { GoogleMap, Marker,GoogleApiWrapper } from "react-google-maps";
import "./map-styles.css";

function Map(props) {
	return (
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: -34.397, lng: 150.644 }}
		>
			{props.isMarkerShown && (
				<Marker position={{ lat: -34.397, lng: 150.644 }} />
			)}
		</GoogleMap>
	);
}
