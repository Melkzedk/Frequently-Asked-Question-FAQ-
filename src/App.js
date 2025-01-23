import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import FaqList from "./components/FaqList";
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs] = useState([
    { question: "How to reset my password?", answer: "Go to settings > reset password." },
    { question: "How to contact support?", answer: "Email us at support@example.com." },
    { question: "How to update my profile?", answer: "Click on your profile picture and select Edit Profile." },
  ]);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h1>FAQ Search</h1>
      </div>
      <SearchBar onSearch={setSearchQuery} />
      <FaqList faqs={filteredFaqs} />
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default App;
