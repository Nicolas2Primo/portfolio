import React, { useContext } from "react";
import FirstSection from "./components/NormalMode/FirstSection";
import ProjectsSection from "./components/NormalMode/ProjectsSections";
import DevModeContext from "./contexts/DevModeContext";
import FirstSectionDev from "./components/DevMode/FirstSectionDev";
import ProjectsSectionDev from "./components/DevMode/ProjectsSectionsDev";
import "./styles/App.css";

function App() {
  const { devMode } = useContext(DevModeContext);
  return (
    <div className="flex flex-col w-full h-fit bg-[#200c39]">
      {devMode == 9 ? (
        <>
          <FirstSectionDev />
          <ProjectsSectionDev />
        </>
      ) : (
        <>
          <FirstSection />
          <ProjectsSection />
        </>
      )}
    </div>
  );
}

export default App;
