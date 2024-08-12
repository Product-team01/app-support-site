import React from 'react';

const MoreAboutDocumentTypeComponent = () => {
  return (
    <div>
      <h2>More About Document Type</h2>
      <div>
        <b>1. Why do we need to register a Document Type?</b>
        <p>A Document Type registration is a one-time process that is required to create a model that is then used for extraction from new documents of that registered type.</p>
      </div>
      <div>
        <b>2. What happens when we register a new Document Type?</b>
        <p>When a new Document Type is registered, a new AI workflow. This graph is then deployed and is now ready for use. All the data that is provided during the time of registration (the taxonomy, the spatial detail of where the data is available etc.) is embedded in the model which is then used for the subsequent extraction of documents.</p>
      </div>
    </div>
  );
};

export default MoreAboutDocumentTypeComponent;
