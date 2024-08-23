import React from 'react';

const SourceDescription = () => {
  return (
    <div className="source-description">
      <h2>What is a Source?</h2>
      <p>
        A Source, as the name implies, is a source from which data can be read. Typically, a source contains data that needs to be:
      </p>
      <ul>
        <li>Brought into the Vue platform</li>
        <li>Read from to transfer to some other data destination</li>
        <li>Read for use in an operation</li>
      </ul>
    </div>
  );
};

export default SourceDescription;
