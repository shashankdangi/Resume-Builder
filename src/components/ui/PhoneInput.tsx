import { Label } from "./label";
import { Input } from "./input";

interface PhoneProps {
  value?: string;
  onChange: (val: string) => void;
}

export function PhoneInput({ value, onChange }: PhoneProps) {
  return (
    <div className="flex flex-col gap-3  w-fit">
      <Label htmlFor="phone">Phone No.</Label>
      <div className="space-y-2" id="phone">
        {/* <InputOTP maxLength={11} value={num} onChange={handleChange}>
          <InputOTPGroup className="w-full">
            {Array.from({ length: 11 }).map((_, idx) => (
              <InputOTPSlot key={idx} index={idx} />
            ))}
        </InputOTPGroup>
        </InputOTP> */}
        <Input
          id="phone"
          type="tel"
          value={value}
          maxLength={11}
          placeholder="Enter Your Number"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
