import { Step } from "@/components/Step";
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

const temp2 = `npx shadcn-ui@latest add checkbox
npm install lucide-react
`;

const checkboxCode = `import { Fragment, useCallback, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus } from "lucide-react";

enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

type ItemState = {
  id: number;
  state: CheckboxState;
};

type Item = {
  id: number;
  name: string;
  parentId: number;
};

type CheckboxListProps = {
  items: Item[];
  idsToRender?: number[];
  indentLevel?: number;
  onClick?: (id: number) => void;
  getStateForId: (id: number) => CheckboxState;
};

export const updateItemStates = (
  oldState: ItemState[],
  items: Item[],
  clickedId: number
) => {
  const newState = oldState.map((i) => ({ ...i }));

  const getItemState = (id: number) => {
    return newState.find((i) => i.id === id)!.state;
  };

  const updateParent = (id: number) => {
    const item = items.find((i) => i.id === id);
    const parent = items!.find((i) => i.id === item!.parentId!);
    if (!parent) return;
    const childIds = items
      .filter((i) => i.parentId === parent.id)
      .map((i) => i.id);
    const childStates = childIds.map((childId) => getItemState(childId));
    if (
      childStates.length ===
      childStates.filter((s) => s === CheckboxState.CHECKED).length
    ) {
      newState.find((i) => i.id === parent.id)!.state = CheckboxState.CHECKED;
    } else if (
      childStates.length ===
      childStates.filter((s) => s === CheckboxState.UNCHECKED).length
    ) {
      newState.find((i) => i.id === parent.id)!.state = CheckboxState.UNCHECKED;
    } else {
      newState.find((i) => i.id === parent.id)!.state =
        CheckboxState.INDETERMINATE;
    }
    updateParent(parent.id);
  };

  const setUnchecked = (id: number) => {
    newState.find((i) => i.id === id)!.state = CheckboxState.UNCHECKED;
    items
      .filter((i) => i.parentId === id)
      .map((i) => i.id)
      .forEach((childId) => setUnchecked(childId));
    updateParent(id);
  };

  const setChecked = (id: number) => {
    newState.find((i) => i.id === id)!.state = CheckboxState.CHECKED;
    items
      .filter((i) => i.parentId === id)
      .map((i) => i.id)
      .forEach((childId) => setChecked(childId));
    updateParent(id);
  };

  const itemState = getItemState(clickedId);
  if (itemState === CheckboxState.CHECKED) {
    setUnchecked(clickedId);
  } else {
    setChecked(clickedId);
  }
  return newState;
};

function CheckboxList({
  items,
  getStateForId,
  idsToRender = [],
  indentLevel = 0,
  onClick = () => {},
}: CheckboxListProps) {
  if (!idsToRender.length) {
    idsToRender = items.filter((i) => !i.parentId).map((i) => i.id);
  }

  const getChildNodes = (parentId: number) => {
    const nodeItems = items.filter((i) => i.parentId === parentId);
    if (!nodeItems.length) return null;
    return (
      <CheckboxList
        items={items}
        idsToRender={nodeItems.map((i) => i.id)}
        indentLevel={indentLevel + 1}
        onClick={onClick}
        getStateForId={getStateForId}
      />
    );
  };

  return (
    <ul style={{ paddingLeft: indentLevel * 20 }}>
      {idsToRender.map((id) => {
        const item = items.find((i) => i.id === id);
        const checkboxState = getStateForId(id);
        const isIndeterminate = checkboxState === CheckboxState.INDETERMINATE;
        const isChecked = checkboxState === CheckboxState.CHECKED;
        return (
          <Fragment key={item!.id}>
            <li className="flex items-center gap-2 py-1">
              {isIndeterminate ? (
                <div className="w-fit rounded bg-black p-[1px]">
                  <Minus className="h-[14px] w-[14px] text-white" />
                </div>
              ) : (
                <Checkbox
                  id={String(item?.id)}
                  onClick={() => onClick(item!.id)}
                  checked={isChecked}
                />
              )}
              <label
                htmlFor={String(item?.id)}
                className="hover:cursor-pointer"
              >
                {item!.name}
              </label>
            </li>
            {getChildNodes(item!.id)}
          </Fragment>
        );
      })}
    </ul>
  );
}

function Tree({ data }: { data: Item[] }) {
  const defaultItemStates: ItemState[] = data.map((i) => ({
    id: i.id,
    state: CheckboxState.UNCHECKED,
  }));

  const [itemStates, setItemStates] = useState<ItemState[]>(defaultItemStates);
  const getStateForId = useCallback(
    (id: number) => {
      return itemStates.find((i) => i.id === id)!.state;
    },
    [itemStates]
  );
  const clickHandler = useCallback(
    (id: any) => setItemStates(updateItemStates(itemStates, data, id)),
    [itemStates]
  );
  return (
    <CheckboxList
      items={data}
      onClick={clickHandler}
      getStateForId={getStateForId}
    />
  );
}

export { Tree, CheckboxList };
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
      <Text.Title variant={"h2"} text={"Installation"} className="mt-4 mb-2" />
      <Step.Root>
        <Step.Count count={1} />
        <Step.Content>
          <Step.Title>
            Install the following dependencies from shadcn/ui and lucide-react:
          </Step.Title>
          <div className="py-4">
            <div className="border rounded flex items-center justify-center p-2 bg-black text-gray-200">
              <pre className="w-full text-left ">
                <code>{temp2}</code>
              </pre>
            </div>
          </div>
        </Step.Content>
      </Step.Root>
      <Step.Root>
        <Step.Count count={2} />
        <Step.Content>
          <Step.Title>
            Copy and paste the following code into your project folder{" "}
            <span className="px-2 py-1 rounded-sm bg-gray-100 text-gray-400 text-sm">
              components
            </span>
            {" > "}
            <span className="px-2 py-1 rounded-sm bg-gray-100 text-gray-400 text-sm">
              extends-ui
            </span>
            {" > "}
            <span className="px-2 py-1 rounded-sm bg-gray-100 text-gray-400 text-sm">
              tree.tsx
            </span>
          </Step.Title>
          <div className="py-4">
            <div className="border rounded w-full items-center justify-center p-2 bg-black overflow-x-auto h-[500px] text-gray-200">
              <pre className="h-full max-w-[100px] text-left w-fit">
                <code>{checkboxCode}</code>
              </pre>
            </div>
          </div>
        </Step.Content>
      </Step.Root>
      <Step.Root>
        <Step.Count count={3} />
        <Step.Content>
          <Step.Title>
            Import the{" "}
            <span className="px-2 py-1 rounded-sm bg-gray-100 text-gray-400 text-sm">
              Tree
            </span>{" "}
            component and pass your data.
          </Step.Title>
          <div className="py-4">
            <div className="border rounded w-full items-center justify-center p-2 bg-black overflow-x-auto h-[500px] text-gray-200">
              <pre className="h-full max-w-[100px] text-left w-fit">
                <code>{temp}</code>
              </pre>
            </div>
          </div>
        </Step.Content>
      </Step.Root>
    </div>
  );
}
