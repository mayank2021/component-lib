import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { AccordionItems } from "../Types/AccordionType";

const Accordion = ({ items }: AccordionItems) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    const handleExpand = (ind: number) => {
      if (expandedIndex === ind) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(ind);
      }
    };

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleExpand(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
