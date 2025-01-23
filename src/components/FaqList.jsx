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
            Extension Numbers: <b>Melkzedek 235</b>, <b>Moses 139</b>, <b>Shirley 176</b>, and <b>Thomas
            162</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqList;
