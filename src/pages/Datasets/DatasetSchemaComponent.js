import React from 'react';
import './howToRegisterDocumentType.css';

const DatasetSchemaComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-schema">
      <h3>Schema</h3>
      <p>Schema is a basic structure or blueprint of a dataset. It enlists the columns that are part of a dataset, their datatypes and descriptions.</p>
      <div>
        <img className="image-container" src={`${imageBaseUrl}411.png`} alt="Schema Screenshot" title="Schema Screenshot" />
      </div>

      <h3>The Schema consists of the following:</h3>
      <ul>
        <li><strong>Field Name:</strong> The unique name of each column in the dataset</li>
        <li><strong>Description:</strong> A description that details the field, what it contains, how/where it can be used, etc.</li>
        <li><strong>Data Type:</strong> The type of data that the field contains. Numerical columns are of the type “integer”, Textual columns are of the type “String”, etc.</li>
        <li><strong>Tags:</strong> Freeform text tags that can be assigned to fields</li>
      </ul>

      <h3>Generating Descriptions</h3>
      <p>Vue also can automatically generate descriptions using LLMs. Just hit the Generate Schema Description button and we’re off to the races.</p>
      <div>
        <img className="image-container" src={`${imageBaseUrl}schemaautogen.png`} alt="Schema Auto Generation" title="Schema Auto Generation" />
      </div>
    </div>
  );
};

export default DatasetSchemaComponent;
