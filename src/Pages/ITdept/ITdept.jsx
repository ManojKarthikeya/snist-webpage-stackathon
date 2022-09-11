import React from "react";
import "./it-styles.css";
import ITIntake from "./IT-intake";
import Slider from "../../Components/Slider/Slider";
import { Link } from "react-router-dom";
import { itImg } from "../../Assets/CarousalImg";

export default function ITdept() {
	return (<div>
		<h3>Information Technology</h3>
		<Slider dataSlider={itImg} />
		<div className="vismiscontainter">
			<div className="viscontainer">
				<div className="visubcon">
					<h4>Vision</h4>
					<p>
					To achieve excellence in Engineering Science and
							Technology and to produce professionally competent,
							socially sensitive, skilled intellectual IT
							professionals to meet the current and future
							challenges of the modern computing industry in the
							global scenario.
					</p>
				</div>
				<div className="hodcont">
					<img
						src="https://www.sreenidhi.edu.in/staff%20photos/10000072.jpg"
						alt="Loading"
						className="hodimg"
					/>
					<div className="hodtextcont">
						<h5>Dr.Sunil Bhutada</h5>
						<h6>HOD, IT Dept.</h6>
					</div>
				</div>
			</div>
			<div className="miscontainer">
				<h4>Mission</h4>
				<ul>
				<li>
								To be committed in providing quality education
								in professional core and multidisplinary areas
								with continuous upgradation and to prepare IT
								graduates succeed in industry as an individual
								and as a team.
							</li>
							<li>
								To inspire and encourage the graduates to use
								modern tools, design and create novelty based
								products supporting technology innovation to
								meet the needs of industry and society.
							</li>
							<li>
								To continuously engage in research and projects
								development, to instill leadership and planning
								for the effective and strategic use of emerging
								technologies to attain sustainability.
							</li>
				</ul>
			</div>
		</div>
		<div className="peosmcont">
			<h4 class="peo">Programme Educational Objectives (PEOs):</h4>
			<ul>
			<li>
								Graduates will attain a strong foundation in
								Basic Sciences, Engineering Sciences and
								fundamentals of mathematics through which they
								acquire knowledge and abilities to analyze,
								design and develop solutions using Modern tools
								which will help them to be employable.
							</li>

							<li>
								Graduates will develop an ability to work in a
								team/ lead a team with effective communication
								skills, knowledge of project management, finance
								and entrepreneurial abilities.
							</li>

							<li>
								Graduates shall acquire skills to conduct
								investigation of complex problems to propose
								appropriate solutions and develop attitude for
								lifelong learning which will empower them to
								pursue higher studies, Research and Development.
							</li>

							<li>
								Graduates will be aware of the engineering
								professional ethics, impact of engineering
								profession on the society, need for
								environmental protection and sustainable
								development in the present and future scenario.
							</li>
			</ul>
		</div>
		<div className="poutcomesm">
			<h4 class="peo">Programme Outcomes:</h4>
			<li>
									engineering knowledge: Apply the knowledge
									of Engineering Mathematics, Basic Sciences,
									Engineering Fundamentals, and Engineering
									Specialization to the solution of complex
									Information Science and Engineering
									problems.
								</li>
								<li>
									Problem analysis: Identify, formulate,
									review research literature, and analyze
									complex engineering problems of Information
									Science and Engineering reaching
									substantiated conclusions using first
									principles of Engineering Mathematics and
									Engineering Sciences.
								</li>
								<li>
									Design/development of solutions: Design
									solutions for complex Information Science
									problems and design system components or
									processes of Information Science and
									Engineering that meet the specified needs
									with appropriate consideration for the
									public health and safety, and the cultural,
									societal, and environmental considerations.
								</li>
								<li>
									Conduct investigations of complex problems:
									Use research-based knowledge and research
									methods including design of experiments,
									analysis and interpretation of data, and
									synthesis of the information to provide
									valid conclusions in Information Science and
									Engineering.
								</li>
								<li>
									Modern tool usage: Create, select, and apply
									appropriate techniques, resources, and
									modern engineering and IT tools including
									prediction and modelling to complex
									engineering activities with an understanding
									of the limitations in Information Science
									and Engineering.
								</li>
								<li>
									The engineer and society: Apply reasoning
									informed by the contextual knowledge to
									assess societal, health, safety, legal and
									cultural issues and the consequent
									responsibilities relevant to the
									professional engineering practice in
									Information Science and Engineering.
								</li>
								<li>
									Environment and sustainability: Understand
									the impact of the professional engineering
									solutions in Information Science and
									Engineering in societal and environmental
									contexts, and demonstrate the knowledge of,
									and need for sustainable development.
								</li>
		</div>
		<div className="IT-outcomes">
					<ITIntake className="ITIntake" />
				</div>
				<div className="ITfaculty">
				<Link to="/Departments/Itdept/Itfaculty">IT Faculty</Link>
			</div>
	</div>)
}








