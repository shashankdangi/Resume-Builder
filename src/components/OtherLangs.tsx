import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Proficiency from "./ui/Proficiency";

interface LangsProps {
  deleteCardLang: () => void;
}

function OtherLangs({ deleteCardLang }: LangsProps) {
  return (
    <div className="grid gap-4">
      <Label htmlFor="other">Other Language</Label>
      <Input id="other" type="text" placeholder="Language" />
      <Proficiency id="Proficiency in this language" />
      <div className="grid">
        <Button
          className="justify-self-center"
          variant={"destructive"}
          onClick={deleteCardLang}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default OtherLangs;
