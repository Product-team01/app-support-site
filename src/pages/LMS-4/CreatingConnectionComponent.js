import React from 'react';
import './howToRegisterDocumentType.css';

const CreatingConnectionComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-landing-page">
      <h3>Creating a Connection</h3>
      <p>
        From the home screen of the Vue.ai Platform, navigate to Data Hub → Connection Manager → Connections.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}conn1.png`} alt="Connection Manager Navigation" title="Connection Manager Navigation" />
      </div>

      <p>
        In the Connections Listing page, click on Create New.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}conn2.png`} alt="Create New Connection" title="Create New Connection" />
      </div>

      <p>
        In the ensuing form, provide a name that you will use to identify this connection.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}conn3.png`} alt="Provide Connection Name" title="Provide Connection Name" />
      </div>

      <p>
        Next, choose a source and a destination that has already been created.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}conn4.png`} alt="Choose Source and Destination" title="Choose Source and Destination" />
      </div>

      <p>
        In the next section, configure the Connection by choosing the Sync Frequency and the choice of propagating schema changes.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}conn5.png`} alt="Configure Connection" title="Configure Connection" />
      </div>
      
      <p>
        If applicable, select the streams to sync.
      </p>

      <p>
        Hit Create to establish the Connection and test this from the ensuing listing page.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}conn6.png`} alt="Test Connection" title="Test Connection" />
      </div>
    </div>
  );
};

export default CreatingConnectionComponent;
