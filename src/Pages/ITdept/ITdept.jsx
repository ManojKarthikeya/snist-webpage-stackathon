import React from "react";
import "./it-styles.css";
import ITIntake from "./IT-intake";

import { Link } from "react-router-dom";

export default function ITdept() {
	return (
		<div className="ITpagecontainer">
			<p class="Department">IT DEPARTMENT</p>
			<div class="IT-VISION">
				<h4 class="Heading">VISION</h4>
				<p>
					To achieve excellence in Engineering Science and Technology
					and to produce professionally competent, socially sensitive,
					skilled intellectual IT professionals to meet the current
					and future challenges of the modern computing industry in
					the global scenario.
				</p>
				<div class="IT-mission">
					<h4 class="Heading">MISSION</h4>
					<div>
						<ol>
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
						</ol>
					</div>
				</div>
				<div class="IT-HOD">
					<p>HOD of IT DEPARTMENT</p>
					<img
						src="https://www.sreenidhi.edu.in/staff%20photos/10000072.jpg"
						alt="img"
					/>
					<h4 class="heading">Dr.Sunil Bhutada</h4>
				</div>

				<div class="IT-PEOs">
					<h4 class="Heading"> B.Tech-PEOs</h4>

					<ol>
						<li>
							{" "}
							Graduates will attain a strong foundation in Basic
							Sciences, Engineering Sciences and fundamentals of
							mathematics through which they acquire knowledge and
							abilities to analyze, design and develop solutions
							using Modern tools which will help them to be
							employable.
						</li>

						<li>
							Graduates will develop an ability to work in a team/
							lead a team with effective communication skills,
							knowledge of project management, finance and
							entrepreneurial abilities.
						</li>

						<li>
							Graduates shall acquire skills to conduct
							investigation of complex problems to propose
							appropriate solutions and develop attitude for
							lifelong learning which will empower them to pursue
							higher studies, Research and Development.
						</li>

						<li>
							Graduates will be aware of the engineering
							professional ethics, impact of engineering
							profession on the society, need for environmental
							protection and sustainable development in the
							present and future scenario.
						</li>
					</ol>
				</div>
				<div class="IT-POs">
					<h4 class="Heading"> B.Tech-POs</h4>
					<p>
						<ol>
							<li>
								engineering knowledge: Apply the knowledge of
								Engineering Mathematics, Basic Sciences,
								Engineering Fundamentals, and Engineering
								Specialization to the solution of complex
								Information Science and Engineering problems.
							</li>
							<li>
								Problem analysis: Identify, formulate, review
								research literature, and analyze complex
								engineering problems of Information Science and
								Engineering reaching substantiated conclusions
								using first principles of Engineering
								Mathematics and Engineering Sciences.
							</li>
							<li>
								Design/development of solutions: Design
								solutions for complex Information Science
								problems and design system components or
								processes of Information Science and Engineering
								that meet the specified needs with appropriate
								consideration for the public health and safety,
								and the cultural, societal, and environmental
								considerations.
							</li>
							<li>
								Conduct investigations of complex problems: Use
								research-based knowledge and research methods
								including design of experiments, analysis and
								interpretation of data, and synthesis of the
								information to provide valid conclusions in
								Information Science and Engineering.
							</li>
							<li>
								Modern tool usage: Create, select, and apply
								appropriate techniques, resources, and modern
								engineering and IT tools including prediction
								and modelling to complex engineering activities
								with an understanding of the limitations in
								Information Science and Engineering.
							</li>
							<li>
								The engineer and society: Apply reasoning
								informed by the contextual knowledge to assess
								societal, health, safety, legal and cultural
								issues and the consequent responsibilities
								relevant to the professional engineering
								practice in Information Science and Engineering.
							</li>
							<li>
								Environment and sustainability: Understand the
								impact of the professional engineering solutions
								in Information Science and Engineering in
								societal and environmental contexts, and
								demonstrate the knowledge of, and need for
								sustainable development.
							</li>
						</ol>
					</p>
				</div>
				<div class="IT-M-pos">
					<h4 class="Heading">M.TECH-POs</h4>
					<ol>
						<li>
							Postgraduates will demonstrate their abilities to
							acquire state of art of knowledge and to expand the
							frontiers of knowledge in the field of Computer
							Networks and Information Security Engineering.
						</li>
						<li>
							Postgraduate will demonstrate the ability to analyze
							and evaluate complex engineering problems to make
							intellectual to create advances in the field of
							Computer Networks and Information Security
							Engineering.
						</li>
						<li>
							Postgraduate will demonstrate their abilities of
							problem solving skills to find optimal solution
							including considerations of public issues, cultural,
							societal and environmental factors in core areas of
							expertise.
						</li>
						<li>
							Postgraduate will demonstrate ability to carry out
							literature survey, design and conduct experiments
							and analyze results using appropriate research
							methodologies. They should also demonstrate to
							contribute scientific / technical knowledge in their
							domain areas either individually or in groups.
						</li>
					</ol>
				</div>
				<div class="IT-M-peo">
					<h4 class="Heading">M.TECH-PEOs</h4>
					<ol>
						<li>
							To empower the students by providing necessary
							knowledge base, critical thinking and problem
							solving capabilities in the field of Computer
							Network and Information Security and allied fields
							so that they can excel in their profession, in
							industry, higher studies and Research & Development.
						</li>
						<li>
							To develop core competencies in the field of
							Computer Network and Information Security, so as to
							conduct experiments, comprehend, analyze, design and
							use appropriate techniques and tools to provide
							optimal solutions for the industry related problems.
						</li>
						<li>
							To inculcate the responsibility to the society at
							large by sensitizing regulatory and Intellectual
							Property related issues along with communication
							skills and to promote entrepreneurship with
							sufficient knowledge of project/ finance management
							techniques for ensuring their career success.
						</li>
					</ol>
				</div>

				<div class="IT-outcomes">
					<h4 class="Heading">OUTCOMES</h4>
					<div className="ITIntake">
						<ITIntake />
					</div>
				</div>
				<div class="ITfaculty">
					<Link to="/Departments/Itdept/Itfaculty">IT Faculty</Link>
				</div>
			</div>
		</div>
	);
}
