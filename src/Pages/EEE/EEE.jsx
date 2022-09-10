import React from "react";
import { eeeImg } from "../../Assets/CarousalImg";
import Slider from "../../Components/Slider/Slider";
import "./eee-styles.css";

export default function EEE() {
	return (
		<div>
			<h3>Electrial And Electronics Engineering</h3>
			<Slider dataSlider={eeeImg} />
			<div className="vismiscontainter">
				<div className="viscontainer">
					<div className="visubcon">
						<h4>Vision</h4>
						<p>
							To emerge as a leading Department in Technical
							Education and Research with focus to
							produceprofessionally competent and socially
							sensitive engineers capable of working in
							multidisciplinary global environment.
						</p>
					</div>
					<div className="hodcont">
						<img
							src="https://thumbs2.imgbox.com/5f/2f/mFUgWK6x_t.png"
							alt="Loading"
							className="hodimg2"
						/>
						<div className="hodtextcont">
							<h5>Dr. C. Bhargava</h5>
							<h6 class="hg6">Professor & HOD, EEE Dept.</h6>
						</div>
					</div>
				</div>
				<div className="miscontainer">
					<h4>Mission</h4>
					<ul>
						<li>
							Preparation: To prepare students to excel in
							postgraduate programmes or to succeed in electrical
							industry/technical profession through global,
							rigorous education.{" "}
						</li>
						<li>
							Core Competence: To provide students with a solid
							foundation in mathematical, scientific and
							engineering fundamentals required to solve
							engineering problems and also to pursue higher
							studies.{" "}
						</li>
						<li>
							Breadth: To train students with good scientific and
							engineering breadth so as to comprehend, analyze,
							design, and create novel products and solutions for
							the real life problems.{" "}
						</li>
						<li>
							Professionalism: To inculcate in students’
							professional and ethical attitude, effective
							communication skills, team work skills,
							multidisciplinary approach, and an ability to relate
							engineering issues to broader social context.{" "}
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
			</div>
			<div className="peosmcont">
				<h4 class="peo">Programme Educational Objectives (PEOs):</h4>
				<ul>
					<li>
						Preparation: To prepare students to excel in
						postgraduate programmes or to succeed in electrical
						industry/technical profession through global, rigorous
						education.
					</li>
					<li>
						Core Competence: To provide students with a solid
						foundation in mathematical, scientific and engineering
						fundamentals required to solve engineering problems and
						also to pursue higher studies.
					</li>
					<li>
						Breadth: To train students with good scientific and
						engineering breadth so as to comprehend, analyze,
						design, and create novel products and solutions for the
						real life problems.
					</li>
					<li>
						Professionalism: To inculcate in students’ professional
						and ethical attitude, effective communication skills,
						team work skills, multidisciplinary approach, and an
						ability to relate engineering issues to broader social
						context.
					</li>
					<li>
						Learning Environment: To provide student with an
						academic environment aware of excellence, leadership,
						written ethical codes and guidelines, and the life-long
						learning needed for a successful professional career.
					</li>
				</ul>
			</div>
			<div className="poutcomesm">
				<h4 class="peo">Programme Outcomes:</h4>
				<p>
					They have been framed such that at the Successful completion
					of the program the student will have gained the requisite
					Knowledge, Skills, or Behaviours and Transition’s Smoothly
					into His/her chosen profession. The Programme Outcomes (POs)
					of the B.Tech (Civil Engineering) programme are listed
					below: Engineering Graduates will be able to:
				</p>
				<ul>
					<li>
						Graduates will demonstrate knowledge of differential
						equations, vector calculus, complex variables, matrix
						theory, probability theory, physics, chemistry and
						electrical and electronics engineering.
					</li>
					<li>
						Graduates will demonstrate an ability to identify,
						formulate and solve electrical engineering problems.
					</li>
					<li>
						Graduate will demonstrate an ability to design
						electrical and electronic circuits and conduct
						experiments with electrical systems, analyze and
						interpret data.
					</li>
					<li>
						Graduates will demonstrate an ability to design digital
						and analog systems and component.
					</li>
					<li>
						Graduates will demonstrate an ability to visualize and
						work on laboratory and multidisciplinary tasks.
					</li>
					<li>
						Graduate will demonstrate skills to use modern
						engineering tools, software and equipment to analyze
						problems.
					</li>
					<li>
						Graduates will demonstrate knowledge of professional and
						ethical responsibilities.
					</li>
					<li>
						Graduate will be able to communicate effectively in both
						verbal and written form.
					</li>
					<li>
						Graduate will show the understanding of impact of
						engineering solutions on the society and also will be
						aware of contemporary issues.
					</li>
					<li>
						Graduate will develop confidence for self education and
						ability for life-long learning.
					</li>
					<li>
						Graduate who can participate and succeed in competitive
						examinations like GATE, GRE.
					</li>
				</ul>
			</div>
		</div>
	);
}
