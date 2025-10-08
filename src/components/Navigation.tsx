import { Switch } from "./ui/switch";
import { WiDaySunny } from "react-icons/wi";
import { GoMoon } from "react-icons/go";
import { useTheme } from "./theme-provider";

interface NavigationProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

function Navigation({ mode, setMode }: NavigationProps) {
  const { setTheme } = useTheme();

  const handleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    setTheme(newMode);
  };

  return (
    <header className="flex justify-between  border-b-2 px-5 py-5 ">
      <div>
        <h4 className="font-bold uppercase font-sans-serif">rirekisho</h4>
      </div>
      <div className="flex items-center gap-2">
        <Switch className="cursor-pointer" onClick={handleMode} id="modes" />
        <label htmlFor="modes">
          {mode === "light" ? <WiDaySunny /> : <GoMoon />}
        </label>
      </div>
    </header>
  );
}

export default Navigation;
