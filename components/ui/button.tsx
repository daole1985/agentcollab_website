import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-[background] duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "relative bg-[linear-gradient(90deg,#3b6bff,#2e96ff_65%,#acb7ff)] text-primary-foreground overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[rgba(32,33,36,.18)] before:pointer-events-none hover:shadow-[0_1px_2px_0_rgba(60,64,67,.3),_0_1px_3px_1px_rgba(60,64,67,.3)] hover:before:opacity-100",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "relative bg-[linear-gradient(90deg,#3b6bff,#2e96ff_65%,#acb7ff)] text-primary-foreground overflow-hidden before:absolute before:inset-[1px] before:bg-[#060606] before:pointer-events-none before:rounded-full after:absolute after:inset-[1px] after:pointer-events-none after:rounded-full hover:after:bg-[hsla(0,0%,100%,.08)]",
        secondary:
          "text-[15px] text-[#bdc1c6] bg-[rgba(241,243,244,0.08)] hover:bg-[rgba(241,243,244,0.12)]",
        ghost: "text-[#aecbfa] font-medium",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[50px] pl-4 pr-3",
        sm: "h-9",
        lg: "h-11",
        icon: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
