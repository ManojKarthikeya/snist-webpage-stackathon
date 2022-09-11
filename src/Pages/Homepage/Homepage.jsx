import React, { useRef } from "react";
import Placements from "../../Components/Placements/Placements.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles.modules.css";
import "./HMPG.CSS";
const grads = ["teal", "pink", "tomato", "teal"];

const Page = ({ offset, gradient, onClick }) => (
	<>
		<ParallaxLayer
			style={{ backgroundColor: "white" }}
			offset={offset}
			speed={0.2}
			onClick={onClick}
		>
			<div style={{ backgroundColor: "white" }} className="slopeBegin" />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
			<div className={`slopeEnd ${grads[offset]}`} />
			<div className="imasdp">CLICK TO SCROLL</div>
		</ParallaxLayer>

		<ParallaxLayer className={`text number`} offset={offset} speed={0.3}>
			<div className="placements-container">
				<pt className="pt-title number">DISCOVER SREENIDHI</pt>
				<div className="pt-cont">
					<div className="pt-texter">
						Placements over the last 7 years have been growing
						consistently with an average growth rate of 42.9%. Even
						in times of recession caused by Lehman effect (2013,
						2014, and 2015), SNIST maintained a strong recruitment
						rate of 593/year. (Recession caused in 2008 in USA but
						India worst affected in 2013 to 2915 according to
						Economic Times).Every year, new companies are visiting
						SNIST including the ones which are latest in innovation
						and market disruption.
					</div>
				</div>
			</div>
		</ParallaxLayer>
	</>
);

const Page2 = ({ offset, gradient, onClick }) => (
	<>
		<ParallaxLayer
			style={{ backgroundColor: "white" }}
			offset={offset}
			speed={0.2}
			onClick={onClick}
		>
			<div style={{ backgroundColor: "white" }} className="slopeBegin" />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
			<div
				style={{ backgroundColor: "white" }}
				className={`slopeEnd ${grads[offset]}`}
			/>
		</ParallaxLayer>

		<ParallaxLayer className={`text`} offset={offset} speed={0.3}>
			<Placements />
		</ParallaxLayer>
	</>
);

const Page3 = ({ offset, gradient, onClick }) => {
	return (
		<>
			<ParallaxLayer
				style={{ backgroundColor: "white" }}
				offset={offset}
				speed={0.2}
				onClick={onClick}
			>
				<div
					style={{ backgroundColor: "white" }}
					className="slopeBegin"
				/>
			</ParallaxLayer>

			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
				<div
					style={{ backgroundColor: "white" }}
					className={`slopeEnd ${grads[offset]}`}
				/>
			</ParallaxLayer>

			<ParallaxLayer className={`text`} offset={offset} speed={0.3}>
				<div className="placements-container">
					<pt className="pt-title number">SALIENT FEATURES</pt>
					<div className="pt-cont">
						<div className="pt-texter">
							Declared as, ‘Numero Uno’ among the engineering
							colleges established in 1997 by Dr. R. Natarajan –
							Chairman, AICTE. Recipient of the National Award
							for, ‘Best Academic Practices’ by the Indian Society
							for Training and Development – New Delhi. Accredited
							with A Grade by NAAC - National Assessment and
							Accreditation Council. Student Exchange Programs
							with top Universities in the USA like Illinois
							Institute of Technology, University of Bridgeport
							and University of Detroit Mercy.
						</div>
					</div>
				</div>
			</ParallaxLayer>
		</>
	);
};

const Page4 = ({ offset, gradient, onClick }) => {
	return (
		<>
			<ParallaxLayer
				style={{ backgroundColor: "white" }}
				offset={offset}
				speed={0.2}
				onClick={onClick}
			>
				<div
					style={{ backgroundColor: "white" }}
					className="slopeBegin"
				/>
			</ParallaxLayer>

			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
				<div
					style={{ backgroundColor: "white" }}
					className={`slopeEnd ${grads[offset]}`}
				/>
			</ParallaxLayer>

			<ParallaxLayer className={`text`} offset={offset} speed={0.3}>
				<div className="placements-container">
					<pt className="pt-title number">E Learning</pt>
					<div className="pt-cont">
						<div className="pt-texter">
							All studios are equipped with audio visual aids,
							laptop, internet, camera, MIC, Lecture
							management/capture system software by impartus, echo
							friendly environment for recording with noise proof
							facility.
						</div>
						<div className="img-cont-home">
							<img
								width="70px"
								style={{ margin: "20px" }}
								src="images/microphone-svgrepo-com.svg"
								alt="svg"
							/>
							<img
								width="70px"
								style={{ margin: "20px" }}
								src="images/online-learning-svgrepo-com.svg"
								alt="svg"
							/>
							<img
								width="70px"
								style={{ margin: "20px" }}
								src="images/online-teaching-svgrepo-com.svg"
								alt="svg"
							/>
						</div>
					</div>
				</div>
			</ParallaxLayer>
		</>
	);
};

export default function Homepage() {
	const parallax = useRef(null);
	const scroll = (to) => {
		if (parallax.current) {
			parallax.current.scrollTo(to);
		}
	};
	return (
		<div className="homepage-contdsfsd">
			<Parallax className="container" pages={4} horizontal ref={parallax}>
				<Page offset={0} onClick={() => scroll(1)} />
				<Page2 offset={1} onClick={() => scroll(2)} />
				<Page3 offset={2} onClick={() => scroll(3)} />
				<Page4 offset={3} onClick={() => scroll(0)} />
			</Parallax>
			
			
		</div>
	);
}
