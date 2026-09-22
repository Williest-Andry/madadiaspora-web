"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

const CustomPhoneInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      type="tel"
      className="bg-chart-2 h-full w-full rounded-[18px] border-[3px] p-[15px]"
      placeholder="Téléphone"
    />
  );
});

CustomPhoneInput.displayName = "CustomPhoneInput";

export default CustomPhoneInput;
