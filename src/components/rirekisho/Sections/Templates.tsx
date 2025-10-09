import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function Templates() {
  return (
    <div className="w-full h-[100vh] px-9 flex flex-col gap-10">
      <h1 className="text-5xl text-center font-bold">Templates</h1>
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>Japanese Resume</CardHeader>
          <CardDescription>Create a Japanese Style Resume</CardDescription>
          <CardContent>
            <Button asChild>
              <Link to="/rirekisho">Create</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Templates;
