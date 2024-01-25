import { ReactNode, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import PageWrapper from "../PageWrapper";

type RootLayoutType = {
  children?: ReactNode;
};

export default function RootLayout({ children }: RootLayoutType): ReactElement {
  return (
    <PageWrapper>
      <div className="flex items-start">
        <div className="py-6 max-w-[260px] w-full">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            Components
          </h4>
          <Link
            to={"/docs/tree"}
            className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
          >
            Tree
          </Link>
          <Link
            to={"/docs/upload-area"}
            className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
          >
            Upload Area
          </Link>
        </div>
        {children}
        <Outlet />
      </div>
    </PageWrapper>
  );
}
