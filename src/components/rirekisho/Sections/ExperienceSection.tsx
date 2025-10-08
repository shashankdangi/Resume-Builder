import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/ExperienceCard";
import { useResumeStore } from "@/store/userResumeStore";
import { v4 as uuidv4 } from "uuid";

function ExperienceSection() {
  const { experience, addExperience, deleteExperience } = useResumeStore();

  //@ handle new entry

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newExp = {
      id: uuidv4(),
      from: { month: "", year: "" },
      until: { month: "", year: "" },
      isWorking: false,
      company: "",
      tasks: "",
      reason: "",
    };
    addExperience(newExp);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Work Experiences</CardTitle>
          <CardDescription>
            Enter Your Work Experiences including Part Time Jobs / Internships /
            Full Time / Short Term
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-10 ">
              {experience.map((exp) => (
                <div className="grid gap-2" key={exp.id}>
                  <ExperienceCard
                    experience={exp}
                    onDelete={() => deleteExperience(exp.id)}
                  />
                </div>
              ))}
            </div>
            <div className="grid  gap-6 py-4 ">
              <Button onClick={handleAdd}>Add More</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ExperienceSection;
