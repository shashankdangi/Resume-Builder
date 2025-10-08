import MonthPicker from "./ui/MonthPicker";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface ExperienceCard {
  deleteCard: () => void;
}

function ExperienceCard({ deleteCard }: ExperienceCard) {
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
          Currently Working in this Company{" "}
        </Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Comapny">Company Name</Label>
        <Input
          id="Company"
          type="text"
          placeholder="Enter Your Company Name"
        ></Input>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Responsibilities">Tasks and Responsibilites</Label>
        <Textarea
          id="Responsibilities"
          placeholder="Enter Your Responsibilities"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Leaving">Reason for Leaving</Label>
        <Input
          id="Leaving"
          type="text"
          placeholder="Enter Your Reason for Leaving"
        ></Input>
      </div>

      <div className="justify-self-center">
        <Button className="" variant={"destructive"} onClick={deleteCard}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ExperienceCard;
