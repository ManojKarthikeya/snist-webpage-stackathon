import React from "react";
import { Link } from "react-router-dom";
import "./cse-styles.css";
import CseTableCouse from "./Cse-table-couse";
import Slider from "../../Components/Slider/Slider";
import { cseImg } from "../../Assets/CarousalImg";

export default function Cse() {
	return (
		<div className="cse-cont-main">
			<h3>Computer Science Engineering</h3>
			<Slider dataSlider={cseImg} />
			<div className="vismiscontainter">
				<div className="viscontainer">
					<div className="visubcon">
						<h4>Vision</h4>
						<p>
							To emerge as a leading department in Technical
							Education and Research in India in Computer Science
							and Engineering with focus to produce professionally
							competent and socially sensitive engineers capable
							of working in global environment.
						</p>
					</div>
					<div className="hodcont">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/c.jpg?alt=media&token=bc951e95-1375-47f0-a146-78d4ed184bd4"
							alt="Loading"
							className="hodimg adsf"
						/>
						<div className="hodtextcont">
							<h5>Dr. Aruna Varanasi</h5>
							<h6>Professor and Head, CSE Dep</h6>
						</div>
					</div>
				</div>
				<div className="miscontainer">
					<h4>Mission</h4>
					<ul>
						<li>
							To prepare Computer Science and Engineering
							graduates to be a lifelong learner with competence
							in basic science and engineering and professional
							core, multidisciplinary areas, with continuous
							update of the syllabus, so that they can succeed in
							industry as an individual and as a team or to pursue
							higher studies or to become an entrepreneur.
						</li>
						<li>
							{" "}
							To enable the graduates to use modern tools, design
							and create novelty based products required for the
							society and communicate effectively with
							professional ethics. To continuously engage in
							research and projects development with financial
							management to promote scientific temper in the
							graduates and attain sustainability.
						</li>
						<li>
							To inculcate team work, leadership, professional
							ethics, use of modern tools, IPR issues so that
							graduates are encouraged to obtain patents and
							respond to competitive global environment.
						</li>
					</ul>
				</div>
			</div>
			<div className="cse-link-tiles">
				<Link to="/departments/CSE/CseBtech" className="cse-link">
					Btech
				</Link>

				<Link to="/departments/CSE/CseMtech" className="cse-link">
					Mtech
				</Link>

				<Link to="/departments/CSE/CseFaculty" className="cse-link">
					Faculty
				</Link>
			</div>
			<div className="cse-table">
				<CseTableCouse />
			</div>
		</div>
	);
}

//     <div className="cse-main">
//       <h1 className="cse-header">Computer Science and Engineering- CSE</h1>
//       <div className="vis-mis">
//         <ul className="cse-vision">
//         vision
//         <li>
//         To emerge as a leading department in Technical Education and Research
//           in India in Computer Science and Engineering with focus to produce
//           professionally competent and socially sensitive engineers capable of
//           working in global environment.
//         </li>
//       </ul>
//       <ul className="cse-mission">
//         missio
//       </ul>
//       </div>
//       <div className="img-cse-main">
//       <img src={'https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/c3.jpg?alt=media&token=ce826d6a-5d9a-415e-80e2-fb6553c4d165'} className='img-cse' alt="Prof"/>
//         <img src={'https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/c.jpg?alt=media&token=bc951e95-1375-47f0-a146-78d4ed184bd4'} className='img-cse' alt="HOD"/>
//         <img src={'https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/c4.jpg?alt=media&token=8a8a1c9d-2f72-4d98-9ffc-d80ab1d6be45'} className='img-cse' alt="iProf"/>
//       </div>
//       <div>Dr. Aruna Varanasi</div>
//         <div>Professor and Head, CSE Dept</div>
//       <div className="cse-table"><CseTableCouse/></div>
//       <div className="link-cse">

//       </div>
//     </div>
//   );
// }
