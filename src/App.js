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
import Achievements from "./Pages/ECM/subpages/achievements";
import Cse from "./Pages/CSE/Cse";
import CseFaculty from "./Pages/CSE/CseFaculty";
import Register from "./Pages/Register/register";
import { AuthProvider } from "./firebase/authcontext";

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
					<Route path="/login" element={<Login />} />
					<Route path="/events" element={<Events />} />
					<Route path="/departments/IT" element={<ITdept />} />
					<Route path="/departments/ECM" element={<ECM />} />
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
					<Route
						path="/departments/ECM/Achievements"
						element={<Achievements />}
					/>
					<Route path="/departments/CSE" element={<Cse />} />
					<Route
						path="/departments/CSE/CseFaculty"
						element={<CseFaculty />}
					/>
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
			;
		</AuthProvider>
	);
}

export default App;
