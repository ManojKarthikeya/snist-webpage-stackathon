import React, { useState } from "react";
import { useAuth } from "./../../firebase/authcontext";
import { useNavigate } from "react-router-dom";
import { Button, Alert } from "@mui/material";
import "./dashboard.css";

export default function Dashboard() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			navigate("/");
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<div className="dashboard-cont">
			<img className="dash-pic" src="/profile.png" alt="img" />
			<div className="remcont">
				<div className="usermail"><strong>{currentUser.email}</strong></div>
        <div className="cgpa"><strong>CGPA: </strong> 7.13</div>
        <div className="baclogs"><strong>Backlogs :</strong> 0</div>
        <div className="eefefe"><strong>Fee due: </strong> 41,750.00</div>
				{error && <Alert error="danger">{error}</Alert>}
				<Button
					onClick={() => {
						handleLogout();
					}}
				>
					Log out
				</Button>
			</div>
		</div>
	);
}
