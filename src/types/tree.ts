export enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

export interface TreeDataType {
  id: number;
  name: string;
  parentId: number;
}

export interface Item {
  id: string;
  name: string;
  parentId: string;
}
