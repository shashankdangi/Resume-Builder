import { Switch } from "./ui/switch";
import { WiDaySunny } from "react-icons/wi";
import { GoMoon } from "react-icons/go";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";

function Navigation() {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    const newMode = theme === "light" ? "dark" : "light";
    setTheme(newMode);
  };

  return (
    <header className="flex justify-between  mx-auto  w-[80%] items-center  pt-8  bg-none">
      <div>
        <Link to={"/"} className="font-bold uppercase  ">
          rirekisho
        </Link>
      </div>
      <div className="flex items-center gap-2 ">
        <Switch className="cursor-pointer" onClick={handleMode} id="modes" />
        <label htmlFor="modes">
          {theme === "light" ? <WiDaySunny /> : <GoMoon />}
        </label>
      </div>
    </header>
  );
}

export default Navigation;
