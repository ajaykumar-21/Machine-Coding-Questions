import React, { useState } from "react";

const data = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answer: "100",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
  },
  {
    question: "How many continents are there on Earth?",
    answer: "7",
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the fastest land animal?",
    answer: "Cheetah",
  },
  {
    question: "What is the currency of Japan?",
    answer: "Yen",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answer: "Carbon dioxide",
  },
];

function Practics() {
  const [show, setShow] = useState(null);

  const handleToggle = (index) => {
    setShow(show === index ? null : index);
  };
  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            {item.question}
            <button onClick={() => handleToggle(index)}>
              {show === index ? "-" : "+"}
            </button>
            <div>{show === index ? item.answer : ""}</div>
          </div>
        ))}
    </div>
  );
}

export default Practics;
