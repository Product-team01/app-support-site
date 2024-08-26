import React from 'react';
import './howToRegisterDocumentType.css';

const NewGroupComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="workflow-builder-ui-overview">
      <h3>Workflow Builder UI Overview</h3>
      <p>
        In this section, we’ll dive into the user interface (UI) of the Workflow Builder, guiding you through the layout and features that make creating and managing workflows intuitive and efficient. You’ll learn how to navigate the UI, understand the different elements like the node pane, and see how to connect and configure nodes to build your workflow. This section will equip you with the knowledge to confidently interact with the Workflow Builder, ensuring you can leverage all its capabilities to streamline and automate your business processes.
      </p>
      <p><strong>Navigate to Workflow Builder:</strong> Automation Hub ➔ Workflow Manager ➔ Workflows</p>
      <div className="image-container">
        {/* <p><strong>Open image-20240819-064222.png</strong></p> */}
        <img src={`${imageBaseUrl}image-20240819-064222.png`} alt="Workflow Manager Page" title="Workflow Manager Page" />
      </div>
      <div className="image-container">
        {/* <p><strong>Open image-20240819-070506.png</strong></p> */}
        <img src={`${imageBaseUrl}image-20240819-070506.png`} alt="Workflow Builder UI" title="Workflow Builder UI" />
      </div>
    </div>
  );
};

export default NewGroupComponent;
