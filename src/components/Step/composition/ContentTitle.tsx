import { H3 } from "@/types/step";

interface ContentTitleInterface extends H3 {}

export default function ContentTitle({ children }: ContentTitleInterface) {
  return (
    <h3 className="font-heading scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
