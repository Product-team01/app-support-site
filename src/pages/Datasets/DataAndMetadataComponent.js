import React from 'react';
import './multiPageTableOperations.css';

const DataAndMetadataComponent = () => {
  return (
    <div className="data-and-metadata-component">
      
      
      <h3>Data</h3>
      <ul>
        <li>Data refers to the actual content or information that is being stored, processed, or analyzed. It represents the raw facts, observations, measurements, or values that are collected or generated.</li>
        <li>Data can exist in various forms, such as text, numbers, images, audio, or video.</li>
        <li>For example, in a dataset of customer records, the data would include specific information about each customer, such as their name, age, address, purchase history, and so on. These individual pieces of information constitute the data.</li>
      </ul>

      <h3>Metadata</h3>
      <ul>
        <li>Metadata refers to the information that describes or provides context about the data. It offers additional information about the data itself, facilitating its understanding, management, and use.</li>
        <li>Metadata does not contain the actual content of the data but rather provides information about the data.</li>
      </ul>

      <h3>Types of Metadata</h3>
      <ul>
        <li><strong>Descriptive:</strong> Describes the content and characteristics of the data itself (e.g., data title, description, tags, keywords, or abstracts that provide a summary or overview of the data).</li>
        <li><strong>Structural:</strong> Defines how the data is organized, such as the schema, tables, fields, or columns used in a database.</li>
        <li><strong>Administrative:</strong> Describes ownership, creation date, modification history, access controls, etc.</li>
        <li><strong>Technical:</strong> Provides details about the technical aspects of the data, such as the file format, data size, encoding, data source, data quality, or data lineage.</li>
      </ul>
    </div>
  );
};

export default DataAndMetadataComponent;
