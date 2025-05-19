import React, { useState } from "react";
import "./App.css";

const tabsData = [
  {
    label: "Overview",
    content: "This is a brief overview of our product. It helps teams collaborate, manage tasks, and track progress in real-time.",
  },
  {
    label: "Features",
    content: ` Real-time collaboration and Customizable workflows.`,
  },
  {
    label: "Pricing",
    content: "Our plans start from ₹499/month. We offer Free, Pro, and Enterprise tiers depending on your team's needs.",
  },
  {
    label: "FAQs",
    content: "Got questions? We’ve got answers. Browse our FAQ section for common queries related to pricing, setup, and integrations.",
  },
  {
    label: "Contact",
    content: "Need more help? Reach out to our support team at support@example.com or call us at 1800-123-4567.",
  },
];


const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <h2>🧩 Tabs Component</h2>
      <div className="tabs-header">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <p>{tabsData[activeTab].content}</p>
      </div>
    </div>
  );
};

export default App;