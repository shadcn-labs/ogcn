import { cn } from "@/lib/utils";

export const LogoMark = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
    {...props}
  >
    <path d="M10 6.6 8.6 8M12 18v4m3-14.5L9.5 13M7 22h10" />
    <circle cx="12" cy="10" r="8" />
  </svg>
);

export const getLogoMarkSVG = (color: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 6.6 8.6 8M12 18v4m3-14.5L9.5 13M7 22h10" />
    <circle cx="12" cy="10" r="8" />
  </svg>
);
