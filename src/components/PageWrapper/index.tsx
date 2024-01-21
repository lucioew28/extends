import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PageWrapperType = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({ children, className }: PageWrapperType) {
  const styles = twMerge("container", className);
  return <div className={styles}>{children}</div>;
}
