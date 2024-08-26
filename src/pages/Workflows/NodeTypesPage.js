import React from 'react';
import './howToRegisterDocumentType.css';

const NodeTypesPage = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/'; // Replace with your actual image base URL

  return (
    <div className="node-types-page">
      <h3>Access the Node Types Page</h3>
      <p>Navigate to the <strong>"Node Types"</strong> Section:</p>
      <ul>
        <li>Open the Automation Hub.</li>
        <li>Locate and click on the <strong>"Node Types"</strong> section.</li>
      </ul>
      <div className="image-container">
        {/* <p><strong>Open image-20240724-100640.png</strong></p> */}
        <img src={`${imageBaseUrl}image-20240724-100640.png`} alt="Node Types Section" title="Node Types Section" />
      </div>

      <h3>Click on the "+ New Node Type" Button</h3>
      <p>In the Node Types section, click the <strong>"+ New Node Type"</strong> button to start creating a new node type.</p>

      <h3>Fill in the Node Type Details</h3>
      <ul>
        <li>
          <strong>Type:</strong> Enter the node type identifier (e.g., <code>custom_node</code>). This should be a unique identifier for the node.
        </li>
        <li>
          <strong>Display Name:</strong> Provide a user-friendly name for the node (e.g., <code>Custom Node</code>). This is the name that will be displayed to users.
        </li>
        <li>
          <strong>Group Name:</strong> Select the appropriate group for the node from the dropdown menu (e.g., <code>custom nodes</code>). This helps in organizing nodes into relevant categories.
        </li>
        <li>
          <strong>Description:</strong> Write a brief description of the node's functionality. This should provide an overview of what the node does.
          <p>
            <strong>Example:</strong> "The Custom Node allows users to execute personalized scripts for data processing and analysis. It supports various programming languages and integrates seamlessly with existing workflows."
          </p>
        </li>
        <li>
          <strong>Tags:</strong> Add relevant tags to the node. Tags help in making the node easily searchable within the Automation Hub.
          <p>
            <strong>Example:</strong> custom, script execution, data processing, workflow automation, analytics
          </p>
        </li>
      </ul>

      <h3>Define the Node Schema</h3>
      <ul>
        <li>
          <strong>JSON Schema:</strong> Define the structure of the node configuration using JSON Schema. This schema will specify the expected properties and their types.
        </li>
        <li>
          <strong>UI Schema:</strong> Customize the UI components for the node configuration. This schema defines how the node configuration will be presented to users in the interface.
        </li>
      </ul>

      <h4>Sample Schema</h4>
      <pre>
        <code>
{`{
  "id": "loginFormUI",
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "title": "Username"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 6
    }
  },
  "required": [
    "username",
    "password"
  ]
}`}
        </code>
      </pre>
      {/* <div className="image-container">
        <p><strong>Output:</strong></p>
        <img src={`${imageBaseUrl}Screenshot-2024-07-21-at-7.57.30-PM.png`} alt="Sample Schema Output" title="Sample Schema Output" />
      </div> */}

      <h3>Editing Code in the VS Code Server</h3>
      <p>Access the Code Server</p>
      <ul>
        <li>Navigate to the <strong>"Code Server"</strong> Section:</li>
        <li>Within the specific node type, locate and click on the <strong>"Code Server"</strong> section.</li>
      </ul>

      <h3>Edit the Code</h3>
      <ul>
        <li><strong>Use the Integrated VS Code Editor:</strong> Utilize the built-in VS Code editor to write and modify the code for your node.</li>
        <li><strong>Create New Files:</strong> Easily create new files for your code by using the file explorer.</li>
        <li><strong>Open Existing Files:</strong> Access and edit existing files within the project.</li>
        <li><strong>Clone Git Repositories:</strong> If necessary, clone repositories from Git to incorporate external code or collaborate with team members.</li>
      </ul>
    </div>
  );
};

export default NodeTypesPage;
