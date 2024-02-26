import { ReactNode, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import PageWrapper from "../PageWrapper";

import { Badge } from "@/components/ui/badge";

type RootLayoutType = {
  children?: ReactNode;
};

export default function RootLayout({ children }: RootLayoutType): ReactElement {
  return (
    <PageWrapper>
      <div className="flex items-start">
        <div className="py-6 max-w-[260px] w-full hidden sm:block">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            Components
          </h4>
          <Link
            to={"/components/tree"}
            className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
          >
            Tree
          </Link>

          <span className="group hover:cursor-not-allowed flex gap-2 w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground ">
            <p>Upload Area</p>
            <Badge>Soon</Badge>
          </span>
        </div>
        {children}
        <Outlet />
      </div>
    </PageWrapper>
  );
}
