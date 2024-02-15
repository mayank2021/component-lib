import { MouseEvent } from "react";
import classNames from "classnames";
import { useNavigationContext } from "../context/NavigationContext";
import { LinkTypes } from "../Types/NavContextType";

const Link = ({ to, children, className }: LinkTypes) => {
  const context = useNavigationContext();
  const activeLink = to === context?.currentPath && "font-bold";

  const classes = classNames(
    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
    className,
    activeLink
  );

  const handleClick = (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    context?.navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={classes}>
      <span className="flex-1 ms-3 whitespace-nowrap">{children}</span>
    </a>
  );
};

export default Link;
