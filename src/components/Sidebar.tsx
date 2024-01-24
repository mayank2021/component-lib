import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Button", path: "/button" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderLinks = links.map((link) => (
    <Link key={link.label} to={link.path}>
      {link.label}
    </Link>
  ));

  return <div className="flex flex-col">{renderLinks}</div>;
};

export default Sidebar;
