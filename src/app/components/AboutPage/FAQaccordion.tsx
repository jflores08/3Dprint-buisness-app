"use client";

// Import react components
import { Fragment } from "react";

// Import next componets
import { useTranslations } from "next-intl";

// const FAQaccordion: FC<{
//   faqs: { question: string; answer: string }[];
// }> = ({ faqs }) => {

const FAQaccordion = () => {
  const t = useTranslations("AboutPage.FAQSection");

  // Define FAQs for to display in FAQ accordion
  const faqs = [
    { question: t("question1"), answer: t("answer1") },
    { question: t("question2"), answer: t("answer2") },
    { question: t("question3"), answer: t("answer3") },
  ];

  return (
    <Fragment>
      <h3>FAQs</h3>
      <div>
        {faqs.map((question, index) => (
          <div key={index}>
            <h4>{question.question}</h4>
            <h5>{question.answer}</h5>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export { FAQaccordion };
