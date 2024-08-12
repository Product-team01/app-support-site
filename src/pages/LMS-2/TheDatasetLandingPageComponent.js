import React from 'react';
import './howToRegisterDocumentType.css';


const TheDatasetLandingPageComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-landing-page">
      

      <h3>Introduction</h3>
      <p>
        The Dataset Landing Page is the home screen for every dataset. The page consists of four sections:
      </p>
      <ul>
        <li>Overview</li>
        <li>Schema Details</li>
        <li>Sample Data</li>
        <li>Reports</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}datasets-home.png`} alt="Datasets Home" title="Datasets Home" />
      </div>
      <p>
        Each section is detailed in the following sub-sections.
      </p>
    </div>
  );
};

export default TheDatasetLandingPageComponent;
