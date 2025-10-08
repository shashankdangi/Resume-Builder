import MonthPicker from "./ui/MonthPicker";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Button } from "./ui/button";

interface EducationCard {
  deleteCard: () => void;
}

function EducationCard({ deleteCard }: EducationCard) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleEnrolled = () => {
    setIsDisabled(true);
  };

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-5">
        <MonthPicker Name={"From"} />
        <MonthPicker Name={"Until"} isDisabled={isDisabled} />
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="currentlyEnrolled" onClick={handleEnrolled} />
        <Label htmlFor="currentlyEnrolled">
          Currently Enrolled in this Institution{" "}
        </Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Institution">Intitution</Label>
        <Input
          id="Institution"
          type="text"
          placeholder="Enter Your Institution Name"
        ></Input>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Major">Major</Label>
        <Input id="Major" type="text" placeholder="Enter Your Major"></Input>
      </div>
      <div className="justify-self-center">
        <Button className="" variant={"destructive"} onClick={deleteCard}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EducationCard;
