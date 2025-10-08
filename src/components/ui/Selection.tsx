import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Selection {
  id: string;
  placeholder: string;
  options: string[];
}
function Selection({ id, placeholder, options }: Selection) {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id}>{id}</Label>
      <Select>
        <SelectTrigger className="w-full" id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-w-[80vw]">
          {options.map((item) => (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Selection;
