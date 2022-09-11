import React from "react";
import { Link } from "react-router-dom";
import "./ecm-styles.css";
import Slider from "../../Components/Slider/Slider";
import { ecmImg } from "../../Assets/CarousalImg";

function ECM() {
	return (
		<div className="ECMpagemain">
			<div>
				<h3>Electronics and Computer Engineering</h3>
				<Slider dataSlider={ecmImg} />
				<div className="vismiscontainter">
					<div className="viscontainer">
						<div className="visubcon">
							<h4>Vision</h4>
							<p>
								To emerge as a premier centre in Electronics and
								Computer engineering with focus on human values
								and professional ethics
							</p>
						</div>
						<div className="hodcont">
							<img
								src="https://www.sreenidhi.edu.in/staff%20photos/10000306.jpg"
								alt="Loading"
								className="hodimg adsf"
							/>
							<div className="hodtextcont">
								<h5>Dr. D. Mohan</h5>
								<h6>HOD, ECM Dept.</h6>
							</div>
						</div>
					</div>
					<div className="miscontainer">
						<h4>Mission</h4>
						<ul>
							<li>
								Graduates will have strong foundation in
								fundamentals of basic sciences, mathematics,
								Engineering sciences and technology with
								abilities to understand societal problems
							</li>
							<li>
								Graduates will have successful professional
								career by demonstrating good scientific and
								engineering breadth to comprehend the problems
								using modern tools , conduct experiments,
								analyze the results and design novel products
								and solutions to the real life problems
							</li>
							<li>
								Graduates will be motivated to achieve academic
								excellence and promote entrepreneurship and
								skills in project and finance management, pursue
								research to develop life - long learning in a
								world of constantly evolving technology
							</li>
							<li>
								Graduates will be trained in human values,
								Professional ethics and Intellectual Property
								related issues in broader environmental and
								social context and sustainable development,
								communication skills, team work skills,
								leadership and multidisciplinary approach.
							</li>
						</ul>
					</div>
				</div>
				<div className="peosmcont">
					<h4 class="peo">
						Programme Educational Objectives (PEOs):
					</h4>
					<ul>
						<li>
							Preparation: To prepare students to excel in
							postgraduate programmes or to succeed in electrical
							industry/technical profession through global,
							rigorous education.
						</li>
						<li>
							Core Competence: To provide students with a solid
							foundation in mathematical, scientific and
							engineering fundamentals required to solve
							engineering problems and also to pursue higher
							studies.
						</li>
						<li>
							Breadth: To train students with good scientific and
							engineering breadth so as to comprehend, analyze,
							design, and create novel products and solutions for
							the real life problems.
						</li>
						<li>
							Professionalism: To inculcate in students’
							professional and ethical attitude, effective
							communication skills, team work skills,
							multidisciplinary approach, and an ability to relate
							engineering issues to broader social context.
						</li>
						<li>
							Learning Environment: To provide student with an
							academic environment aware of excellence,
							leadership, written ethical codes and guidelines,
							and the life-long learning needed for a successful
							professional career.
						</li>
					</ul>
				</div>
				<div className="poutcomesm">
					<h4 class="peo">Programme Outcomes:</h4>
					<p>
						They have been framed such that at the Successful
						completion of the program the student will have gained
						the requisite Knowledge, Skills, or Behaviours and
						Transition’s Smoothly into His/her chosen profession.
						The Programme Outcomes (POs) of the B.Tech (ECM
						Engineering) programme are listed below: Engineering
						Graduates will be able to:
					</p>
					<ul>
						<li>
							System Development and Research Activity: Ability to
							identify, formulate and solve engineering problems
							using computation and appropriate algorithms in one
							or more fields of electronics and computer
							engineering, such as Internet Of Things, embedded
							systems, computer vision, machine learning,
							artificial intelligence, and signal processing.
						</li>
						<li>
							Problem Analysis and Design : Ability to use
							contemporary engineering tools and techniques and
							adapt to the industry needs for solving
							multi-disciplinary problems
						</li>
						<li>
							Successful Career : Ability to design a system or
							process to meet desired needs within realistic
							constraints such as economic, environmental, social,
							political, ethical, safety, and sustainability.
						</li>
					</ul>
				</div>
			</div>
			<div class="cse-link-tiles">
				<Link className="cse-link" to="/departments/ECM/faculty">
					Faculty
				</Link>
				<Link className="cse-link" to="/departments/ECM/Facilities">
					Facilities
				</Link>
			</div>
		</div>
	);
}

export default ECM;
