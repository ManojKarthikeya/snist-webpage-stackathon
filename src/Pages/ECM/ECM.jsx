import React from "react";
import { Link } from "react-router-dom";
import './ecm-styles.css'

function ECM(){
    return(
        <div className='ECMpagemain'>
            <div className="title">
                <h1>ELECTRONICS AND COMPUTER ENGINEERING-ECM</h1>
            </div>
            <div class="ECMcontent">
                <h2>CONTENTS:-</h2>
                <button ><Link className="subsececm"to='/departments/ECM/vision'>Vision</Link></button><br></br>
                <button ><Link className="subsececm"to='/departments/ECM/faculty'>Faculty</Link></button><br></br>
                <button ><Link className="subsececm" to='/departments/ECM/Facilities'>Facilities</Link></button><br></br>
                <button ><Link className="subsececm"to='/departments/ECM/Achievements'>Achievements</Link></button><br></br>
            </div>
        </div>
    )
}

export default ECM;