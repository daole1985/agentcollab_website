"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof SliderPrimitive.Root> & {
  renderThumb?: (value: number) => React.ReactNode;
};

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  Props
>(
  (
    { className, renderThumb, value, defaultValue, onValueChange, ...props },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<number[]>(
      value ?? defaultValue ?? [0],
    );

    // sync khi dùng controlled
    React.useEffect(() => {
      if (value) setInternalValue(value);
    }, [value]);

    const val = internalValue[0];

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className,
        )}
        value={internalValue}
        onValueChange={(val) => {
          setInternalValue(val);
          onValueChange?.(val);
        }}
        {...props}
      >
        {/* Track */}
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-white/[0.06] border border-white/10">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[#4078a8] via-[#6fb8ea] to-[#a6daff]" />
        </SliderPrimitive.Track>

        {/* Thumb + Tooltip */}
        <SliderPrimitive.Thumb className="relative block h-5 w-5 bg-gradient-to-br from-[#a6daff] to-[#4078a8] text-[#04070d] rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.08)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50">
          {renderThumb?.(val)}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    );
  },
);

Slider.displayName = "Slider";
