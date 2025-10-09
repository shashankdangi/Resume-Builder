import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Home() {
  return (
    <div className="">
      <Button variant={"outline"} asChild>
        <Link to={"/rirekisho"}>Create Resume</Link>
      </Button>
    </div>
  );
}

export default Home;
