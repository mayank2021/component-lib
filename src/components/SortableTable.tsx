import { useState } from "react";
import Table from "./Table";
import { TableProps } from "../Types/TableTypes";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SortableTable = (props: TableProps) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | number | boolean | null>(null);
  const { config, data } = props;

  const handleClick = (label: string | number | boolean) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const col = config?.find((ele) => ele?.label === sortBy);
    sortedData = [...data]?.sort((a, b) => {
      const valA = col?.sortValue?.(a);
      const valB = col?.sortValue?.(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valA === "string" && typeof valB === "string") {
        return valA.localeCompare(valB) * reverseOrder;
      } else if (typeof valA === "number" && typeof valB === "number") {
        return (valA - valB) * reverseOrder;
      }
      return 0;
    });
  }

  const getIcons = (
    label: string | number | boolean,
    sortBy: string | number | boolean | null,
    sortOrder: string | null
  ) => {
    if (label !== sortBy)
      return (
        <div>
          <IoIosArrowUp /> <IoIosArrowDown />
        </div>
      );
    if (sortOrder === null)
      return (
        <div>
          <IoIosArrowUp /> <IoIosArrowDown />
        </div>
      );
    else if (sortOrder === "asc") return <IoIosArrowUp />;
    else if (sortOrder === "desc") return <IoIosArrowDown />;
  };

  const updatedConfig = config?.map((col) => {
    if (!col?.sortValue) return col;

    return {
      ...col,
      headers: () => (
        <th className="flex" onClick={() => handleClick(col.label)}>
          {getIcons(col.label, sortBy, sortOrder)}
          {col.label}
        </th>
      ),
    };
  });
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
