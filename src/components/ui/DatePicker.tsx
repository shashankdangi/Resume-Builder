import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { MonthYear } from "@/store/userResumeStore";

interface DateTypes {
  Name: string;
  value: MonthYear;
  onChange: (date: MonthYear) => void;
}

export function DatePicker({ Name, value, onChange }: DateTypes) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    value?.date ? new Date(value.date) : undefined
  );

  React.useEffect(() => {
    if (value?.date) setDate(new Date(value.date));
  }, [value]);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    setOpen(false);
    if (date && onChange) {
      onChange({ date: date.toISOString() }); // send ISO String
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {Name}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={handleSelect}
            toYear={2070}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
