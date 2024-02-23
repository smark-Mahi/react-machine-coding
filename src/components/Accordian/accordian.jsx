import React, { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      question: "Question1",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, animi perferendis! Expedita recusandae odio possimus iure, voluptatibus animi mollitia, rem molestiae, id saepe non omnis. Animi dolorem optio magnam labA.",
    },
    {
      question: "Question2",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, animi perferendis! Expedita recusandae odio possimus iure, voluptatibus animi mollitia, rem molestiae, id saepe non omnis. Animi dolorem optio magnam labA.",
    },
    {
      question: "Question3",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, animi perferendis! Expedita recusandae odio possimus iure, voluptatibus animi mollitia, rem molestiae, id saepe non omnis. Animi dolorem optio magnam labA.",
    },
  ];
  const toggle = (i) => {
    setSelected(i);
    console.log(i, selected, "h");
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={`${selected === i ? "show" : "notshow"}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
