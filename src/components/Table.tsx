import { Fragment } from "react";
import { TableProps } from "../Types/TableTypes";

const Table = ({ data, config, keyFn }: TableProps) => {
  const renderedRows = data?.map((row) => {
    const renderedConfig = config?.map((column) => {
      return (
        <td key={keyFn(row)} className="p-2">
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr key={row.label} className="border-b">
        {renderedConfig}
      </tr>
    );
  });

  const renderedHeadings = config?.map((col) => {
    if (col?.headers) {
      return <Fragment key={col.label}>{col.headers()}</Fragment>;
    }
    return <th key={col.label}>{col.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeadings}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
