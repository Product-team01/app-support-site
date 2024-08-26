import React from 'react';
import './howToRegisterDocumentType.css';

const TheDatasetLandingPageComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-landing-page">
      <h3>ER Diagrams</h3>
      <p>
        ER diagrams, or Entity-Relationship diagrams, are graphical representations used in database design to model the structure of a database system. They visually depict the following:
      </p>
      <ul>
        <li>Entities (in this case, datasets)</li>
        <li>Attributes (properties / schema or characteristics of these datasets)</li>
        <li>Relationships (connections or associations) between datasets within a database with any defined cardinality as explained above.</li>
      </ul>
      <p>
        ER diagrams serve as a blueprint for understanding the datasets in a group. They provide a clear and intuitive representation of the data model, enabling stakeholders to understand the data, identify requirements, and make informed decisions.
      </p>
      <p>
        Vue allows for the creation of ER diagrams within a Dataset Group. Below is a short video on how to create one.
      </p>
    </div>
  );
};

export default TheDatasetLandingPageComponent;
