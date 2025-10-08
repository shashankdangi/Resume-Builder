import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useResumeStore } from "@/store/userResumeStore";

function ShibouSection() {
  const { summaries, setSummaries } = useResumeStore();
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Reason To Apply </CardTitle>
          <CardDescription>
            Write a detailed Reason why you choose to apply at this company. Why
            you are a good candidate to Hire{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <div className="">
            <Textarea
              className="w-full h-40 m-0 text-sm"
              placeholder="Enter Your Reason to Apply Here"
              value={summaries.shibou}
              onChange={(e) => setSummaries({ shibou: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ShibouSection;
