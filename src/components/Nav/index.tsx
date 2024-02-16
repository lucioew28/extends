import { url } from "@/utils/links";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="bg-gray-600 p-1 rounded-sm">
              <img src="/extends.svg" alt="" className="w-full h-6" />
            </div>
            <p className="hidden font-bold sm:inline-block">extends</p>
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <Link to={url.docs}>Docs</Link>
              </li>
              <li>
                <Link to="/docs/tree">Components</Link>
              </li>
            </ul>
          </nav>
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
