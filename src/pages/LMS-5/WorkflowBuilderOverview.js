import React from 'react';
import './howToRegisterDocumentType.css';

const WorkflowBuilderOverview = () => {
  return (
    <div className="module-overview">
      <h3>Introduction</h3>
      <p>
        The Workflow Builder on the Vue.ai platform is your comprehensive solution for performing various analytics, transformations, and operations on your business data, and automating these processes seamlessly. Whether you need to create a straightforward SQL workflow using transform nodes or develop an intricate workflow with custom code nodes, the Workflow Builder provides the flexibility and power to address your unique requirements.
      </p>

      <h3>Overview</h3>
      <p>
        In this module, you will learn how to leverage the Workflow Builder to enhance your data operations and automation capabilities. We will guide you through the essentials of getting started with workflows, utilizing transform nodes, creating custom nodes, building code nodes, and constructing simple workflows. Additionally, you will learn how to automate these workflows and integrate them into your custom Python existing scripts.
      </p>

      <h3>Learning Objectives</h3>
      <ul>
        <li>Understand the fundamentals of the Workflow Builder on the Vue.ai platform.</li>
        <li>Create and manage workflows using transform nodes.</li>
        <li>Develop and implement custom nodes for specialized tasks.</li>
        <li>Build and deploy code nodes to extend workflow functionalities.</li>
        <li>Construct simple, automated workflows and integrate them into your scripts.</li>
      </ul>

      <h3>Target Audience</h3>
      <p>This module is designed for:</p>
      <ul>
        <li>Data analysts and data scientists looking to streamline their data workflows.</li>
        <li>Developers seeking to automate data operations within their applications.</li>
        <li>Business professionals interested in enhancing their data processing capabilities.</li>
      </ul>

      <h3>Prerequisites</h3>
      <ul>
        <li>Basic knowledge of SQL and data transformation concepts.</li>
        <li>Familiarity with scripting and programming languages (e.g., Python).</li>
        <li>An understanding of your business data and analytics requirements.</li>
      </ul>
    </div>
  );
};

export default WorkflowBuilderOverview;
