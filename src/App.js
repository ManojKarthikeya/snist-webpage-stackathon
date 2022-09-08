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
import Cse from "./Pages/CSE/Cse";

function App() {
	return <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/campus" element={<Campus/>} />
      <Route path="/departments" element={<Departments/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/departments/IT" element={<ITdept/>} />
      <Route path="/departments/ECM" element={<ECM/>} />
      <Route path="/departments/CSE" element={<Cse/>} />
    </Routes>
  </div>;
}

export default App;
