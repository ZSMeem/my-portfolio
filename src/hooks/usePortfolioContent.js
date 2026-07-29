import { useEffect, useState } from "react";
import { clonePortfolioData } from "../data/portfolioData";
import { getReadmeContent } from "../lib/githubReadmeApi";

export function usePortfolioContent() {
  const [data, setData] = useState(() => clonePortfolioData());
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("local");

  useEffect(() => {
    let active = true;

    async function loadContent() {
      try {
        const readmeData = await getReadmeContent();
        if (!active) return;
        setData(readmeData);
        setSource("github");
      } catch {
        if (!active) return;
        setData(clonePortfolioData());
        setSource("local");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadContent();

    return () => {
      active = false;
    };
  }, []);

  return { data, loading, source };
}
