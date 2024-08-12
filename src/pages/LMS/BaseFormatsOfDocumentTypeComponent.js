// BaseFormatsOfDocumentTypeComponent.js

import React from 'react';
import './BaseFormatsOfDocumentTypeComponent.css';

const BaseFormatsOfDocumentTypeComponent = () => {
  return (
    <div>
      <h2>Base Formats of Document Type</h2>
      <p>
        There are 3 base formats for document types - each of these corresponds to a base workflow (processing) that does some pre and post processing.
      </p>

      <h3>Structured Documents</h3>
      <p>
        Structured documents are those documents that have a defined format that does not vary. These typically are the most deterministic to annotate and extract since there is little to no variance in the data. Some typical examples are passports and other Identity cards.
      </p>
      <div className="image-container">
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg" alt="Structured Documents" />
      </div>

      <h3>Semi-structured Documents</h3>
      <p>
        Semi-structured documents are those documents that have a defined format for one part of the document and a non-defined / loosely defined structure for the other parts. These documents typically contain tables - which make up the structured part of the document - and other data that may or may not be in a formatted manner. A typical example of this would be a bank statement.
      </p>
      <div className="image-container">
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg" alt="Semi-structured Documents" />
      </div>

      <h3>Unstructured Documents</h3>
      <p>
        Unstructured Documents are those document where there is no strong underlying pattern of where data is present. While these will contain important information that needs to be extracted, the nature of such documents is non-regulated because of which there is no one pattern possible. Most common examples of these types are legal documents.
      </p>
      <div className="image-container">
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg" alt="Unstructured Documents" />
      </div>
    </div>
  );
};

export default BaseFormatsOfDocumentTypeComponent;
