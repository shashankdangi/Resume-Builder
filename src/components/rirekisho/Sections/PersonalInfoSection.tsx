import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePicker from "@/components/ui/DatePicker";
import Selection from "@/components/ui/Selection";
import CountrySelect from "@/components/ui/CountrySelector";
import UploadImg from "@/components/ui/UploadImg";
import { useResumeStore } from "@/store/userResumeStore"; // ✅ import store
import type { MonthYear } from "@/store/userResumeStore";

export default function PersonalInfoSection() {
  const { personalInfo, setPersonalInfo } = useResumeStore(); // ✅ hook into global state

  // Utility function to update a single field
  const updateField = (field: keyof typeof personalInfo, value: string) => {
    setPersonalInfo({ ...personalInfo, [field]: value });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
          <CardDescription>Enter Your Information</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-5">
            {/* Name */}
            <div className="grid gap-2">
              <Label htmlFor="Name">Name</Label>
              <Input
                id="Name"
                type="text"
                placeholder="Tanaka"
                value={personalInfo.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </div>

            {/* Furigana */}
            <div className="grid gap-2">
              <Label htmlFor="FuriganaName">Furigana</Label>
              <Input
                id="FuriganaName"
                type="text"
                placeholder="たなか"
                value={personalInfo.jpName}
                onChange={(e) => updateField("jpName", e.target.value)}
              />
            </div>

            {/* Birthday */}
            <div className="grid gap-2">
              <DatePicker
                Name="Birthday"
                value={{ date: personalInfo.dob }}
                onChange={(date: MonthYear) =>
                  updateField("dob", date.date ?? "")
                }
              />
            </div>

            {/* Gender */}
            <div className="grid gap-2">
              <Selection
                id="Gender"
                placeholder="Gender"
                options={["Male", "Female"]}
                value={personalInfo.gender}
                onChange={(val: string) => updateField("gender", val)}
              />
            </div>

            {/* Country */}
            <div className="grid gap-2">
              <CountrySelect
                value={personalInfo.country}
                onChange={(val: string) => updateField("country", val)}
              />
            </div>

            {/* Marital Status */}
            <div className="grid gap-2">
              <Selection
                id="MaritialStatus"
                placeholder="Are You Married?"
                options={["Married", "Single"]}
                value={personalInfo.married}
                onChange={(val: string) => updateField("married", val)}
              />
            </div>

            {/* Spouse Support */}
            <div className="grid gap-2">
              <Selection
                id="SupportSpouse"
                placeholder="Do You Support Finances?"
                options={["Yes", "No"]}
                value={personalInfo.spouse}
                onChange={(val: string) => updateField("spouse", val)}
              />
            </div>

            {/* Upload Image */}
            <div className="grid gap-2">
              <UploadImg
                value={personalInfo.photo}
                onUpload={(url: string) => updateField("photo", url)}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
