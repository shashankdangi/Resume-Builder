import type { CertificationInfo } from "@/store/userResumeStore";
import { Button } from "./ui/button";
import DatePicker from "./ui/DatePicker";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useResumeStore } from "@/store/userResumeStore";
interface CertificateProps {
  certificate: CertificationInfo;
  onDelete: () => void;
}

function CertificateCard({ certificate, onDelete }: CertificateProps) {
  const { updateCertification } = useResumeStore();

  const updateField = <K extends keyof CertificationInfo>(
    field: K,
    value: CertificationInfo[K]
  ) => {
    updateCertification(certificate.id, { [field]: value });
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor={`title-${certificate.id}`}>Title</Label>
        <Input
          id={`title-${certificate.id}`}
          type="text"
          placeholder="Enter Certification Name"
          value={certificate.title}
          onChange={(e) => updateField("title", e.target.value)}
        />
      </div>

      {/* Date */}
      <div className="grid gap-2">
        <DatePicker
          Name={"Date Obtained"}
          value={certificate.date}
          onChange={(val) => updateField("date", val)}
        />
      </div>

      {/* Delete Button  */}
      <div className="grid">
        <Button
          className="justify-self-center"
          variant={"destructive"}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CertificateCard;
