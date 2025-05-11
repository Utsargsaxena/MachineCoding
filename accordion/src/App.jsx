import React, { useState } from "react";
import "./App.css";

const App = () => {
  const data = [
    {
      header: "What is your return policy?",
      content:
        "We offer a 30-day return policy on all items. Please ensure products are unused and in original packaging for a full refund.",
    },
    {
      header: "How long does delivery take?",
      content:
        "Standard shipping takes 3–5 business days. Expedited options are available at checkout for faster delivery.",
    },
    {
      header: "Do you offer customer support?",
      content:
        "Yes, our support team is available 24/7 via chat and email. You can also reach us by phone during business hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="page-wrapper">
  <div className="outer-container">
    <h2>FAQ's</h2>
    {data.map((item, index) => (
      <div className="item" key={index}>
        <p onClick={() => toggleAccordion(index)} className="header">
          <span>{item.header}</span>
          <span style={{ fontWeight: 'bold', marginLeft: 12 }}>
            {openIndex === index ? '−' : '+'}
          </span>
        </p>
        {openIndex === index && (
          <p className="content">{item.content}</p>
        )}
      </div>
    ))}
  </div>
</div>

  );
};

export default App;
