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
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <div className="p-6">
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
          </aside>
          <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            {children}
            <Outlet />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
