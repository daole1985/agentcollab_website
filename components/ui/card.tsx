import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-full rounded-2xl lg:rounded-3xl bg-gradient-card border border-[hsla(0,0%,100%,0.15)] shadow-sm before:absolute before:-inset-[3px] before:content-[''] before:rounded-[18px] lg:before:rounded-[26px] before:bg-[linear-gradient(90deg,#3b6bff,#2e96ff_65%,#acb7ff)] before:z-[-1] before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500 group-hover:border-transparent group-hover:before:opacity-100 group-hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_1px_3px_1px_rgba(60,64,67,0.15)]",
      className
    )}
    {...props}
  >
    <div className="relative h-full overflow-hidden rounded-2xl lg:rounded-3xl after:content-[''] after:absolute after:z-[1] after:-inset-x-1 after:-top-[30%] after:h-[60%] after:opacity-30 after:rounded-full after:pointer-events-none after:bg-[#2e96ff] after:blur-[100px]">
      {children}
    </div>
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
