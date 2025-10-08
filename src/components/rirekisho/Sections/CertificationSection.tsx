import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CertificateCard from "@/components/CertificateCard";
import { v4 as uuidv4 } from "uuid";
import { useResumeStore } from "@/store/userResumeStore";

function CertificationSection() {
  const { certifications, addCertification, deleteCertification } =
    useResumeStore();

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCert = {
      id: uuidv4(),
      title: "",
      date: { month: "", year: "", date: "" },
    };
    addCertification(newCert);
  };

  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
          <CardDescription>
            Enter the Certifications you obtained
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-10 ">
              {certifications.map((cert) => (
                <div className="grid gap-2" key={cert.id}>
                  <CertificateCard
                    certificate={cert}
                    onDelete={() => deleteCertification(cert.id)}
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

export default CertificationSection;
