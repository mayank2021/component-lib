import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "1",
      label: "Can I use React for my project?",
      content:
        "Yes, you can use React for my project. Yes, you can use React for my project. Yes, you can use React for my project. Yes, you can use React for my project",
    },
    {
      id: "2",
      label: "Can I use React for my project?",
      content:
        "Yes, you can use React for my project. Yes, you can use React for my project. Yes, you can use React for my project. Yes, you can use React for my project",
    },
    {
      id: "3",
      label: "Can I use React for my project?",
      content:
        "Yes, you can use React for my project. Yes, you can use React for my project. Yes, you can use React for my project. Yes, you can use React for my project",
    },
  ];

  return (
    <div>
      <div>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AccordionPage;
