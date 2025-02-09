import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Outro from "./Components/Outro";
import Projects from "./Components/Projects";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Home></Home>
        <Projects></Projects>
        <Outro></Outro>
        
      </div>
    </Router>
  );
}