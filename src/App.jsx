import React, { useContext } from "react";
import FirstSection from "./components/FirstSection";
import ProjectsSection from "./components/ProjectsSections";
import DevModeContext from "./contexts/DevModeContext";
import "./styles/App.css";

function App() {
  const { devMode } = useContext(DevModeContext);
  return (
    <div className="flex flex-col w-full h-fit bg-[#200c39]">
      <FirstSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
