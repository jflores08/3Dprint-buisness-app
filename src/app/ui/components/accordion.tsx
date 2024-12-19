"use client";

// Import react components
import { FC, Fragment } from "react";

const Accordion: FC<{
  faqs: { question: string; answer: string }[];
}> = ({ faqs }) => {
  return (
    <Fragment>
      <div>
        {faqs.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <h2>{question.answer}</h2>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export { Accordion };
