import React from "react";
import FaqItem from "./FaqItem";

const FaqList = ({ faqs }) => {
  return (
    <div>
      {faqs.length > 0 ? (
        faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))
      ) : (
        <div>
          <p>No FAQs found. Contact ICT</p>
          <p>
            Extension Numbers: Melkzedek 235, Moses 139, Shirley 176, and Thomas
            162
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqList;
