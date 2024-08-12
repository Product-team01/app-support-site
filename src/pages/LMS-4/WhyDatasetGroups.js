import React from 'react';
// import './datasetGroups.css';

const WhyDatasetGroupsComponent = () => {
  return (
    <div className="dataset-groups-section">
      <h3>Dataset Groups</h3>
      <p>
        Dataset groups serve various purposes:
      </p>

      <h4>Logical Organization</h4>
      <p>
        Providing a logical structure for organizing datasets based on their relationships and domains.
      </p>
      <p>
        Allowing users to navigate and discover datasets more efficiently, especially in environments with large and diverse datasets.
      </p>

      <h4>Data & Metadata Management</h4>
      <p>
        Facilitating the management of datasets by grouping them together based on common characteristics.
      </p>
      <p>
        Enhancing the metadata of a group of datasets that share similar properties.
      </p>

      <h4>Relationships between Datasets</h4>
      <p>
        Allowing users to understand how multiple datasets are related to each other in a group.
      </p>
      <p>
        Serving as documentation or a communication tool for the schema and relationships between datasets for a group.
      </p>
      <p>
        Can be useful in identifying data requirements for any workflows that use the dataset/group downstream.
      </p>

      <h4>Permissions</h4>
      <p>
        Simplifying tasks such as access control, permissions management, and metadata management for the datasets within the group.
      </p>

      <h4>Data Analysis and Exploration</h4>
      <p>
        Allowing users to explore datasets within the group to identify patterns and correlations & share insights.
      </p>
      <p>
        Helping stakeholders visualize, communicate, and solve problems effectively.
      </p>

      <h4>Data Governance</h4>
      <p>
        Enforcing policies, standards, and regulations across datasets.
      </p>
      <p>
        Applying consistent governance controls, such as data quality checks, privacy rules, and compliance requirements to datasets within the group.
      </p>

      <h4>Collaboration and Sharing</h4>
      <p>
        Providing a shared environment for accessing and working with datasets.
      </p>
    </div>
  );
};

export default WhyDatasetGroupsComponent;
