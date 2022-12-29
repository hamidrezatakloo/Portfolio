import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <div
        className="bg-[#061229] p-10 lg:p-20"
        data-scroll-container
        ref={containerRef}
      >
        <Intro />
        <Skills />
        <Projects />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
