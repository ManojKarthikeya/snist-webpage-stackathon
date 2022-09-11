import React from "react";
import { eceImgs } from "../../Assets/CarousalImg";
import Slider from "../../Components/Slider/Slider";
import "./ECE.css";

export default function ECE() {
	return (
		<div>
			<h3>Electrial and Communication Engineering</h3>
			<Slider dataSlider={eceImgs} />
			<div className="vismiscontainter">
				<div className="viscontainer">
					<div className="visubcon">
						<h4>Vision</h4>
						<p>
							To emerge as a leading centre for students and
							faculty in their pursuits of professional excellence
							in the fields of Electronics and Communication
							Engineering by making use of current Scientific and
							Technological advancements, with focus on human
							values, professional ethics and social
							responsibility
						</p>
					</div>
					<div className="hodcont">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/Screenshot%202022-09-10%20015725.png?alt=media&token=c2c4386d-cddb-486b-992f-fce353b65fc5"
							alt="Loading"
							className="hodimg"
						/>
						<div className="hodtextcont">
							<h5>Dr. S.P.V Subba Rao</h5>
							<h6>HOD, ECE Dept.</h6>
						</div>
					</div>
				</div>
				<div className="miscontainer">
					<h4>Mission</h4>
					<ul>
						<li>
							Training students in the basic core and application
							oriented subjects of Electronics and Communication
							engineering with due focus on multi disciplinary
							areas.
						</li>
						<li>
							Establishing liaison with relevant industries, R&D
							organizations and renowned academia for exposure to
							practical R&D aspects of technology.
						</li>
						<li>
							Inculcating team work, leadership, professional
							ethics and other skills such as effective
							communication, logical reasoning, career goal
							setting, liberal use of modern tools, familiarity
							with IPR to make students globally competent in
							employment as well as entrepreneurship.
						</li>
						<li>
							Promoting scientific temper and research culture in
							the graduates towards lifelong learning to produce
							useful research outcomes.
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
						Graduate will be able to apply the knowledge of
						mathematics, science and engineering principles for
						modeling, analyzing and solving problems in the domain
						of electronics and communication engineering.
					</li>
					<li>
						Graduate will be able to identify, formulate and analyze
						real-life problems using first principles of
						mathematics, physical and engineering sciences.
					</li>
					<li>
						Graduate will be able to design and develop practical
						solutions for real-life problems in the domain of
						electronics and communication engineering considering
						societal issues.
					</li>
					<li>
						Graduate will be able to design and develop a
						experimental systems for conducting detailed
						investigations to solve multifaceted problems in the
						domain of electronics and communication engineering.
					</li>
					<li>
						Graduate will demonstrate skills to apply modern
						engineering and IT tools, softwares and equipments in
						order to identify and analyze the problems in
						Electronics and Communication Engineering and propose a
						design methodology.
					</li>
					<li>
						Graduate will demonstrate the need and impact of
						engineering solutions related to Electronics and
						Communication Engineering, on the society to assess
						public health & safety, legal, Professional ethics and
						social issues involved.
					</li>
					<li>
						Graduate will demonstrate the impact of professional
						engineering solutions in environmental context and to be
						able to respond effectively to the needs of sustainable
						development.
					</li>
					<li>
						Graduate will recognize the need of self-learning and
						ability to engage in independent and life - long
						learning in the broadest context of technology change.
					</li>
					<li>
						x Graduate will be able demonstrate the applications of
						knowledge gained into the advanced fields such as Signal
						Processing, Wireless Communications, VLSI and Embedded
						Systems, and allied fields.
					</li>
				</ul>
			</div>
		</div>
	);
}
