import React from 'react';
import './howToRegisterDocumentType.css';

const ModuleOverview = () => {
  return (
    <div className="module-overview">
     

      <h3>Introduction</h3>
      <p>
        The Connector Manager is a key component of the Vue.ai data platform, serving as a central hub for integrating various data sources and destinations. This learning module provides a comprehensive overview of the Connector Manager, covering its purpose, functionality, and the steps involved in utilizing it effectively.
      </p>

      <h3>Pre-requisites:</h3>
      <ul>
        <li>Basic Knowledge about Data, Schemas and terms like append, de-duplication, etc.</li>
        <li>Basic understanding of CRON expressions.</li>
      </ul>

      <h3>What you’ll learn by the end of this module:</h3>
      <ul>
        <li>Make use of the Connection Manager to Migrate Data.</li>
        <li>Make use of the Connection Manager to Persist Data.</li>
        <li>Understand how it is helpful and efficient in comparison to traditional methods of implementing Data Migration.</li>
      </ul>
    </div>
  );
};

export default ModuleOverview;
