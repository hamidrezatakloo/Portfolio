import HeaderSec from "./HeaderSec";
import ProjectList from "../projectList";
import Project from "./Project";
const Projects = () => {
  return (
    <section className="mt-[100px]" data-scroll-section>
      <HeaderSec text="The projects that i build" />
      {ProjectList.map((project, index) => (
        <Project
          key={index}
          img={project.img}
          title={project.title}
          desc={project.desc}
          tags={project.tags}
          link={project.link}
          repo={project.repo}
        />
      ))}
    </section>
  );
};

export default Projects;
