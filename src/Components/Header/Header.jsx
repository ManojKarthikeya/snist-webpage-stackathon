import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header-styles.scss";
import logo from "./../../Assets/sreenidhi-logo.png";
import { getAuth } from "firebase/auth";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { useSpring, animated,config } from 'react-spring'

export default function Header() {
  const nav = useNavigate();
	const [first, setfirst] = useState(2);
	const auth = getAuth();
	const user = auth.currentUser;
	const loc = useLocation();
	useEffect(() => {
		setfirst(first + 1);
	}, [loc]);
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      delay: 200,
      config: config.molasses,
    })
  
	if (loc.pathname === "/events") {
    
		return <animated.div style={props} className="altheader"  onClick={()=>{nav(-1)}} > <ArrowBackIosSharpIcon htmlColor="rgb(66, 61, 63)"/> BACK </animated.div>;
	} else
		return (
			<div className="header">
				<Link to="/">
					<img className="snistlogo" src={logo} alt="SNIST" />
				</Link>
				<div className="headertabs">
					<Link className="headertab" to="/departments">
						Departments
					</Link>
					<Link className="headertab" to="/campus">
						Campus
					</Link>
					<Link className="headertab" to="/events">
						Events
					</Link>
					<Link className="headertab" to="/gallery">
						Gallery
					</Link>
					{user ? (
						<Link className="headertab" to="/dashboard">
							Dashboard
						</Link>
					) : (
						<Link className="headertab" to="/login">
							Login
						</Link>
					)}
				</div>
			</div>
		);
}
