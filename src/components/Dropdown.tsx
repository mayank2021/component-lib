import { useEffect, useRef, useState } from "react";
import { Option, DropdownOptions } from "../Types/DropdownTypes";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }: DropdownOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEle.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler, true);
  });

  const handleDropdownOpen = () => {
    setIsOpen((current) => !current);
  };

  const handleOptionClick = (selectedOption: Option) => {
    onChange(selectedOption);
    setIsOpen(false);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <Panel key={option?.value} onClick={() => handleOptionClick(option)}>
        {option?.label}
      </Panel>
    );
  });

  return (
    <div ref={divEle}>
      <Panel className="flex justify-between" onClick={handleDropdownOpen}>
        {value?.label || "Select..."} <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && (
        <div>
          <div>{renderedOptions}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
