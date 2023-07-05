import React from "react";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="flex w-screen h-screen px-6 background-gradient">
      <FirstSection />
    </div>
  );
}

export default App;
