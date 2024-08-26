import React from 'react';
import './howToRegisterDocumentType.css';

const ConnectionManagerOverview = () => {
  return (
    <div className="module-overview">
    

      <h3>Introduction</h3>
      <p>
        The Connection Manager is the feature of the Vue.ai Platform designed to make data transfer from any Source to any Destination simple. With a combination of the simplicity of low-code-no-code flows, and the flexibility of writing custom code, Connection Manager is your gateway to all data ingress into and egress out of the Vue.ai platform.
      </p>

      <h3>The Connection Manager has two purposes:</h3>
      <ul>
        <li><strong>Data Migration:</strong> As the name suggests, it is simply, to move data from a source to a destination.</li>
        <li><strong>Data Persistence:</strong> Data Persistence is a feature offered by the Vue.ai Platform to read from a Data Source & persist the Data in the Vue.ai Platform as a Dataset that can be used within the Platform for various different use-cases that will be covered in the forthcoming modules.</li>
      </ul>
    </div>
  );
};

export default ConnectionManagerOverview;
