import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import TextType from "../ui/TextType";
import TemplateGrid from "../rirekisho/Sections/TemplateGrid";

function Home() {
  return (
    <div className="flex flex-col  gap-30 min-h-screen">
      <section className="flex flex-col items-center justify-center w-full  h-[60vh] gap-5 md:gap-10">
        <TextType
          text={[
            "Welcome To Rirekisho",
            "Create Resumes in a Minute",
            "Making Resume Made Easy",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-3xl p-1 md:text-5xl md:p-5"
        />
        <Button asChild>
          <Link to={"/rirekisho"}>Create Rirekisho</Link>
        </Button>
      </section>
      <section>
        <TemplateGrid />
      </section>
    </div>
  );
}

export default Home;
