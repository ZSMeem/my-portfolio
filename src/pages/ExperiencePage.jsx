import { useOutletContext } from "react-router-dom";
import Experience from "../components/Experience";

export default function ExperiencePage() {
  const { data } = useOutletContext();

  return <Experience experience={data.experience} />;
}
