import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import { url } from "@/utils/links";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Extends your component library
      </h1>
      <h2 className="text-center text-lg text-muted-foreground sm:text-xl w-[500px]">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </h2>
      <div className="flex items-center gap-4">
        <Link to={url.docs}>
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
