import React from 'react';
import './howToRegisterDocumentType.css';


const CardinalityComponent = () => {
  return (
    <div className="cardinality-section">
      <h3>Cardinality</h3>
      <p>
        Cardinality defines how many instances of one dataset are related to instances of another dataset, through a particular relationship. It refers to the numerical constraints that define the relationship between the two datasets.
      </p>
      <p>There are three types of cardinality:</p>
      <ul>
        <li>
          <strong>One-to-One (1:1):</strong> Each instance of one entity is associated with exactly one instance of another entity, and vice versa.
        </li>
        <li>
          <strong>One-to-Many (1:N):</strong> Each instance of one entity can be associated with multiple instances of another entity, but each instance of the second entity can be associated with only one instance of the first entity. The reverse relation (N:1) can also exist.
        </li>
        <li>
          <strong>Many-to-Many (N:N or N:M):</strong> Multiple instances of one entity can be associated with multiple instances of another entity. This often requires the use of an intermediary table, known as a junction or associative table, to represent the relationship.
        </li>
      </ul>
    </div>
  );
};

export default CardinalityComponent;
