import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import ExperienceCard from "../ExperienceCard";

interface ExperienceProps {
  xpCards: number[];
  deleteXpCard: (key: number) => void;
  addXpCard: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function ExperienceSection({
  xpCards,
  deleteXpCard,
  addXpCard,
}: ExperienceProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Work Experiences</CardTitle>
          <CardDescription>
            Enter Your Work Experiences including Part Time Jobs / Internships /
            Full Time / Short Term
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-10 ">
              {xpCards.map((key) => (
                <div className="grid gap-2" key={key}>
                  <ExperienceCard deleteCard={() => deleteXpCard(key)} />
                </div>
              ))}
            </div>
            <div className="grid  gap-6 py-4 ">
              <Button onClick={addXpCard}>Add More</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ExperienceSection;
