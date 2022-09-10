import React, { useState } from "react";
import FormInput from "../../Components/Form-input/form-input.component";
import { Button, Alert } from "@mui/material";
import "./login.css";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/authcontext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const [error, setError] = useState("");
	const navigate = useNavigate();

	async function handleSubmit(e) {
		try {
			setError("");
			setLoading(true);
			await login(email, password);
			navigate("/");
		} catch {
			setError("Failed to log in");
		}
		setEmail("");
		setPassword("");

		setLoading(false);
	}

	async function handleGooglepopup(e) {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				navigate("/");
			})
			.catch((error) => {});
	}

	return (
		<div className="loginpage">
			<div className="logincontainer">
				<div className="logintext">
					<div className="logintitle">LOGIN AS STUDENT</div>
				</div>
				<div className="loginfields">
					{error && <Alert severity="error">{error}</Alert>}
					<FormInput
						name="email"
						type="email"
						value={email}
						label="Email"
						handleChange={(e) => {
							setEmail(e.target.value);
						}}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={password}
						handleChange={(e) => {
							setPassword(e.target.value);
						}}
						required
					/>
					<Button
						onClick={() => {
							handleSubmit();
						}}
						disabled={loading}
						variant="contained"
						className="signinbut"
					>
						Sign In
					</Button>
				</div>
				<div className="glo">
					<div className="glogintext">-or Login with-</div>
					<GoogleButton
						className="gbutton"
						type="light"
						onClick={handleGooglepopup}
					/>
				</div>
				<div className="regis">
					Dont have an Account?
					<Link className="regnow" to="/register">
						{" "}
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}
