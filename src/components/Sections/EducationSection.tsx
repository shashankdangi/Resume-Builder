import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EducationCard from "../EducationCard";
import { Button } from "../ui/button";

interface EducationProps {
  cards: number[];
  deleteCard: (key: number) => void;
  addCard: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function EducationSection({
  cards,
  deleteCard,
  addCard,
}: EducationProps) {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Education Details</CardTitle>
          <CardDescription>
            Enter Your Education Details After High School Graduation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-10 " id="education-cards">
              {cards.map((key) => (
                <div className="grid gap-2" key={key}>
                  <EducationCard deleteCard={() => deleteCard(key)} />
                </div>
              ))}
            </div>
            <div className="grid  gap-6 py-4 ">
              <Button onClick={addCard}>Add More</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
