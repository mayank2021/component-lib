import { MouseEvent } from "react";
import classNames from "classnames";
import { useNavigationContext } from "../context/NavigationContext";
import { LinkTypes } from "../Types/NavContextType";

const Link = ({ to, children, className }: LinkTypes) => {
  const context = useNavigationContext();
  const activeLink = to === context?.currentPath && "font-bold";

  const classes = classNames("text-blue-500", className, activeLink);

  const handleClick = (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    context?.navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
