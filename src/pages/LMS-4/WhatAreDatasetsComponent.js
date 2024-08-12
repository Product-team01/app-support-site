import React from 'react';
import './multiPageTableOperations.css';

const WhatAreDatasetsComponent= () => {
  return (
    <div className="guide-to-multi-page-tables">
      <h3>What are Datasets</h3>
      <p>A dataset refers to a collection of (or rows of) data organized and structured in a specific way. They adhere to a predefined schema definition, that enforces their structural nature.</p>
      <p>Datasets represent a cohesive unit of information that is related to a specific purpose. They are the fundamental units in a data catalog.</p>
      <p>Datasets are typically used for:</p>
      <ul>
        <li>Transactional purposes</li>
        <li>Processing (ETL or machine learning / data science workloads)</li>
        <li>Analysis & obtaining insights for specific business problems</li>
      </ul>

      <h3>Dataset Records</h3>
      <p>A row or a record in a dataset can include:</p>
      <ul>
        <li>Unstructured text (free-form text - strings)</li>
        <li>Boolean values</li>
        <li>Numerical values (integers, floating point numbers)</li>
        <li>Enumerated set of categorical variables (which can be strings or boolean values)</li>
        <li>Structured text (JSON objects, arrays, numpy vectors and so on)</li>
        <li>References to objects stored in the cloud (such as files for images, documents, audio etc.)</li>
      </ul>
      <p>The choice of the data type is dependent on the nature of the data, requirements for usage, and the underlying storage capabilities.</p>

      <h3>Dataset Groups</h3>
      <p>Dataset groups are organizational units or logical collections that group related datasets together for providing isolation, management, analysis, and governance purposes. They provide a way to organize and manage datasets effectively within a data ecosystem.</p>
      <p>Dataset groups can be visualized as a logical isolation of a group of datasets that can pertain to specific use cases, projects, and/or security boundaries. They are analogous to folders in a file system, or schemas in a database, that can enable the hierarchical organization of datasets.</p>

      <h3>Relationships in the Context of Dataset Groups</h3>
      <p>A relationship refers to a connection, linkage or association between two or more entities, objects, or elements. In the context of dataset groups, relationships capture how different datasets that are part of a group are associated to one another.</p>
      <p>Establishing relationships between datasets within a dataset group is an important aspect of data management and analysis. These relationships help users understand how datasets are related and interconnected, enabling more comprehensive metadata management, analysis, and exploration of the ecosystem.</p>
      <p>Relationships, when captured at a dataset group level, become important and useful in facilitating better understanding of the data. For datasets that share common properties, we can thus unlock seamless tasks downstream - data processing, management, and analysis - to achieve business outcomes.</p>
    </div>
  );
};

export default WhatAreDatasetsComponent;
