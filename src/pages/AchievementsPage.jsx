import { useOutletContext } from "react-router-dom";
import Achievements from "../components/Achievements";

export default function AchievementsPage() {
  const { data } = useOutletContext();

  return <Achievements achievements={data.achievements} />;
}
