"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default:
        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
      outline:
        "border-2 border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:active:bg-gray-700",
      ghost:
        "text-gray-900 hover:bg-gray-100 active:bg-gray-200 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-700",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-base",
      sm: "h-8 px-3 py-1.5 text-sm",
      lg: "h-12 px-6 py-3 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
