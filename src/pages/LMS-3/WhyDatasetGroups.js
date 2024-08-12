import React from 'react';
// import './datasetGroups.css';

const WhyDatasetGroupsComponent = () => {
  return (
    <div className="dataset-groups-section">
      <h3>Dataset Groups</h3>
      <p>Dataset groups serve various purposes:</p>

      <h4>Logical Organization</h4>
      <ul>
        <li>Providing a logical structure for organizing datasets based on their relationships and domains.</li>
        <li>Allowing users to navigate and discover datasets more efficiently, especially in environments with large and diverse datasets.</li>
      </ul>

      <h4>Data & Metadata Management</h4>
      <ul>
        <li>Facilitating the management of datasets by grouping them together based on common characteristics.</li>
        <li>Enhancing the metadata of a group of datasets that share similar properties.</li>
      </ul>

      <h4>Relationships between Datasets</h4>
      <ul>
        <li>Allowing users to understand how multiple datasets are related to each other in a group.</li>
        <li>Serving as documentation or a communication tool for the schema and relationships between datasets for a group.</li>
        <li>Can be useful in identifying data requirements for any workflows that use the dataset/group downstream.</li>
      </ul>

      <h4>Permissions</h4>
      <ul>
        <li>Simplifying tasks such as access control, permissions management, and metadata management for the datasets within the group.</li>
      </ul>

      <h4>Data Analysis and Exploration</h4>
      <ul>
        <li>Allowing users to explore datasets within the group to identify patterns and correlations & share insights.</li>
        <li>Helping stakeholders visualize, communicate, and solve problems effectively.</li>
      </ul>

      <h4>Data Governance</h4>
      <ul>
        <li>Enforcing policies, standards, and regulations across datasets.</li>
        <li>Applying consistent governance controls, such as data quality checks, privacy rules, and compliance requirements to datasets within the group.</li>
      </ul>

      <h4>Collaboration and Sharing</h4>
      <ul>
        <li>Providing a shared environment for accessing and working with datasets.</li>
      </ul>
    </div>
  );
};

export default WhyDatasetGroupsComponent;
