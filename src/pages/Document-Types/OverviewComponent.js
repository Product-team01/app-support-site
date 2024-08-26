import React from 'react';

const OverviewComponent = () => {
  return (
    <div>
      <h2>Document Types Overview</h2>
      <p>
        Document Types are the bedrock of what Intelligent Document Processing (IDP) is built on. They are the cornerstone to creating extraction models for different documents. This learning module provides a comprehensive overview of Document Types, covering their purpose, key functionalities, and the steps involved in registering a new Document Type.
      </p>
      <h3>What You’ll Learn by the End of This Module</h3>
      <ul>
        <li>Understand what Document Types are on Vue.ai Platform.</li>
        <li>How to create a new Document Type</li>
        <li>Some best practices around working with Document Types</li>
      </ul>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/N0ZboK3w_Qg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Introduction to IDP"
        ></iframe>
      </div>
    </div>
  );
};

export default OverviewComponent;
