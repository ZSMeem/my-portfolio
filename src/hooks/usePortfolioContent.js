import { useEffect, useState } from "react";
import { clonePortfolioData } from "../data/portfolioData";
import { getPortfolioContent } from "../lib/portfolioApi";
import { getReadmeContent } from "../lib/githubReadmeApi";

export function usePortfolioContent() {
  const [data, setData] = useState(() => clonePortfolioData());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [source, setSource] = useState("local");

  useEffect(() => {
    let active = true;

    async function loadContent() {
      try {
        let portfolioResult;

        try {
          portfolioResult = await getPortfolioContent();
        } catch {
          portfolioResult = { data: clonePortfolioData(), source: "local" };
        }

        if (!active) return;

        if (portfolioResult.source === "supabase") {
          setData(portfolioResult.data);
          setSource("supabase");
          setError("");
          return;
        }

        // Supabase not configured — try GitHub README
        try {
          const readmeData = await getReadmeContent();
          if (!active) return;
          setData(readmeData);
          setSource("github");
          setError("");
        } catch {
          if (!active) return;
          setData(portfolioResult.data);
          setSource("local");
          setError("");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadContent();

    return () => {
      active = false;
    };
  }, []);

  return { data, loading, error, source };
}
