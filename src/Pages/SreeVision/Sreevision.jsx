import React from "react";
import './sreevision.css'

export default function Sreevision() {
	const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	return (
		<div className="adastra-container">
			{ar.map(() => (
				<div key={Math.random()} className="firefly" />
			))}
			<div class="content">
				<h2>COMING SOON</h2>
				<h2>COMING SOON</h2>
			</div>
		</div>
	);
}
