import React from "react";
import "./campus-styles.css";
import Map from "./../../Components/Map/Map";

export default function Campus() {
	const mapStyles = {
		width : '80%',
		height : '80%'
	}
	return (
		<div>
			<div className="interactive-campus-container">
				<iframe
					title="campus"
					src="https://interactive-img.com/view?id=43448&iframe=true"
				></iframe>
			</div>
			<div className="map-conas">
				<Map mapStyles={mapStyles} />
			</div>
		</div>
	);
}
