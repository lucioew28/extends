import { Div } from "@/types/step";

interface ContentStepInterface extends Div {}

export default function ContentStep({ children }: ContentStepInterface) {
  return <div className="space-y-2">{children}</div>;
}
