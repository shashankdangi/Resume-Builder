import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useResumeStore } from "@/store/userResumeStore";

function JikoprSection() {
  const { summaries, setSummaries } = useResumeStore();
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
              value={summaries.pr}
              onChange={(e) => setSummaries({ pr: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default JikoprSection;
