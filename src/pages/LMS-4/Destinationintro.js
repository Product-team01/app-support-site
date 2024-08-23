import React from 'react';

const DestinationDescription = () => {
  return (
    <div className="destination-description">
      <h2>What is a Destination?</h2>
      <p>
        A Destination is the data store to which data can be written. Typically, a destination contains data that needs to be:
      </p>
      <ul>
        <li>Stored in the Vue platform itself</li>
        <li>Stored outside the Vue platform</li>
      </ul>
    </div>
  );
};

export default DestinationDescription;
