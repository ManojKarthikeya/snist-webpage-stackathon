import React from "react";
import { Link } from "react-router-dom";
import Tile from "./tile";

export default function Deptiles() {
	const depts = [
		{ alph: ["C", "S", "E"], ext: ["omputer", "cience &", "ngineering"], link:'/departments/CSE',img:'https://unsplash.com/photos/oZ61KFUQsus/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYyNzEzNjcw&force=true&w=640'},
		{
			alph: ["E", "C", "M"],
			ext: ["lectronics &", "omputer", "  *Engineering"],
			link : '/departments/ECM', img: 'https://unsplash.com/photos/OksP20g6jJQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYyNzEzNzgw&force=true&w=640'
		},
		{
			alph: ["E", "C", "E"],
			ext: ["lectronics &", "ommunication", "ngineering"],
			link : '/departments/ECE',img:'https://unsplash.com/photos/FO7JIlwjOtU/download?force=true&w=640'
		},
		{
			alph: ["E", "E", "E"],
			ext: ["lectrical &", "lectronics", "ngineering"],
			link : '/departments/EEE', img: 'https://unsplash.com/photos/ImcUkZ72oUs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYyNzEwMzg5&force=true&w=640'
		},
	];
	return (
		<div className="deptiles">
			{depts.map((dept) => (
				<Tile key={Math.random()} alph={dept.alph} ext={dept.ext} link={dept.link} img={dept.img}/>
			))}
			<Link to='/departments/IT' className="tile" style={{ backgroundImage: `url('https://unsplash.com/photos/p0qKsW3uqA4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fGl0fGVufDB8fHx8MTY2MjcwNzc3Mw&force=true&w=1920')`, marginBottom: '0px'}}>
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
			<Link to='/departments/mechanical' className="tile" style={{ backgroundImage: `url('https://unsplash.com/photos/w95Fb7EEcjE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYyNzEzODc5&force=true&w=640')` , marginBottom: '0px'}}>
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
