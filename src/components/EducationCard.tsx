import MonthPicker from "./ui/MonthPicker";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useResumeStore } from "@/store/userResumeStore";
import type { EducationInfo } from "@/store/userResumeStore";

interface EducationCardProps {
  education: EducationInfo;
  onDelete: () => void;
}

function EducationCard({ education, onDelete }: EducationCardProps) {
  const { updateEducation } = useResumeStore();

  const handleEnrolled = (checked: boolean) => {
    updateEducation(education.id, { isEnrolled: checked });
  };

  const updateField = <K extends keyof EducationInfo>(
    field: K,
    value: EducationInfo[K]
  ) => {
    updateEducation(education.id, { [field]: value });
  };

  return (
    <div className="grid gap-4">
      {/* Date range */}
      <div className="grid grid-cols-2 gap-5">
        <MonthPicker
          Name="From"
          value={education.from}
          onChange={(val) => updateField("from", val)}
        />
        <MonthPicker
          Name="Until"
          value={education.until}
          onChange={(val) => updateField("until", val)}
          isDisabled={education.isEnrolled}
        />
      </div>

      {/* Enrollment */}
      <div className="flex items-start gap-3">
        <Checkbox
          id={`enrolled-${education.id}`}
          checked={education.isEnrolled}
          onCheckedChange={(checked: boolean) => handleEnrolled(checked)}
        />
        <Label htmlFor={`enrolled-${education.id}`}>
          Currently Enrolled in this Institution
        </Label>
      </div>

      {/* Institution */}
      <div className="flex flex-col gap-2">
        <Label htmlFor={`institution-${education.id}`}>Institution</Label>
        <Input
          id={`institution-${education.id}`}
          type="text"
          placeholder="Enter Your Institution Name"
          value={education.school}
          onChange={(e) => updateField("school", e.target.value)}
        />
      </div>

      {/* Major */}
      <div className="flex flex-col gap-2">
        <Label htmlFor={`major-${education.id}`}>Major</Label>
        <Input
          id={`major-${education.id}`}
          type="text"
          placeholder="Enter Your Major"
          value={education.major}
          onChange={(e) => updateField("major", e.target.value)}
        />
      </div>

      {/* Delete Button */}
      <div className="justify-self-center">
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EducationCard;
