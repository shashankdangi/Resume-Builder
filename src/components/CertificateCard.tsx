import { Button } from "./ui/button";
import DatePicker from "./ui/DatePicker";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface CertificateProps {
  deletecertcard: () => void;
}

function CertificateCard({ deletecertcard }: CertificateProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="Title">Title</Label>
        <Input id="Title" type="text" placeholder="Enter Certification Name" />
      </div>
      <div className="grid gap-2">
        <DatePicker Name={"Date Obtained"} />
      </div>
      <div className="grid">
        <Button
          className="justify-self-center"
          variant={"destructive"}
          onClick={deletecertcard}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CertificateCard;
