import { useOutletContext } from "react-router-dom";
import Research from "../components/Research";

export default function ResearchPage() {
  const { data } = useOutletContext();

  return <Research research={data.research} />;
}
