import { useResumeStore } from "@/store/userResumeStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components//ui/button";
import { Input } from "@/components//ui/input";
import { Label } from "@/components//ui/label";
import Selection from "@/components/ui/Selection";
import DatePicker from "@/components//ui/DatePicker";
import Proficiency from "@/components/ui/Proficiency";
import OtherLangs from "@/components//OtherLangs";
import { v4 as uuidv4 } from "uuid";

const japanVisaTypes = [
  "Diplomat",
  "Official",
  "Professor",
  "Artist",
  "Religious Activities",
  "Journalist",
  "Highly Skilled Professional",
  "Business Manager",
  "Legal/Accounting Services",
  "Medical Services",
  "Researcher",
  "Instructor",
  "Engineer / Specialist in Humanities / International Services",
  "Intra-company Transferee",
  "Nursing Care",
  "Entertainer",
  "Skilled Labor",
  "Specified Skilled Worker",
  "Technical Intern Training",
  "Cultural Activities",
  "Temporary Visitor",
  "Student",
  "Trainee",
  "Dependent",
  "Designated Activities",
  "Permanent Resident",
  "Spouse or Child of Japanese National",
  "Spouse or Child of Permanent Resident",
  "Long-Term Resident",
];

function OthersSection() {
  const {
    otherInfo,
    setOtherInfo,
    otherLangs,
    addLanguage,
    updateLanguage,
    deleteLanguage,
  } = useResumeStore();

  const addLangCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addLanguage({ id: uuidv4(), language: "", proficiency: "" });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Other Details</CardTitle>
          <CardDescription>
            Enter Other Essential Information About Yourself
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="md:grid md:grid-cols-2 md:gap-4 flex flex-col gap-6">
              <div className="grid gap-2">
                <Selection
                  id="Current Visa Status"
                  placeholder="Current Visa Status"
                  options={japanVisaTypes}
                  value={otherInfo.status}
                  onChange={(val) => setOtherInfo({ status: val })}
                />
              </div>
              <div className="grid gap-2">
                <DatePicker
                  Name="Valid Until"
                  value={otherInfo.until}
                  onChange={(val) => setOtherInfo({ until: val })}
                />
              </div>
              <div className="grid gap-4">
                <Label htmlFor="Native">Native Language</Label>
                <Input
                  id="Native"
                  placeholder="Enter Your Native Language"
                  value={otherInfo.native}
                  onChange={(e) => setOtherInfo({ native: e.target.value })}
                />
              </div>
              <div className="grid gap-4">
                <Proficiency
                  id="English Proficiency"
                  value={otherInfo.english}
                  onChange={(val) => setOtherInfo({ english: val })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 py-4 md:grid md:grid-cols-2 md:gap-4">
              {otherLangs.map((lang) => (
                <OtherLangs
                  key={lang.id}
                  value={lang}
                  deleteCardLang={() => deleteLanguage(lang.id)}
                  onChange={(field, val) =>
                    updateLanguage(lang.id, { [field]: val })
                  }
                />
              ))}
            </div>

            <div className="grid gap-6 py-4">
              <Button onClick={addLangCard}>Add Other Languages</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default OthersSection;
