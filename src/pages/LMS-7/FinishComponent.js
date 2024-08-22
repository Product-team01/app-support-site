// src/components/FinishComponent.js
import React from 'react';
import confetti from 'canvas-confetti'; // Import confetti.js

const FinishComponent = () => {
  const handleFinish = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    alert('Congratulations! You have completed the course.');
  };

  return (
    <div className="finish-section">
      <h2>Course Completed!</h2>
      <button onClick={handleFinish} className="finish-button">
        Finish
      </button>
    </div>
  );
};

export default FinishComponent;
