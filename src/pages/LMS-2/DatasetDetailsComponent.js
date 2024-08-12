import React from 'react';
import './howToRegisterDocumentType.css';

const DatasetDetailsComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-details">
      <h3>Dataset Name</h3>
      <p>A meaningful way to identify a dataset. This is the name that is indexed across the system for search, and for use in dataset groups and workflows.</p>
      <div>
        <img className="image-container" src={`${imageBaseUrl}name.png`} alt="Dataset Name" title="Dataset Name" />
      </div>

      <h3>Description</h3>
      <p>A more detailed description of the dataset. You can either write out the description or auto-generate one. The auto-generated description uses LLMs that take as inputs the name of the dataset and the schema to come up with a meaningful description.</p>

      <h3>Size Details</h3>
      <p>Displays the size of the dataset in memory.</p>

      <h3>Data Type Distribution</h3>
      <p>This section provides a quick overview of the distribution of the data types in the dataset. Typical datatypes include integer, float, datetime, string etc. Having this in the overview gives quick insight into the type of data that is present in the dataset.</p>
      <div>
        <img className="image-container" src={`${imageBaseUrl}distr.png`} alt="Data Type Distribution" title="Data Type Distribution" />
      </div>

      <h3>Tags</h3>
      <p>The Vue Platform allows for tagging of datasets. Use tags to organize your datasets and for search and retrieval at a later point in time.</p>
      <p>To add a tag, simply type it and hit the enter / return key.</p>
      <p>To delete a tag, hit the x that is next to the tag.</p>
      <div>
        <img className="image-container" src={`${imageBaseUrl}tags.png`} alt="Tags" title="Tags" />
      </div>
    </div>
  );
};

export default DatasetDetailsComponent;
