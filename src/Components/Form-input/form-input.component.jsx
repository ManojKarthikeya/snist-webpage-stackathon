import React from "react";

import "./form-input-styles.css";

const FormInput = ({ handleChange,color='black',label, ...otherProps }) => (
	<div className="group">
		<input
			className="form-input"
			onChange={handleChange}
			{...otherProps}
		/>
		{label ? (
			<label style={{color:color}}
				className={`${
					otherProps.value.length ? "shrink" : ""
				} form-input-label`}
			>{label}</label>
		) : null}
	</div>
);

export default FormInput; 
