import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.css";

export default function Header() {
	return (
		<div className="header">
			<Link to='/'>SNIST</Link>
			<div className="headertabs">
                <Link to="/departments">Departments</Link>
                <Link to="/campus">Campus</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/login">Login</Link>
            </div>
		</div>
	);
}
