import CardsList from "../components/organisms/CardsList/CardsList";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  const projects = useProjects();

  return (
    <section>
      <h2>Proyectos</h2>
      <CardsList items={projects} />
    </section>
  );
};

export default Projects;

