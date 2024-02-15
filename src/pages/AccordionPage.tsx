import Accordion from "../components/Accordion";

const items = [
  {
    id: "1",
    label: "Can I use React for my project?",
    content: "Yes, you can use React for my project.",
  },
  {
    id: "2",
    label: "React is a library or framework?",
    content: "React is  library.",
  },
  {
    id: "3",
    label: "Can I use Tailwind with React?",
    content: "Yes, you can use Tailwind with React",
  },
];

const AccordionPage = () => {
  return (
    <div>
      <div>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AccordionPage;
