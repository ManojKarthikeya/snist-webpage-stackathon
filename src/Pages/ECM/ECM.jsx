import React from "react";
import { Link } from "react-router-dom";
import './ecm-styles.css'

function ECM(){
    return(
        <div className='ECMpagemain'>
            <div className="title">
                <h1>ELECTRONICS AND COMPUTER ENGINEERING-ECM</h1>
            </div>
            <div>
                <h2>CONTENTS:-</h2>
                <Link to='/departments/ECM/vision'>Vision</Link>
                <Link to='/departments/ECM/faculty'>Faculty</Link>
                <Link to='/departments/ECM/Facilities'>Facilities</Link>
                <Link to='/departments/ECM/vision'>Achievements</Link>
            </div>
        </div>
    )
}

export default ECM;