import React from "react";
import Eventile from "../../Components/eventile/Eventile";
import EventText from "../../Components/Eventtext/Eventext";
import "./event-styles.css";
import { useSpring, animated,config } from 'react-spring'


export default function Events() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 1500,
    config: config.molasses,
  })
	return (
		<div className="event-container">
			<div className="event-left">
				<EventText />
			</div>
			<div className="event-right">
				<animated.div style={props} className="upcmingtxt">UPCOMING EVENTS</animated.div>
				<Eventile name="Adastra" />
				<Eventile name="Sree Vision" />
			</div>
		</div>
	);
}
