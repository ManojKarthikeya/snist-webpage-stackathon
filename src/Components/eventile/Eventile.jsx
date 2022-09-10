import React from "react";
import "./evtile.css";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

export default function Eventile({ name }) {
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		delay: 1500,
		config: config.molasses,
	});
	return (
		<Link to={`/events/${name}`} className="event-tile">
			<animated.div style={props} >
				<div className="evtext">{name}</div>
			</animated.div>
		</Link>
	);
}
