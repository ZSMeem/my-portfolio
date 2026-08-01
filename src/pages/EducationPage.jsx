import { useOutletContext } from "react-router-dom";
import Education from "../components/Education";

export default function EducationPage() {
  const { data } = useOutletContext();

  return <Education education={data.education} />;
}
