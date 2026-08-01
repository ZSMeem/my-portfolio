import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export default function Layout() {
  const { data } = usePortfolioContent();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Outlet context={{ data }} />
      </main>
    </div>
  );
}
