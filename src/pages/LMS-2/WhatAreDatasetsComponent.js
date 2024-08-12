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
    </div>
  );
};

export default WhatAreDatasetsComponent;
