import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "./label";

export function PhoneInput() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col gap-3  max-w-fit w-[76vw] md:w-[85%]">
      <Label htmlFor="phone">Phone No.</Label>
      <div className="space-y-2" id="phone">
        <InputOTP
          maxLength={11}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="w-full">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
            <InputOTPSlot index={8} />
            <InputOTPSlot index={9} />
            <InputOTPSlot index={10} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}
