import React, { useState } from "react";
import FormInput from "../../Components/Form-input/form-input.component";
import Button from "@mui/material/Button";
import "./login.css";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginpage">
      <div className="logincontainer">
        <div className="logintext">
          <div className="logintitle">LOGIN AS STUDENT</div>
          <div className="logindesc">
            Hey, Enter your details to get singed into your account.
          </div>
        </div>
        <div className="loginfields">
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
          <Button variant="contained" className="signinbut">
            Sign In
          </Button>
        </div>
        <div className="glo">
          <div className="glogintext">-or Login with-</div>
          <GoogleButton type='light'
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
        <div className="regis">Dont have an Account?</div>
        <Link className="regnow" to='/register'>Register Now</Link>
      </div>
    </div>
  );
}
