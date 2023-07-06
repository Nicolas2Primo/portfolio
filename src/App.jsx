import React from "react";
import FirstSection from "./components/FirstSection";
import ProjectsSection from "./components/ProjectsSections";
import "./styles/App.css";

function App() {
  return (
    <div className="flex flex-col w-full h-fit">
      <FirstSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
