import { useState } from "react";
import Navigation from "./components/Navigation";
import ResumeBuildGrid from "./components/ResumeBuildGrid";
export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <>
      <Navigation mode={mode} setMode={setMode} />
      <ResumeBuildGrid />
    </>
  );
}
