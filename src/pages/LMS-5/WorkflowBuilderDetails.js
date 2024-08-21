import React from 'react';
import './howToRegisterDocumentType.css';

const WorkflowBuilderDetails = () => {
  return (
    <div className="workflow-builder-details">
      <h2>What is a Workflow Builder?</h2>
      <p>
        A workflow builder is a powerful tool that enables users to create, automate, and manage workflows seamlessly. It offers a visual interface where workflows can be designed by dragging and dropping various elements or nodes, each representing a specific task or process.
      </p>
      <h3>Key Features of a Workflow Builder:</h3>
      <ul>
        <li>
          <strong>Visual Interface:</strong> Simplifies workflow design through a graphical user interface (GUI), making it intuitive to understand and modify processes.
        </li>
        <li>
          <strong>Nodes/Elements:</strong> Represents individual tasks, actions, or steps within the workflow. These can include data input, decision points, notifications, integrations with other systems, and more.
        </li>
        <li>
          <strong>Automation:</strong> Automates repetitive tasks and processes, reducing manual effort and increasing efficiency.
        </li>
        <li>
          <strong>Integration:</strong> Connects with various systems, applications, and services to facilitate data exchange and streamline processes across different platforms.
        </li>
        <li>
          <strong>Flexibility:</strong> Offers customization options to tailor workflows to specific business needs and requirements.
        </li>
        <li>
          <strong>Collaboration:</strong> Supports team collaboration, allowing multiple users to work on the same workflow, share feedback, and make adjustments in real-time.
        </li>
        <li>
          <strong>Monitoring and Reporting:</strong> Provides tools for tracking workflow progress, identifying bottlenecks, and generating reports for analysis and optimization.
        </li>
      </ul>

      <h2>What the Workflow Builder Does on the Vue.ai Platform</h2>
      <p>
        The Workflow Builder on the Vue.ai Platform is a versatile and powerful tool that brings your automation dreams to life. With a simple drag-and-drop interface, you can create workflows tailored to your specific business needs by selecting nodes from the node pane.
      </p>
      <p>
        Imagine having a toolkit with a variety of nodes like compute nodes, connector nodes, custom nodes, dataset nodes, HITL nodes, model nodes, test code nodes, and transform nodes. These nodes enable you to perform a wide range of tasks, from IDP tasks like Auto Classifier, Blur Detection, Extraction, and Mapping to SQL operations for analytics such as select, join, filter, and more.
      </p>
      <p>
        Want to create something truly unique? With custom nodes, you can write any code you want, using the playground and code server to bring your complex ETL logic or innovative ideas to life. It’s like having a blank canvas where you can build anything you envision. Whether it's integrating with other systems, transforming data, or creating bespoke processes, custom nodes offer limitless customization and innovation.
      </p>
      <p>
        Designing workflows is as easy as making a flowchart. Just drag and drop nodes, connect them to form a flow, and voila! Once your workflow is ready, save, deploy, and run it. Plus, you can copy the workflow ID and integrate it with your scripts or pipelines using APIs.
      </p>
      <p>
        The Vue.ai Workflow Builder is your gateway to streamlined and automated business processes. It caters to a variety of business needs, whether you're focusing on data processing, analytics, machine learning, or custom code development. With this tool, enhancing your operational efficiency and productivity becomes a seamless and enjoyable process.
      </p>

      <h2>How to Navigate to the Workflow Builder</h2>
      <p>To access the Workflow Builder on the Vue.ai Platform, follow these steps:</p>
      <ol>
        <li>Login</li>
        <li>Go to Automation Hub</li>
        <li>Select Workflow Manager</li>
        <li>Choose Workflows</li>
      </ol>
    </div>
  );
};

export default WorkflowBuilderDetails;
