import { useEffect, useRef, useState } from "react";
import { Option, DropdownOptions } from "../Types/DropdownTypes";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }: DropdownOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dOptions, setDOptions] = useState(options);
  const [loading, setLoading] = useState(false);
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

  const renderedOptions = dOptions?.map((option) => {
    return (
      <Panel key={option?.value} onClick={() => handleOptionClick(option)}>
        {option?.label}
      </Panel>
    );
  });

  // when an event occurs, browser want to search event handlers to call
  // order in which this search occurs is divided into three phases
  // Capture Phase -> Target Phase -> Bubble Phase
  // body -> div -> button
  // someone click the button -> in
  // capture phase - we find out the most parent element in this case, it's body and we start going down to each
  // element until we found the element who clicked(in this case - it's button) and while going down we ask to every
  // element that it has a event handler or not
  // Target phase -> we reach to the clicked element(in this case button)
  // Bubble phase -> we start going up to the most parent element and will ask again to each element that if it has
  // a event handler or not
  // 99% of time we never focused on capture phase we only look into target phase and bubbling phase
  // document.addEventListener('onclick', handler) -> looking for bubbling phase
  // document.addEventListener('onclick', handler, true) -> looking for capturing phase

  function atBottom(el: any) {
    // height of an element's content, including content not visible on the screen due to overflow.
    let sh = el.scrollHeight;
    // scrollTop value is a distance from the element's top to its topmost visible content. When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0.
    let st = el.scrollTop;
    // offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer.
    let ht = el.offsetHeight;
    return ht == 0 || st == sh - ht;
  }

  useEffect(() => {
    const handler = () => {
      if (atBottom(divEle.current)) {
        setLoading(true);
        setTimeout(() => {
          setDOptions((prev) => [...prev, ...options]);
          setLoading(false);
        }, 3000);
      }
    };
    divEle.current?.addEventListener("scroll", handler);
    return () => divEle.current?.removeEventListener("scroll", handler);
  }, []);

  return (
    <div ref={divEle} className="h-52 overflow-y-scroll">
      <Panel className="flex justify-between" onClick={handleDropdownOpen}>
        {value?.label || "Select..."} <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && (
        <div>
          <div>{renderedOptions}</div>
          {loading ? <div>loading...</div> : null}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
