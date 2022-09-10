import React, { useState } from "react";
import FormInput from "../../Components/Form-input/form-input.component";
import { Button, Alert } from "@mui/material";
import { useAuth } from "../../firebase/authcontext";
import { Link,useNavigate } from "react-router-dom";
import "./register.css";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import app from "../../firebase/firebase.util";

export default function Register() {
	const [admission, setAdmission] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const db = getFirestore(app);
	const nav = useNavigate();

	async function handleSubmit() {
		try {
			setError("");
			setLoading(true);
			await signup(email, password);
			const docRef = await addDoc(collection(db, 'creds'), {
				email: email,
				password: password,
				enrollementNumber: admission
			  });
			  console.log("Document written with ID: ", docRef.id);
			  nav('/');
		} catch {
			setError("Failed to create an account");
		}
		setEmail("");
		setAdmission("");
		setPassword("");
		setLoading(false);
	}


	return (
		<div className="regsiter-container">
			<div className="register-page">
				<div className="logintext">
					<div className="logintitle">REGISTER</div>
				</div>
				{error && <Alert severity="error">{error}</Alert>}
				<FormInput
					name="Admission Number"
					type="text"
					value={admission}
					label="Admission Number"
					handleChange={(e) => {
						setAdmission(e.target.value); 
					}}
					required
				></FormInput>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="Email"
					handleChange={(e) => {
						setEmail(e.target.value);
					}}
					required
				></FormInput>
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
					variant="contained"
					disabled={loading}
					type="submit"
					className="reggbut"
				>
					Sign Up
				</Button>
				<div className="regis">
					Already Have an Account?
					<Link className="regnow" to="/login">
						{" "}
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
}
