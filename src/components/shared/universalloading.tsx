import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface UniversalLoadingProps {
  variant?: "spinner" | "skeleton" | "dots" | "pulse";
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export default function UniversalLoading({
  variant = "spinner",
  size = "md",
  text,
  fullScreen = false,
  className,
}: UniversalLoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const containerClasses = cn(
    "flex flex-col items-center justify-center gap-3",
    fullScreen && "fixed inset-0 bg-background/80 backdrop-blur-sm z-50",
    !fullScreen && "p-8",
    className
  );

  const renderLoading = () => {
    switch (variant) {
      case "spinner":
        return (
          <Loader2
            className={cn("animate-spin text-primary", sizeClasses[size])}
          />
        );

      case "skeleton":
        return (
          <div className="space-y-3">
            <div
              className={cn(
                "bg-muted animate-pulse rounded",
                size === "sm" && "h-4 w-32",
                size === "md" && "h-6 w-48",
                size === "lg" && "h-8 w-64",
                size === "xl" && "h-10 w-80"
              )}
            />
            <div
              className={cn(
                "bg-muted animate-pulse rounded",
                size === "sm" && "h-3 w-24",
                size === "md" && "h-4 w-36",
                size === "lg" && "h-5 w-48",
                size === "xl" && "h-6 w-60"
              )}
            />
            <div
              className={cn(
                "bg-muted animate-pulse rounded",
                size === "sm" && "h-3 w-20",
                size === "md" && "h-4 w-32",
                size === "lg" && "h-5 w-40",
                size === "xl" && "h-6 w-52"
              )}
            />
          </div>
        );

      case "dots":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  "bg-primary rounded-full animate-bounce",
                  sizeClasses[size]
                )}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "0.6s",
                }}
              />
            ))}
          </div>
        );

      case "pulse":
        return (
          <div
            className={cn(
              "bg-primary rounded-full animate-pulse",
              sizeClasses[size]
            )}
          />
        );

      default:
        return (
          <Loader2
            className={cn("animate-spin text-primary", sizeClasses[size])}
          />
        );
    }
  };

  return (
    <div className={containerClasses}>
      {renderLoading()}
      {text && (
        <p
          className={cn(
            "text-muted-foreground font-medium",
            textSizeClasses[size]
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
