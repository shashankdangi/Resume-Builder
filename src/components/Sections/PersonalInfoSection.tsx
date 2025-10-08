import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePicker from "../ui/DatePicker";
import Selection from "../ui/Selection";
import CountrySelect from "../ui/CountrySelector";
import UploadImg from "../ui/UploadImg";

export default function PersonalInfoSection() {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
          <CardDescription>Enter Your Information</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-5">
              <div className="grid gap-2">
                <Label htmlFor="Name">Name</Label>
                <Input id="Name" type="text" placeholder="Tanaka" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="FuriganaName">Furigana</Label>
                <Input id="Name" type="text" placeholder="たなか" />
              </div>
              <div className="grid gap-2">
                <DatePicker Name={"Birthday"} />
              </div>
              <div className="grid gap-2">
                <Selection
                  id="Gender"
                  placeholder="Gender"
                  options={["Male", "Female"]}
                />
              </div>
              <div className="grid gap-2">
                <CountrySelect />
              </div>
              <div className="grid gap-2">
                <Selection
                  id="Maritial Status"
                  placeholder="Are You Married ?"
                  options={["Married", "Single"]}
                />
              </div>
              <div className="grid gap-2">
                <Selection
                  id="Support Spouse"
                  placeholder="Do You Support Finances"
                  options={["Yes", "No"]}
                />
              </div>
              <div className="grid gap-2">
                <UploadImg />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
