import { Div } from "@/types/step";

interface CountStepInterface extends Div {
  count: number;
}

export default function CountStep({ count }: CountStepInterface) {
  return (
    <div className="w-fit h-full flex flex-col items-center col-span-">
      <span className="w-7 h-7 rounded-full border bg-gray-200 flex items-center justify-center text-sm">
        {count}
      </span>
      <div className="h-full flex-1 mt-1 w-[1px] bg-gray-200"></div>
    </div>
  );
}
