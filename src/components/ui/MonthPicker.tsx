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

import type { MonthYear } from "@/store/userResumeStore";


interface MonthPickerProps {
  Name: string;
  isDisabled?: boolean;
  value?: MonthYear;
  onChange?: (val: MonthYear) => void;
}

export default function MonthPicker({
  Name,
  isDisabled = false,
  value,
  onChange,
}: MonthPickerProps) {
  const [open, setOpen] = React.useState(false);

  // Initialize from props or defaults
  const [selectedYear, setSelectedYear] = React.useState<number>(
    value?.year ? parseInt(value.year) : new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = React.useState<number | null>(
    value?.month ? months.indexOf(value.month) : null
  );

  const years = Array.from({ length: 200 }, (_, i) => 1900 + i);

  const displayText =
    selectedMonth !== null
      ? `${months[selectedMonth]} ${selectedYear}`
      : "Select month";

  // Update when `value` changes externally (like store refresh)
  React.useEffect(() => {
    if (value) {
      setSelectedYear(
        value.year ? parseInt(value.year) : new Date().getFullYear()
      );
      setSelectedMonth(value.month ? months.indexOf(value.month) : null);
    }
  }, [value]);

  // Handle month selection
  const handleSelect = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
    const selected = {
      month: months[monthIndex],
      year: selectedYear.toString(),
    };
    onChange?.(selected);
    setOpen(false);
  };

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
            onValueChange={(val) => {
              const yearNum = parseInt(val);
              setSelectedYear(yearNum);
              // If month already chosen, send update
              if (selectedMonth !== null) {
                onChange?.({
                  month: months[selectedMonth],
                  year: yearNum.toString(),
                });
              }
            }}
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
                onClick={() => handleSelect(index)}
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
