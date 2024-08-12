import React from 'react';

const IntroductionToDocumentTypeComponent = () => {
  return (
    <div>
      <h3>What is a Document Type</h3>
      <p>
        A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats:
      </p>
      <ul>
        <li>Structured Documents</li>
        <li>Semi-structured Documents</li>
        <li>Unstructured Documents</li>
      </ul>

      <h4>Why do we need to register a Document Type?</h4>
      <p>
        A Document Type registration is a one-time process that is required to create a model that is then used for extraction from new documents of that registered type.
      </p>

      <h4>What happens when we register a new Document Type</h4>
      <p>
        When a new Document Type is registered, a new AI workflow is created as a graph. This graph is then deployed and is now ready for use in an inference mode. This essentially means that all the data that is provided during the time of registration (the taxonomy, the spatial detail of where the data is available etc.) is embedded in the model which is then used for the subsequent extraction of documents.
      </p>
    </div>
  );
};

export default IntroductionToDocumentTypeComponent;
