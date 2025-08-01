import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b mt-[16rem]">
    <button
      onClick={onToggle}
      className="w-full text-left p-4 font-semibold bg-blue-800 text-white hover:bg-gray-200"
    >
      {title}
    </button>
    {isOpen && (
      <div className="p-4 bg-white">
        {content}
      </div>
    )}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  return (
    <div className="max-w-md mx-auto border rounded">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
