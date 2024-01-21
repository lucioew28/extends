import PageWrapper from "@/components/PageWrapper";
import { Tree } from "@/components/Tree";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";

const data = [
  {
    id: 1,
    name: "Fruits",
    parentId: 0,
  },
  {
    id: 2,
    name: "Apple",
    parentId: 1,
  },
  {
    id: 3,
    name: "Pear",
    parentId: 1,
  },
  {
    id: 4,
    name: "Banana",
    parentId: 1,
  },
  {
    id: 5,
    name: "Countries",
    parentId: 0,
  },
  {
    id: 6,
    name: "Netherlands",
    parentId: 5,
  },
  {
    id: 7,
    name: "Scandinavia",
    parentId: 5,
  },
  {
    id: 8,
    name: "Denmark",
    parentId: 7,
  },
  {
    id: 9,
    name: "Norway",
    parentId: 7,
  },
  {
    id: 10,
    name: "Sweden",
    parentId: 7,
  },
  {
    id: 11,
    name: "Germany",
    parentId: 5,
  },
];

export default function ComponentsPage() {
  return (
    <PageWrapper>
      <div className="py-6">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Tree
          </h1>

          <p className="text-lg text-muted-foreground">
            A hierarchical checkbox list structure component.
          </p>
        </div>

        <Tabs defaultValue="preview" className="pt-8">
          <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              value="preview"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              value="code"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="border rounded flex items-center justify-center p-4">
              <Tree data={data} />
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="border rounded flex items-center justify-center p-4">
              <Tree data={data} />
            </div>
          </TabsContent>
        </Tabs>

        <h2
          className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
          id="installation"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#installation"
          >
            <span className="icon icon-link"></span>
          </a>
          Installation
        </h2>
        <div className="flex items-center justify-between p-4 rounded bg-zinc-950">
          <pre className="text-white font-mono">
            <code>
              npx{" "}
              <span className="text-gray-400">exteds-ui@latest add tree</span>
            </code>
          </pre>
          <Button
            className="h-4 w-4 p-0 hover:bg-transparent"
            variant={"ghost"}
            onClick={() => console.log("chick")}
          >
            <Copy className="z-10 h-4 w-4 text-zinc-50 hover:text-zinc-50" />
          </Button>
        </div>
        {/* <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:rog:-trigger-cli"
          id="radix-:rog:-content-cli"
          tabIndex={0}
          className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-semibold"
          style={{ animationDuration: "0s" }}
        >
          <div data-rehype-pretty-code-fragment="">
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 p-4 dark:bg-zinc-900"
              data-language="bash"
            >
              <code className="font-mono text-white text-sm">
                npx{" "}
                <span className="text-gray-400">exteds-ui@latest add tree</span>
              </code>
            </pre>
            <Button onClick={() => console.log("chick")}>
              <Copy className="z-10 h-4 w-4 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4" />
            </Button>
          </div>
        </div> */}
      </div>
    </PageWrapper>
  );
}
