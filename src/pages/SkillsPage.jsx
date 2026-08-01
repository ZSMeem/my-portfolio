import { useOutletContext } from "react-router-dom";
import Skills from "../components/Skills";

export default function SkillsPage() {
  const { data } = useOutletContext();

  return <Skills skills={data.skills} />;
}
