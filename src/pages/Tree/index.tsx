import { Text } from "@/components/Text";
import { Tree } from "@/components/extends-ui/tree";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const temp = `
import { Tree } from "@/components/extends-ui/tree";

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

<Tree data={data} />
`;

export default function TreePage() {
  return (
    <div className="w-full">
      <Text.Title variant={"h1"} text={"Tree"} />
      <Text.Paragraph
        text={"A hierarchical checkbox list structure component."}
      />
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
          <div className="border rounded flex items-center justify-center p-4 bg-black text-gray-200">
            <ScrollArea className="w-full h-[250px]">
              <>
                <pre className="w-full text-left ">
                  <code>{temp}</code>
                </pre>
              </>
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
      <Text.Title variant={"h2"} text={"Installation"} />
      <div className="w-full border-l relative">
        <span className="w-7 h-7 rounded-full border bg-gray-200 absolute top-0 left-0 flex items-center justify-center">
          1
        </span>
        hello
      </div>
    </div>
  );
}
