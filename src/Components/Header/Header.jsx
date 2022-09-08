import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.scss";
import logo from "./../../Assets/sreenidhi-logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="snistlogo" src={logo} alt="SNIST" />
      </Link>
      <div className="headertabs">
        <Link className='headertab' to="/departments">Departments</Link>
        <Link className='headertab' to="/campus">Campus</Link>
        <Link className='headertab' to="/events">Events</Link>
        <Link className='headertab' to="/gallery">Gallery</Link>
        <Link className='headertab' to="/login">Login</Link>
      </div>
    </div>
  );
}
