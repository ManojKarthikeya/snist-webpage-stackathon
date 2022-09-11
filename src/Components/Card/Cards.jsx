import React from "react";
import "./Cards-styles.scss";
import { useSpring, animated, config } from "react-spring";

export default function Cards({ num, name, desc}) {
	const { number } = useSpring({
		from: { number: 0 },
		number: num,
		delay: 2000,
		config: config.molasses,
	});
	console.log(desc)
	
	return (
		<div>
			<div class="data-card">
				<animated.h3>{number.to(n => n.toFixed(0))}</animated.h3>
				<h4>{name}</h4>
				<div className="sadf">{desc}</div>
			</div>
		</div>
	);
}
