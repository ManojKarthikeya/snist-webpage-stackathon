import React from "react";
import "./cse-faculty-styles.css";

export default function CseFaculty() {
	return (
		<div className="cse-faculty">
      <h1>CSE Faculty</h1>
			<table className='ecm_table' border={<solid></solid>} >
				<tr>
					<th>S.No</th>
					<th>Name of the Faculty</th>
					<th>Designation</th>
					<th>DOJ SNIST</th>
					<th>JNTUH ID / AICTE ID</th>
				</tr>
				<tr>
					<td>01</td>
					<td>Dr. VARANASI ARUNA Ph.D</td>
					<td>Professor & HOD</td>
					<td>14/May/2006</td>
					<td>5050-150409-132929/1-485155827</td>
				</tr>
				<tr>
					<td>02</td>
					<td>Dr. Koppula Anup Kumar Ph.D</td>
					<td>Professor</td>
					<td>06/Sep/2005</td>
					<td>6441-150414-142344 /1-485155925</td>
				</tr>
				<tr>
					<td>03</td>
					<td>Dr. Kakarla Shirisha Ph.D</td>
					<td>Professor</td>
					<td>01/Feb/2007</td>
					<td>2726-150408-010119 /1-485155929</td>
				</tr>
				<tr>
					<td>04</td>
					<td>Dr. T V Rajinikanth M.S.C</td>
					<td>Professor</td>
					<td>09/Oct/2013</td>
					<td>02150406-222518 /1-2181431483</td>
				</tr>
				<tr>
					<td>05</td>
					<td>Dr. Thota Venkat Narayana Rao Ph.D</td>
					<td>Professor</td>
					<td>31/Jul/2014</td>
					<td>65150406-145928 /1-2282195240</td>
				</tr>
				<tr>
					<td>06</td>
					<td>Dr. Prasanta Kumar Sahoo Ph.D</td>
					<td>Professor</td>
					<td>01/Sep/2014</td>
					<td>83150406-144419 /1-2308528824</td>
				</tr>
				<tr>
					<td>07</td>
					<td>Dr. Bhukya Sridhar Ph.D</td>
					<td>Professor</td>
					<td>24/Jan/2017</td>
					<td>0261-150420-121809</td>
				</tr>
				<tr>
					<td>08</td>
					<td>Dr. Chukka Niranjan Kumar Ph.D</td>
					<td>Professor</td>
					<td>11/Jan/2018</td>
					<td>3022-150408-105758 /1-3766580860</td>
				</tr>
				<tr>
					<td>09</td>
					<td>Dr. Thommandru Vijya Saradhi Ph.D</td>
					<td>Professor</td>
					<td>24/Jan/2018</td>
					<td>6447-161229-061433 /1-4361644195</td>
				</tr>
				<tr>
					<td>10</td>
					<td>Mr. Nallapu Venkata Subba Reddy P.G</td>
					<td>Associate Professor</td>
					<td>05/Jul/2004</td>
					<td>1508-150413-151235 /1-485167321</td>
				</tr>
			</table>

			{/* <div>Dr. K. Anup Kumar
            <div>Professor, CSE Dept.</div>
        </div>
        <div>Dr. Prasanta Kumar Sahoo
            <div>Professor, CSE Dept.</div>
        </div>
        <div>Dr. K. Shirisha
            <div>Professor, CSE Dept.</div>
        </div>
        <div>Dr. T.Venkat Narayana Rao
            <div>Professor, CSE Dept.</div>
        </div>
        <div>Dr. T.Vijaya Saradhi
            <div>Professor, CSE Dept.</div>
        </div>
        <div>images</div> */}
		</div>
	);
}
