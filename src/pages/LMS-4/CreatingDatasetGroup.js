import React from 'react';
import './howToRegisterDocumentType.css';

const DatasetGroupsComponent = () => {
  return (
    <div className="dataset-groups-section">
      <h3>Dataset Groups</h3>
      <p>
        Dataset groups are organizational units or logical collections that group related datasets together for providing isolation, management, analysis, and governance purposes. They provide a way to organize and manage datasets effectively within a data ecosystem.
      </p>
      <p>
        Dataset groups can be visualized as a logical isolation of a group of datasets that can pertain to specific use cases, projects, and/or security boundaries. They are analogous to folders in a file system, or schemas in a database, that can enable the hierarchical organization of datasets.
      </p>

      <h4>Relationships in the context of dataset groups</h4>
      <p>
        A relationship refers to a connection, linkage or association between two or more entities, objects, or elements. In the context of dataset groups, relationships capture how different datasets that are part of a group are associated to one another.
      </p>
      <p>
        Establishing relationships between datasets within a dataset group is an important aspect of data management and analysis. These relationships help users understand how datasets are related and interconnected, enabling more comprehensive metadata management, analysis and exploration of the ecosystem.
      </p>
      <p>
        Relationships, when captured at a dataset group level, become important and useful in facilitating a better understanding of the data. For datasets that share common properties, we can thus unlock seamless tasks downstream - data processing, management and analysis - to achieve business outcomes.
      </p>
    </div>
  );
};

export default DatasetGroupsComponent;
