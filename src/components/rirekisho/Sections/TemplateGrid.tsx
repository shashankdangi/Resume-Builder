import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 w-[80vw] mx-auto text-center gap-5 p-4 md:grid-cols-2 lg:grid-cols-3  md:gap-10">
      {Array(1)
        .fill(null)
        .map((_, idx) => (
          <Card className="" key={idx}>
            <CardHeader className="text-center">
              <CardTitle>就職 履歴書</CardTitle>
              <CardDescription>Resume For Job</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-5">
              <div className="img w-full flex items-center justify-center">
                <img
                  className="w-[40vw] md:w-[20vw]  rounded-lg object-cover"
                  src="https://preview.redd.it/create-a-professional-japanese-resume-in-5-minutes-v0-luji0p8iy52a1.png?width=1184&format=png&auto=webp&s=98f6f8cf5e6d259b8e63540a3f58f4179a774ac5"
                  alt=""
                />
              </div>

              <div className="btn">
                <Button className="cursor-pointer" asChild>
                  <Link to={"/rirekisho"}>Create</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

export default TemplateGrid;
