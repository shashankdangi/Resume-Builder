import Navigation from "./components/Navigation";
import ResumeBuildGrid from "./components/ResumeBuildGrid";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Rirekisho from "./Templates/Rirekisho";
import RirekishoPrintWrapper from "./Templates/RirekishoPrintWrapper";
import { useTheme } from "./components/theme-provider";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                 radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)`
              : `linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)

     `,
          backgroundSize:
            theme === "dark"
              ? "32px 32px, 32px 32px, 100% 100%"
              : "20px 20px, 20px 20px, 100% 100%, 100% 100%",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rirekisho" element={<ResumeBuildGrid />} />
        <Route path="/Template/Rirekisho" element={<Rirekisho />} />
        <Route
          path="/Template/RirekishoPrintWrapper"
          element={<RirekishoPrintWrapper />}
        />
      </Routes>
    </div>
  );
}
