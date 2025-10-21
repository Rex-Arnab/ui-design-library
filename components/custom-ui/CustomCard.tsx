"use client";

import * as React from "react";
import { clsx } from "clsx";

const CustomCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "rounded-xl border-2 border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",
        className
      )}
      {...props}
    />
  )
);
CustomCard.displayName = "CustomCard";

const CustomCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CustomCardHeader.displayName = "CustomCardHeader";

const CustomCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx(
      "text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white",
      className
    )}
    {...props}
  />
));
CustomCardTitle.displayName = "CustomCardTitle";

const CustomCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx("text-sm text-gray-600 dark:text-gray-400", className)}
    {...props}
  />
));
CustomCardDescription.displayName = "CustomCardDescription";

const CustomCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx("p-6 pt-0", className)} {...props} />
  )
);
CustomCardContent.displayName = "CustomCardContent";

const CustomCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CustomCardFooter.displayName = "CustomCardFooter";

export {
  CustomCard,
  CustomCardHeader,
  CustomCardFooter,
  CustomCardTitle,
  CustomCardDescription,
  CustomCardContent,
};
