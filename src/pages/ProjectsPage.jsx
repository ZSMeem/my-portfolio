import { useOutletContext } from "react-router-dom";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  const { data } = useOutletContext();

  return (
    <Projects
      developmentProjects={data.developmentProjects}
      aiProjects={data.aiProjects}
    />
  );
}
