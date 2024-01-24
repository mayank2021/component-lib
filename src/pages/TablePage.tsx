import { ReactNode } from "react";
import SortableTable from "../components/SortableTable";
import { TableRowData } from "../Types/TableTypes";

const TablePage = () => {
  const data = [
    { label: "orange", color: "bg-orange-500", score: 5 },
    { label: "apple", color: "bg-red-500", score: 3 },
    { label: "guava", color: "bg-green-500", score: 2 },
    { label: "banana", color: "bg-yellow-500", score: 4 },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit: TableRowData): string => fruit.label,
      sortValue: (fruit: TableRowData): string => fruit.label,
    },
    {
      label: "Color",
      render: (fruit: TableRowData): ReactNode => (
        <div className={`p-3 m-2 ${fruit.color}`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit: TableRowData): number => fruit.score,
      sortValue: (fruit: TableRowData): number => fruit.score,
    },
  ];

  const keyFn = (fruit: TableRowData): string => fruit.label;

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
