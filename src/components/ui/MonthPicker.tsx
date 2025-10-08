import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface MonthPickerProps {
  Name: string;
  isDisabled?: boolean;
}

export function MonthPicker({ Name, isDisabled }: MonthPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedYear, setSelectedYear] = React.useState<number>(
    new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = React.useState<number | null>(null);

  const years = Array.from({ length: 131 }, (_, i) => 1900 + i); // 1900 → currentYear

  const displayText =
    selectedMonth !== null
      ? `${months[selectedMonth]} ${selectedYear}`
      : "Select month";

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="month" className="px-1">
        {Name}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={isDisabled}
            variant="outline"
            id="month"
            className="w-full justify-between font-normal"
          >
            {displayText}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          {/* Year Selector */}
          <Select
            value={selectedYear.toString()}
            onValueChange={(value) => setSelectedYear(parseInt(value))}
          >
            <SelectTrigger className="w-[120px] mb-4">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-auto">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Month grid */}
          <div className="grid grid-cols-3 gap-2">
            {months.map((month, index) => (
              <Button
                key={month}
                variant={selectedMonth === index ? "default" : "outline"}
                onClick={() => {
                  setSelectedMonth(index);
                  setOpen(false); // close popover on selection
                }}
                className="text-sm"
              >
                {month.slice(0, 3)}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MonthPicker;
