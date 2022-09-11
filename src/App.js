import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Campus from "./Pages/Campus/Campus";
import Departments from "./Pages/Departments/Departments";
import Gallery from "./Pages/Gallery/Gallery";
import Login from "./Pages/Login/Login";
import Events from "./Pages/Events/Events";
import ITdept from "./Pages/ITdept/ITdept";
import ECM from "./Pages/ECM/ECM";
import Vision from "./Pages/ECM/subpages/vision";
import Faculty from "./Pages/ECM/subpages/faculty";
import Facilities from "./Pages/ECM/subpages/Facilities";
import Cse from "./Pages/CSE/Cse";
import CseFaculty from "./Pages/CSE/CseFaculty";
import Register from "./Pages/Register/register";
import { AuthProvider } from "./firebase/authcontext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Mechanical from "./Pages/Mechanical/Mechanical";
import ECE from "./Pages/ECE/ECE";
import EEE from "./Pages/EEE/EEE";
import Adastra from "./Pages/Adastra/Adastra";
import Itfaculty from "./Pages/ITdept/Itfaculty";
import CseBtech from "./Pages/CSE/CseBtech";
import CseMtech from "./Pages/CSE/CseMtech";
import Sreevision from "./Pages/SreeVision/Sreevision";
import Research from "./Pages/Research/research";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/campus" element={<Campus />} />
					<Route path="/departments" element={<Departments />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/events" element={<Events />} />
					<Route path="/departments/IT" element={<ITdept />} />
					<Route
						path="/Departments/Itdept/Itfaculty"
						element={<Itfaculty />}
					/>
					<Route path="/departments/ECM" element={<ECM />} />
					<Route path="/departments/ECE" element={<ECE />} />
					<Route path="/departments/EEE" element={<EEE />} />
					<Route
						path="/departments/mechanical"
						element={<Mechanical />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route
						path="/departments/ECM/vision"
						element={<Vision />}
					/>
					<Route
						path="/departments/ECM/Faculty"
						element={<Faculty />}
					/>
					<Route
						path="/departments/ECM/Facilities"
						element={<Facilities />}
					/>
					<Route path="/departments/CSE" element={<Cse />} />
					<Route
						path="/departments/CSE/CseFaculty"
						element={<CseFaculty />}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/events/adastra" element={<Adastra />} />
					<Route path="departments/CSE/CseBtech" element={<CseBtech/>} />
					<Route path="/departments/CSE/CseMtech" element={<CseMtech/>} />
					<Route path="/events/Sreevision" element={<Sreevision/>} />
					<Route path="/Research" element={<Research/>} />

				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
