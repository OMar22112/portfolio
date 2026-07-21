import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  download?: boolean;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md";
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
}

export function Button({
  children,
  href,
  external,
  download,
  variant = "solid",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  className,
  onClick,
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    solid:
      "bg-accent text-bg shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5",
    outline:
      "border border-border bg-surface/40 text-fg hover:border-accent/50 hover:text-accent hover:-translate-y-0.5",
    ghost: "text-muted hover:text-fg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[0.95rem]",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {IconRight && (
        <IconRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return external ? (
      <a
        href={href}
        target={download ? undefined : "_blank"}
        rel="noopener noreferrer"
        download={download}
        className={classes}
        {...rest}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
}
