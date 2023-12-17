import React from "react";
import { useState } from "react";

const CopyEmailButton = ({ email }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyClick = () => {
    const emailElement = document.getElementById("email");

    // Create a range and select the email text
    const range = document.createRange();
    range.selectNode(emailElement);

    // Execute the copy command
    document.getSelection().addRange(range);
    document.execCommand("copy");

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
    // Log or display a success message
    console.log(`Email "${email}" copied to clipboard!`);
  };

  return (
    <div>
      <p id="email" onClick={handleCopyClick} style={{ cursor: "pointer" }}>
        {email}
      </p>
      <button onClick={handleCopyClick}>Copy Email</button>
      {showNotification && (
        <div className="text-green-700 ">Email copied to clipboard!</div>
      )}
    </div>
  );
};

export default CopyEmailButton;
