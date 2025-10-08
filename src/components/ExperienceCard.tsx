import MonthPicker from "./ui/MonthPicker";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useResumeStore, type ExperienceInfo } from "@/store/userResumeStore";

interface ExperienceCard {
  onDelete: () => void;
  experience: ExperienceInfo;
}

function ExperienceCard({ experience, onDelete }: ExperienceCard) {
  const { updateExperience } = useResumeStore();

  const handleWorking = (checked: boolean) => {
    updateExperience(experience.id, { isWorking: checked });
  };

  const updateField = <K extends keyof ExperienceInfo>(
    field: K,
    value: ExperienceInfo[K]
  ) => {
    updateExperience(experience.id, { [field]: value });
  };

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-5">
        <MonthPicker
          Name={"From"}
          value={experience.from}
          onChange={(val) => updateField("from", val)}
        />
        <MonthPicker
          Name={"Until"}
          value={experience.until}
          onChange={(val) => updateField("until", val)}
          isDisabled={experience.isWorking}
        />
      </div>
      {/* Working */}
      <div className="flex items-start gap-3">
        <Checkbox
          id={`enrolled-${experience.id}`}
          checked={experience.isWorking}
          onCheckedChange={(checked: boolean) => handleWorking(checked)}
        />
        <Label htmlFor={`enrolled-${experience.id}`}>
          Currently Working in this Company{" "}
        </Label>
      </div>

      {/* Comapny */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="Comapny">Company Name</Label>
        <Input
          id={`institution-${experience.id}`}
          type="text"
          placeholder="Enter Your Company Name"
          value={experience.company}
          onChange={(e) => updateField("company", e.target.value)}
        ></Input>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="Responsibilities">Tasks and Responsibilites</Label>
        <Textarea
          id={`tasks-${experience.id}`}
          placeholder="Enter Your Responsibilities"
          value={experience.tasks}
          onChange={(e) => updateField("tasks", e.target.value)}
        />
      </div>

      {/* Reason */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="Leaving">Reason for Leaving</Label>
        <Input
          id={`reason-${experience.id}`}
          type="text"
          placeholder="Enter Your Reason for Leaving"
          value={experience.reason}
          onChange={(e) => updateField("reason", e.target.value)}
        ></Input>
      </div>

      <div className="justify-self-center">
        <Button className="" variant={"destructive"} onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ExperienceCard;
