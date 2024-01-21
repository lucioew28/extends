import { Fragment, useCallback, useState } from "react";
import { updateItemStates } from "./updateItemStates";
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

type checkboxProps = {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  onClick?: () => void;
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
