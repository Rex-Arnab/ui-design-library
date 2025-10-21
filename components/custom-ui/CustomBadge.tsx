"use client";

import * as React from "react";
import { clsx } from "clsx";

export interface CustomBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const CustomBadge = React.forwardRef<HTMLDivElement, CustomBadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

    const variants = {
      default:
        "bg-blue-600 text-white dark:bg-blue-500",
      secondary:
        "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100",
      destructive:
        "bg-red-600 text-white dark:bg-red-500",
      outline:
        "border-2 border-gray-200 text-gray-900 bg-white dark:border-gray-700 dark:text-white dark:bg-gray-900",
    };

    return (
      <div
        ref={ref}
        className={clsx(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

CustomBadge.displayName = "CustomBadge";

export { CustomBadge };
