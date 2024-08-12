import React from 'react';
import './TextComponent.css';

const TextComponent = ({ title, description }) => {
  return (
    <div className="unique-text-container">
      <h3 className="unique-text-title">{title}</h3>
      <p className="unique-text-description">{description}</p>
    </div>
  );
};

export default TextComponent;
