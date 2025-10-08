import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Textarea } from "@/components/ui/textarea";
import { useResumeStore } from "@/store/userResumeStore";

function ContanctSection() {
  const { contactInfo, setContactInfo } = useResumeStore();

  const updateField = (field: keyof typeof contactInfo, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Enter Your Contact Information</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-5">
              <div className="grid gap-2">
                <Label htmlFor="Email">Email</Label>
                <Input
                  id="Email"
                  type="email"
                  placeholder="abc@gmail.com"
                  value={contactInfo.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <PhoneInput
                  value={contactInfo.phone}
                  onChange={(val: string) => updateField("phone", val)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={contactInfo.add}
                  onChange={(e) => updateField("add", e.target.value)}
                  placeholder="Enter Your Address　大阪府"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="addressFurigana">Address in Furigana</Label>
                <Textarea
                  id="addressFurigana"
                  value={contactInfo.addJpn}
                  onChange={(e) => updateField("addJpn", e.target.value)}
                  placeholder="Enter Your Address in Furigana eg. おおさかし"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Station">Nearest Station</Label>
                <Input
                  id="Station"
                  type="text"
                  value={contactInfo.station}
                  onChange={(e) => updateField("station", e.target.value)}
                  placeholder="Nearest Station"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContanctSection;
