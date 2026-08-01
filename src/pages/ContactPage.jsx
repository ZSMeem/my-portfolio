import { useOutletContext } from "react-router-dom";
import Contact from "../components/Contact";

export default function ContactPage() {
  const { data } = useOutletContext();

  return <Contact profile={data.profile} />;
}
