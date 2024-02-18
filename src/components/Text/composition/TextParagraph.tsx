import { twMerge } from "tailwind-merge";

interface TextParagraphInterface extends React.ComponentPropsWithoutRef<"p"> {
  text: string;
}

export default function TextParagraph({
  text,
  className,
}: TextParagraphInterface) {
  const styles = twMerge("text-lg text-muted-foreground", className);
  return <p className={styles}>{text}</p>;
}
