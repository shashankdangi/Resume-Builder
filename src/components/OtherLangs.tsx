import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Proficiency from "./ui/Proficiency";
import type { OtherInfoLangs } from "@/store/userResumeStore";

interface OtherLangsProps {
  value: OtherInfoLangs;
  deleteCardLang: () => void;
  onChange: (field: "language" | "proficiency", val: string) => void;
}

function OtherLangs({ value, deleteCardLang, onChange }: OtherLangsProps) {
  return (
    <div className="grid gap-4">
      <Label htmlFor={`lang-${value.id}`}>Other Language</Label>
      <Input
        id={`lang-${value.id}`}
        type="text"
        placeholder="Language"
        value={value.language}
        onChange={(e) => onChange("language", e.target.value)}
      />
      <Proficiency
        id="Proficiency"
        value={value.proficiency}
        onChange={(val) => onChange("proficiency", val)}
      />
      <div className="grid">
        <Button
          className="justify-self-center"
          variant="destructive"
          onClick={deleteCardLang}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default OtherLangs;
