import { Div } from "@/types/step";

interface RootStepInterface extends Div {}

export default function RootStep({ children }: RootStepInterface) {
  return (
    <div className="w-full grid grid-cols-[max-content_1fr] gap-x-4">
      {children}
    </div>
  );
}
