import React from "react";
import { mechImg } from "../../Assets/CarousalImg";
import Slider from "../../Components/Slider/Slider";
import "./mechanical-styles.css";

export default function Mechanical() {
	return (
		<div>
			<h3>Mechanical Engineering</h3>
			<Slider dataSlider={mechImg} />
			<div className="vismiscontainter">
				<div className="viscontainer">
					<div className="visubcon">
						<h4>Vision</h4>
						<p>
							To emerge as a renowned center in Mechanical
							Engineering by following the best practices in
							teaching, learning and research.
						</p>
					</div>
					<div className="hodcont">
						<img
							src="https://thumbs2.imgbox.com/21/03/VQqSRv5T_t.png"
							alt="Loading"
							className="hodimg2"
						/>
						<div className="hodtextcont">
							<h5>Dr. T. Ch. Siva Reddy</h5>
							<h6>HOD, ME Dept.</h6>
						</div>
					</div>
				</div>
				<div className="miscontainer">
					<h4>Mission</h4>
					<ul>
						<li>
							To provide good academic environment for pursuing
							high quality undergraduate, Post graduate and
							Doctoral programmes in mechanical engineering that
							will prepare our graduates for outstanding
							professional careers.
						</li>
						<li>
							To provide service to practicing engineers,
							industry, government, educational and technical
							societies through effective engagement with these
							groups and by providing professional knowledge.
						</li>
						<li>
							To ensure that our students are well trained in
							interpersonal skills, team work, professional
							ethics, practical industrial training and
							participate in professional society activities.
						</li>
						<li>
							Conduct and proliferate high quality research work
							to students for lifetime of learning.
						</li>
					</ul>
				</div>
			</div>
			<div className="peosmcont">
				<h4 class="peo">Programme Educational Objectives (PEOs):</h4>
				<p>
					The PEO's have been designed so as to provide the students
					with Strong Fundamentals, Equip them with Modern tools for
					Investigation, make them Understand the concept of Team
					work, Earn the Trust and Respect of others and in the
					process make them Life-long learners.
				</p>

				<ul>
					<li>
						Graduates will have a strong foundation in fundamentals
						of mathematics, natural and environmental sciences, and
						basic engineering skills with abilities of problem
						analysis, design and development of optimal solutions to
						engineering problems and make them to pursue higher
						studies in nationally / internationally reputed
						institutes or research and development activities thus
						making them life-long learners.
					</li>
					<li>
						Graduates can apply the knowledge of theory, tools of
						investigation, and use of modern tools to solve complex
						problems and ecome professionally competent and globally
						employable engineers to assess health, safety, legal,
						societal, and environmental and sustainable issues
						maintaining ethical principles.
					</li>
					<li>
						Graduates will be trained in Safety, regulatory and
						Intellectual Property related issues in broader social
						context and sustainable development, Professional
						ethics, communication skills, team work skills,
						leadership and multidisciplinary approach.
					</li>
					<li>
						Graduates will have ability to work effectively as an
						individual, a team member, a leader or an entrepreneur
						with awareness of gender sensitiveness apart from having
						good communication, project and finance management
						skills, earn the trust and respect of others as
						effective and ethical team member.
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
