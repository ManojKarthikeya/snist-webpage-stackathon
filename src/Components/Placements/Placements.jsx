import React from "react";
import PlaceComp from "../PlacementCompanies/PlaceComp";
import "./placements.css";

export default function Placements() {
	return (
		<div className="placements-container">
				<pt className="pt-title number">PLACEMENTS</pt>
			<div className="pt-cont">
				<div className="pt-texter">
					Placements over the last 7 years have been growing
					consistently with an average growth rate of 42.9%. Even in
					times of recession caused by Lehman effect (2013, 2014, and
					2015), SNIST maintained a strong recruitment rate of
					593/year. (Recession caused in 2008 in USA but India worst
					affected in 2013 to 2915 according to Economic Times).Every
					year, new companies are visiting SNIST including the ones
					which are latest in innovation and market disruption.
				</div>
				<PlaceComp />
			</div>
		</div>
	);
}
