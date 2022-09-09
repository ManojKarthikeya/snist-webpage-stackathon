import React from "react";
import { Link } from "react-router-dom";
import Tile from "./tile";

export default function Deptiles() {
	const depts = [
		{ alph: ["C", "S", "E"], ext: ["omputer", "cience &", "ngineering"], link:'/departments/CSE'},
		{
			alph: ["E", "C", "M"],
			ext: ["lectronics &", "omputer", "  *Engineering"],
			link : '/departments/ECM'
		},
		{
			alph: ["E", "C", "E"],
			ext: ["lectronics &", "ommunication", "ngineering"],
			link : '/departments/ECE'
		},
		{
			alph: ["E", "E", "E"],
			ext: ["lectrical &", "lectronics", "ngineering"],
			link : '/departments/EEE'
		},
	];
	return (
		<div className="deptiles">
			{depts.map((dept) => (
				<Tile alph={dept.alph} ext={dept.ext} link={dept.link}/>
			))}
			<Link to='/departments/IT' className="tile" style={{ backgroundImage: `url()`, marginBottom: '0px'}}>
				<div className="tiletitle">
					<p className="h1textanim">
						<span className="animspan">I</span>
						<span className="animspan">nformation </span>
						<br></br>
						<span className="animspan">T</span>
						<span className="animspan">echnology</span>
						<br></br>
					</p>
				</div>
			</Link>
			<Link to='/departments/mechanical' className="tile" style={{ backgroundImage: `url()` , marginBottom: '0px'}}>
				<div className="tiletitle">
					<p className="h1textanim">
						<span className="animspan">Mech</span>
						<span className="animspan">anical </span>
					</p>
				</div>
			</Link>
		</div>
	);
}
