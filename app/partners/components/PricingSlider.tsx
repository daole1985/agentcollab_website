"use client";

import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider"; // chỉnh lại path nếu cần

type PricingSliderProps = {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  basePriceFormatted: string;
};

const PricingSlider: React.FC<PricingSliderProps> = ({
  label,
  value,
  setValue,
  basePriceFormatted,
}) => {
  return (
    <div className="flex items-center justify-between gap-x-4 text-base">
      <div className="flex flex-col items-start w-44">
        <span className="font-medium">{label}</span>
        <div className="mt-1 flex items-end gap-1 text-xs">
          <span className="text-base font-medium">
            {basePriceFormatted}
          </span>
          <span className="mb-0.5 opacity-60">/month</span>
        </div>
      </div>
      <div className="grow pt-9">
        <Slider
          value={[value]}
          min={0}
          max={100}
          step={1}
          onValueChange={(val) => setValue(val[0])}
          renderThumb={(val) => (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none">
              <span className="bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] min-w-[28px] px-2 py-[5px] text-xs text-white">
                {val}
              </span>
            </span>
          )}
        />
      </div>
    </div>
  );
};

export default PricingSlider;
