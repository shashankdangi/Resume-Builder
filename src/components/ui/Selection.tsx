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
  value?: string;
  onChange?: (val: string) => void;
}

function Selection({ id, placeholder, options, value, onChange }: Selection) {
  return (
    <div className="flex flex-col gap-3 w-full min-w-0">
      <Label htmlFor={id}>{id}</Label>
      <div className="w-full">
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full" id={id}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent
            position="popper"
            sideOffset={4}
            onCloseAutoFocus={(event) => {
              // Prevent scroll lock behavior
              event.preventDefault();
            }}
          >
            {options.map((item) => (
              <SelectItem value={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Selection;
