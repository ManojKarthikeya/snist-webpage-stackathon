import React from "react";
import { Link } from "react-router-dom";
import "./dept-tile.css";

export default function Tile({ alph, ext, img, link }) {
	return (
		<Link
			to={`${link}`}
			className="tile"
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className="tiletitle">
				<p className="h1textanim">
					<span className="animspan">{alph[0]}</span>
					<span className="animspan">{ext[0]}</span>
					<br></br>
					<span className="animspan">{alph[1]}</span>
					<span className="animspan">{ext[1]}</span>
					<br></br>
					<span className="animspan">{alph[2]}</span>
					<span className="animspan">{ext[2]}</span>
					<br></br>
				</p>
			</div>
		</Link>
	);
}
