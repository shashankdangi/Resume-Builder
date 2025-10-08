import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Selection from "../ui/Selection";
import DatePicker from "../ui/DatePicker";
import Proficiency from "../ui/Proficiency";
import { Button } from "../ui/button";
import OtherLangs from "../OtherLangs";
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

interface OtherProp {
  langCard: number[];
  deleteCardLang: (key: number) => void;
  addLangCard: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function OthersSection({ langCard, deleteCardLang, addLangCard }: OtherProp) {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Other Details</CardTitle>
          <CardDescription>
            Enter Other Essential Information About Yourself
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="md:grid md:grid-cols-2 md:gap-4 flex flex-col gap-6 ">
              <div className="grid gap-2">
                <Selection
                  id="Current Visa Status"
                  placeholder="Current Visa Status"
                  options={japanVisaTypes}
                />
              </div>
              <div className="grid gap-2">
                <DatePicker Name="Valid Until" />
              </div>
              {/* Languages */}
              <div className="grid gap-4">
                <Label htmlFor="Native">Native Language</Label>
                <Input id="Native" placeholder="Enter Your Native Language" />
              </div>
              <div className="grid gap-4">
                <Proficiency id="English Proficiency" />
              </div>
            </div>
            <div className="flex flex-col gap-6 py-4 md:grid md:grid-cols-2 md:gap-4">
              {langCard.map((key) => (
                <div key={key} className="grid gap-2">
                  <OtherLangs deleteCardLang={() => deleteCardLang(key)} />
                </div>
              ))}
            </div>
            <div className="grid  gap-6 py-4 ">
              <Button onClick={addLangCard}>Add Other Languages</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default OthersSection;
