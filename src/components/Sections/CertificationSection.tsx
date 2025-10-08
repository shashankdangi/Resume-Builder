import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import CertificateCard from "../CertificateCard";

interface CertificateProps {
  certCards: number[];
  deletecertcard: (key: number) => void;
  addCertCard: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function CertificationSection({
  certCards,
  deletecertcard,
  addCertCard,
}: CertificateProps) {
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
              {certCards.map((key) => (
                <div className="grid gap-2" key={key}>
                  <CertificateCard deletecertcard={() => deletecertcard(key)} />
                </div>
              ))}
            </div>
            <div className="grid  gap-6 py-4 ">
              <Button onClick={addCertCard}>Add More</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CertificationSection;
