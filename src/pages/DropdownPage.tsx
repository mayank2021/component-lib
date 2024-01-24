import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Option } from "../Types/DropdownTypes";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
];

const DropdownPage = () => {
  const [selection, setSelection] = useState<Option | null>(null);

  const handleSelection = (option: Option) => {
    setSelection(option);
  };
  // url added with pushState -> will not cause page refresh with back and fourth button

  return (
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DropdownPage;
