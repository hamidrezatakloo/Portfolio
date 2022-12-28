import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-[#061229] p-10 lg:p-20">
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
