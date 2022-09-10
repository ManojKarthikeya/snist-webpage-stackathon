import React, { useEffect, useState } from "react";
import "./adastra-styles.css";
import "./adastra-styles2.css";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import app from "../../firebase/firebase.util";
import ReactPlayer from "react-player";

import FormInput from "../../Components/Form-input/form-input.component";

async function updateCount(setCount) {
	const db = getFirestore(app);
	const querySnapshot = await getDocs(collection(db, "adastradet"));
	setCount(querySnapshot.size);
}

export default function Adastra() {
	const db = getFirestore(app);
	const [count, setCount] = useState(0);
	async function submitHandler() {
		try {
			const docRef = await addDoc(collection(db, "adastradet"), {
				name: name,
				phone: phone,
				branch: branch,
			});
			setCount(count + 1);
			console.log("Document written with ID: ", docRef.id);
			setName("");
			setPhone("");
			setBranch("");
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [branch, setBranch] = useState("");
	useEffect(() => {
		updateCount(setCount);
	}, []);
	return (
		<div className="adastra-container">
			{ar.map(() => (
				<div key={Math.random()} className="firefly" />
			))}
			<div className="adastra-webpage">
				<div className="adastratitle">
					<div className="adastraHeading">ADASTRA</div>
					<div className="adastra-subtext">REACH FOR THE STARS</div>
				</div>
				<div className="adastra-desc-cont">
					<img
						src="https://www.sreenidhi.edu.in/events_images/Adastra/adastra2.jpg"
						className="adastra-img"
						alt="adastraimg"
					/>
					<div className="adtext">
						<strong>ADASTRA&nbsp; </strong>is a Latin phrase that
						means, '<strong>REACHING FOR THE STARS</strong>'. It is
						a flagship event of IEEE - SNIST. Every new year begins
						with the coming of ADASTRA, which is not just a fest,
						but a 3-day celebration at SNIST. With well-equipped and
						unique workshops, ADASTRA sets a benchmark for various
						college fests in the city.
					</div>
				</div>
				<div className="adastra-desc-cont">
					<div className="adtext">
						The first day of the fest is the ADASTRA SUMMIT, where
						the finest speakers of the county enlighten our students
						with their powerful words. The celebration continues
						with various technical events and paper poster
						presentations.For all the Shakespeares around, a wide
						range of literary events are hosted all through the
						three days. Being a huge and successful tech-fest,
						ADASTRA never misses the fun part.
					</div>
					<img
						src="https://www.sreenidhi.edu.in/events_images/Adastra/adastra6.jpg"
						className="adastra-img"
						alt="adastraimg"
					/>
				</div>
				<div className="registerbanner">REGISTER</div>
				<div className="registercont">
					<div className="adasform">
						<FormInput
							color="#a90147"
							style={{
								borderColor: "#a90147",
								borderWidth: "3px",
								color: "#a90147",
							}}
							name="name"
							type="name"
							value={name}
							label="Name"
							handleChange={(e) => {
								setName(e.target.value);
							}}
							required
						/>
						<FormInput
							name="number"
							type="number"
							value={phone}
							label="Contact Number"
							color="#a90147"
							style={{
								borderColor: "#a90147",
								borderWidth: "3px",
								color: "#a90147",
							}}
							handleChange={(e) => {
								setPhone(e.target.value);
							}}
							required
						/>
						<FormInput
							name="text"
							type="text"
							value={branch}
							label="Branch"
							color="#a90147"
							style={{
								borderColor: "#a90147",
								borderWidth: "3px",
								color: "#a90147",
							}}
							handleChange={(e) => {
								setBranch(e.target.value);
							}}
							required
						/>
						<button
							className="adasbutton"
							onClick={() => {
								if (name || phone) {
									submitHandler();
								} else{
									alert("Please Enter name or Phone number.")
								}
							}}
						>
							Submit
						</button>
					</div>
					<div className="countcont">
						<div className="adascountdesc adtext">
							Registered Students
						</div>
						<div className="adascount adtext">{count}</div>
					</div>
				</div>
				<div className="registerbanner">ADASTRA 2022</div>
				<div className="adas2022li">
					<ReactPlayer
						className="adasvideo"
						muted={true}
						controls={true}
						url="https://firebasestorage.googleapis.com/v0/b/snist-stackathon.appspot.com/o/ADASTRA%202022%20AFTER%20MOVIE%20_%20IEEE%20SNIST.mp4?alt=media&token=4787b8c1-0bb0-4b89-89ba-9153ccef5c50"
					/>
					<div className="albumbutcons">
						<button
							className="adasbutton"
							onClick={() => {
								window.open(
									"https://www.facebook.com/media/set/?set=a.4766228166811387&type=3",
									"_blank",
									"noopener,noreferrer"
								);
							}}
						>
							Album 1
						</button>
						<button
							className="adasbutton"
							onClick={() => {
								window.open(
									"https://www.facebook.com/media/set/?set=a.4774835062617364&type=3",
									"_blank",
									"noopener,noreferrer"
								);
							}}
						>
							Album 2
						</button>
						<button
							className="adasbutton"
							onClick={() => {
								window.open(
									"https://www.facebook.com/media/set/?set=a.4789715574462646&type=3",
									"_blank",
									"noopener,noreferrer"
								);
							}}
						>
							Album 3
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
