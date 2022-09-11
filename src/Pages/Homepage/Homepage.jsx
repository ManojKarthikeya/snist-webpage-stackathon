import React, { useRef } from "react";
import Placements from "../../Components/Placements/Placements.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles.modules.css";
import "./HMPG.CSS";
import Cards from "../../Components/Card/Cards.jsx";
import { EmailShareButton } from "react-share";

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
			<div className="imasdp">
				<div className="sdhgfujiergh">C</div>
				<div className="sdhgfujiergh">L</div>
				<div className="sdhgfujiergh">I</div>
				<div className="sdhgfujiergh">C</div>
				<div className="sdhgfujiergh">K</div>
			</div>
		</ParallaxLayer>

		<ParallaxLayer className={`text number`} offset={offset} speed={0.3}>
			<div className="placements-container">
				<pt className="pt-title number">DISCOVER SREENIDHI</pt>
				<div className="pt-cont">
					<div className="pt-texter">
						A genuine commitment to the mission and dedicated
						leadership makes SNIST one of the finest and
						well-recognized higher educational institutions in
						India. Variety of facilities on the campus including,
						state-of-the-art labs with sophisticated equipment,
						libraries, Wi-Fi enabled campus, knowledge center,
						lavish AC auditoriums, smart classrooms, Hostels with
						premium facilities, amenities on campus including ATMs,
						bookstores, dining options, cafeterias, playground and
						many more give the students a truly fulfilling and
						enriching experience.
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
					<pt className="pt-title number">ADMISSION</pt>
					<div className="pt-cont">
						<div className="pt-texter">
							Apply now to get into one of the most prestigious
							colleges in Hyderabad! The Prospective students of
							Sreenidhi Institute of Science & Technology are to
							note that the college code for counselling purpose
							in EAMCET, ECET and ICET is SNIS.
						</div>
					</div>
					<button className="writetous">
						<EmailShareButton subject="Admission">
							Write to us
						</EmailShareButton>
					</button>
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
					<pt className="pt-title number">THIS CAMPUS</pt>
					<div className="grrr">
						<Cards
							num={7392}
							name={"students"}
							desc={"Learners, Innovator and enthusiasts."}
						/>
						<Cards
							num={491}
							name={"Faculty"}
							desc={
								"Knowledgable teachers with decades of experience."
							}
						/>
						<Cards
							num={89}
							name={"Labs"}
							desc={"Well equipped and maintained even better."}
						/>
						<Cards
							num={12}
							name={"Annual Fests"}
							desc={"Unmatched glamour and unlimited fun!"}
						/>
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
				<Page4 offset={1} onClick={() => scroll(2)} />
				<Page2 offset={2} onClick={() => scroll(3)} />
				<Page3 offset={3} onClick={() => scroll(0)} />
			</Parallax>
		</div>
	);
}
