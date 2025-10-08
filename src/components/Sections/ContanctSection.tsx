import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "../ui/PhoneInput";
import { Textarea } from "../ui/textarea";

function ContanctSection() {
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
                  required
                />
              </div>
              <div className="grid gap-2">
                <PhoneInput />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter Your Address　大阪府"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="addressFurigana">Address in Furigana</Label>
                <Textarea
                  id="addressFurigana"
                  placeholder="Enter Your Address in Furigana eg. おおさかし"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Station">Nearest Station</Label>
                <Input
                  id="Station"
                  type="text"
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
