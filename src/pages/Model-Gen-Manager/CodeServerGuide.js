import React from 'react';
import './howToRegisterDocumentType.css';

const CodeServerGuide = () => {
  return (
    <div className="code-server-guide">
      <h3>Using the Code Server for Custom Node Development</h3>
      <p>
        To effectively use the Code Server for developing your custom nodes, it is essential to understand the preset file structure and its components. Before diving into the specifics, please ensure you are familiar with the basics of using Visual Studio Code (VS Code). If you are new to VS Code, refer to the <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer">VS Code Documentation</a> and the <a href="https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ" target="_blank" rel="noopener noreferrer">Official VS Code YouTube Tutorial</a> for guidance.
      </p>

      <h3>Preset File Structure</h3>
      <p>Within the Code Server, you will find the following preset file structure:</p>

      <pre>
        <code>
{`codenode/
│
├── main.py
├── requirements.txt
├── README
└── input_schema.json
.gitignore`}
        </code>
      </pre>

      <h3>Inside the <code>codenode</code> Folder</h3>
      <ul>
        <li>
          <strong>main.py:</strong> This is the primary script file where your Python code will be written. Use this file to define the logic and operations of your custom node.
        </li>
        <li>
          <strong>requirements.txt:</strong> List all the Python libraries and dependencies that your code node requires in this file. When the environment is set up, these libraries will be installed automatically.
        </li>
        <li>
          <strong>README:</strong> This file provides detailed instructions on how to set up and use the code node. Include step-by-step setup guides, usage examples, and any other pertinent information to help users get started quickly.
        </li>
        <li>
          <strong>input_schema.json:</strong> Define the schema for the form inputs required by your node in this JSON file. This schema helps in generating the appropriate UI components for user inputs.
        </li>
      </ul>

      <h3>Outside the <code>codenode</code> Folder</h3>
      <ul>
        <li>
          <strong>.gitignore:</strong> This file specifies which files and directories should be ignored by Git version control. Commonly used to exclude temporary files, build artifacts, and other non-essential files from being committed to the repository.
        </li>
      </ul>
    </div>
  );
};

export default CodeServerGuide;
