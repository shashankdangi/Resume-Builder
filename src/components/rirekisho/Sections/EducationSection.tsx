import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EducationCard from "@/components/EducationCard";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/userResumeStore";
import { v4 as uuidv4 } from "uuid";

export default function EducationSection() {
  const { education, addEducation, deleteEducation } = useResumeStore();

  // Add new empty education entry
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newEdu = {
      id: uuidv4(),
      from: { month: "", year: "" },
      until: { month: "", year: "" },
      isEnrolled: false,
      school: "",
      major: "",
    };
    addEducation(newEdu);
  };

  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Education Details</CardTitle>
          <CardDescription>
            Enter Your Education Details After High School Graduation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-10 " id="education-cards">
              {education.map((edu) => (
                <div className="grid gap-2" key={edu.id}>
                  <EducationCard
                    education={edu}
                    onDelete={() => deleteEducation(edu.id)}
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
