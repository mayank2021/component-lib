import { ReactNode } from "react";

export interface TableRowData {
    label: string;
    color: string;
    score: number;
  }
  
  export interface TableConfig {
    label: string;
    render: (fruit: TableRowData) => string | number | boolean | ReactNode;
    sortValue?: (fruit: TableRowData) => string | number | boolean;
    headers?:() => string | number | boolean | ReactNode;
  }
  
  export interface TableProps {
    data: TableRowData[];
    config: TableConfig[];
    keyFn: (fruit:TableRowData) => string | number;
  }