import { url } from "@/utils/links";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "../ui/badge";

// import { url } from "@/utils/links"

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="items-center gap-8 hidden sm:flex">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="bg-gray-600 p-1 rounded-sm">
              <img src="/extends.svg" alt="" className="w-full h-6" />
            </div>
            <p className="hidden font-bold sm:inline-block">extends</p>
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <Link to={url.components}>Components</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button size={"icon"} variant={"ghost"}>
                <Menu className="w-4 h-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="py-6">
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
            </DrawerContent>
          </Drawer>
        </div>

        <div>
          <Link to={url.gitHub} target="_blank">
            <Button size={"icon"} variant={"ghost"}>
              <GitHubLogoIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
