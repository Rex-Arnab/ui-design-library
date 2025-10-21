"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { clsx } from "clsx";

export interface CustomSheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export interface CustomSheetTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface CustomSheetContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom";
}

const CustomSheetContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  open: false,
  onOpenChange: () => {},
});

const CustomSheet: React.FC<CustomSheetProps> = ({
  open = false,
  onOpenChange = () => {},
  children,
}) => {
  return (
    <CustomSheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </CustomSheetContext.Provider>
  );
};

const CustomSheetTrigger = React.forwardRef<
  HTMLButtonElement,
  CustomSheetTriggerProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ asChild, children, onClick, ...props }, ref) => {
  const { onOpenChange } = React.useContext(CustomSheetContext);

  const handleClick = () => {
    onOpenChange(true);
    onClick?.();
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick,
    });
  }

  return (
    <button ref={ref} onClick={handleClick} {...props}>
      {children}
    </button>
  );
});

CustomSheetTrigger.displayName = "CustomSheetTrigger";

const CustomSheetContent = React.forwardRef<
  HTMLDivElement,
  CustomSheetContentProps
>(({ className, children, side = "right", ...props }, ref) => {
  const { open, onOpenChange } = React.useContext(CustomSheetContext);

  // Prevent body scroll when sheet is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const slideVariants = {
    right: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
    },
    left: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-100%" },
    },
    top: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "-100%" },
    },
    bottom: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
    },
  };

  const positionStyles = {
    right: "right-0 top-0 h-full w-full sm:w-96 border-l-2",
    left: "left-0 top-0 h-full w-full sm:w-96 border-r-2",
    top: "top-0 left-0 w-full h-auto max-h-[80vh] border-b-2",
    bottom: "bottom-0 left-0 w-full h-auto max-h-[80vh] border-t-2",
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => onOpenChange(false)}
          />

          {/* Sheet Content */}
          <motion.div
            ref={ref}
            initial={slideVariants[side].initial}
            animate={slideVariants[side].animate}
            exit={slideVariants[side].exit}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={clsx(
              "fixed z-50 flex flex-col gap-4 bg-white p-6 shadow-lg dark:bg-gray-900 border-gray-200 dark:border-gray-800",
              positionStyles[side],
              className
            )}
            {...props}
          >
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="flex-1 overflow-auto mt-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

CustomSheetContent.displayName = "CustomSheetContent";

export { CustomSheet, CustomSheetTrigger, CustomSheetContent };
