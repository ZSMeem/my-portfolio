import { useEffect, useState } from "react";
import { clonePortfolioData } from "../data/portfolioData";
import { getPortfolioContent } from "../lib/portfolioApi";

export function usePortfolioContent() {
  const [data, setData] = useState(() => clonePortfolioData());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [source, setSource] = useState("local");

  useEffect(() => {
    let active = true;

    async function loadContent() {
      try {
        const result = await getPortfolioContent();

        if (!active) {
          return;
        }

        setData(result.data);
        setSource(result.source);
        setError("");
      } catch (loadError) {
        if (!active) {
          return;
        }

        setData(clonePortfolioData());
        setSource("local");
        setError(loadError.message ?? "Unable to load portfolio content.");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadContent();

    return () => {
      active = false;
    };
  }, []);

  return { data, loading, error, source };
}
