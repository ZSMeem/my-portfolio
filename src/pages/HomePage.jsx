import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";

export default function HomePage() {
  const { data } = useOutletContext();

  return (
    <>
      <Hero profile={data.profile} />
      <About profile={data.profile} />
    </>
  );
}
