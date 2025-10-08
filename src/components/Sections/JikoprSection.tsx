import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "../ui/textarea";

function JikoprSection() {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Self Promotion</CardTitle>
          <CardDescription>
            In detail promote yourself . Your skills , Your Experiences , Why
            you would be the best suited candidate for this role
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <div className="">
            <Textarea
              className="w-full h-40 m-0 text-sm"
              placeholder="Enter Your Self Promotion Here"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default JikoprSection;
