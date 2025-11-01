import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonCtaProps {
  link: string;
  text: string;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
  openInNewTab?: boolean;
}

export default function ButtonCta({
  link,
  text,
  variant = "primary",
  ariaLabel,
  openInNewTab = false,
}: ButtonCtaProps) {
  if (!link || !text) {
    return null;
  }

  const variantClass = variant === "secondary" ? styles.secondary : styles.primary;

  return (
    <Link
      href={link}
      className={`${styles.buttonCta} ${variantClass}`}
      aria-label={ariaLabel || text}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </Link>
  );
}
