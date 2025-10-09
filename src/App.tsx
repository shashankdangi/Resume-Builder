import { useState } from "react";
import Navigation from "./components/Navigation";
import ResumeBuildGrid from "./components/ResumeBuildGrid";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Rirekisho from "./Templates/Rirekisho";
import RirekishoPrintWrapper from "./Templates/RirekishoPrintWrapper";

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <>
      <Navigation mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rirekisho" element={<ResumeBuildGrid />} />
        <Route path="/Template/Rirekisho" element={<Rirekisho />} />
        <Route
          path="/Template/RirekishoPrintWrapper"
          element={<RirekishoPrintWrapper />}
        />
      </Routes>
    </>
  );
}
