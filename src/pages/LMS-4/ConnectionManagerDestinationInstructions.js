import React from 'react';
import './howToRegisterDocumentType.css';

const ConnectionManagerDestinationInstructions = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="module-overview">
      
      <h3>Navigation</h3>
      <p>From the home screen of the Vue.ai Platform, Navigate to Data Hub → Connection Manager → Destinations.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240711-074205.png`} alt="Navigate to Destinations" title="Navigate to Destinations" />
      </div>

      <h3>Create a New Destination</h3>
      <p>In the Destinations Listing page, click on Create New.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}destcreate.png`} alt="Create New Destination" title="Create New Destination" />
      </div>

      <p>In the ensuing form, provide a name that you will use to identify this destination.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}destname.png`} alt="Destination Name" title="Destination Name" />
      </div>

      <p>Choose Vue Dataset as the destination (to bring data into the platform).</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}destvuedataset.png`} alt="Select Vue Dataset" title="Select Vue Dataset" />
      </div>

      <p>Next, Test the Connection and once successful, hit Create to register the Destination.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}desttestconn.png`} alt="Test Connection" title="Test Connection" />
      </div>

      <h3>Create a Connection</h3>
      <p>Now that we have both, our Source & Destination ready, it’s time to Create a Connection!</p>
    </div>
  );
};

export default ConnectionManagerDestinationInstructions;
