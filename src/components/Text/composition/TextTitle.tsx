import { createElement } from "react";
import { twMerge } from "tailwind-merge";

interface TextTitleInterface
  extends React.ComponentPropsWithoutRef<"h1" | "h2"> {
  text: string;
  variant: "h1" | "h2";
}

export default function TextTitle({
  text,
  className,
  variant,
  ...props
}: TextTitleInterface) {
  const variants = {
    h1: "scroll-m-20 text-4xl font-bold tracking-tight",
    h2: "font-heading scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
  };

  const styles = twMerge(variants[variant], className);

  return createElement(variant, { ...props, className: styles }, text);
}
