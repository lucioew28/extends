import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import { url } from "@/utils/links";

export default function HomePage() {
  return (
    <div className="container flex flex-col gap-2 w-full h-[calc(100dvh-100px)] justify-center items-center">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Extends your component library
      </h1>
      <h2 className="text-center text-lg text-muted-foreground sm:text-xl max-w-[600px]">
        Collection of components built using shadcn/ui components and
        principles. Accessible, customizable, and open source.
      </h2>
      <div className="flex items-center gap-4">
        <Link to={url.components}>
          <Button>Get Started</Button>
        </Link>
        <Link to={url.gitHub} target="_blank">
          <Button variant={"outline"} className="flex items-center gap-2">
            <GitHubLogoIcon />
            <p>GitHub</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
