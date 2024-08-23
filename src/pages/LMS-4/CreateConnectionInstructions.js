import React from 'react';
import './howToRegisterDocumentType.css';

const CreateConnectionInstructions = () => {
  return (
    <div className="module-overview">
      
      
      <h2>Navigation</h2>
      <p>From the home page of Enterprise AI Orchestration Platform | Vue.ai Platform, navigate to Data Hub → Connection Manager → Connections. This page is a similar listing page as we’ve seen with Sources & Destinations. Here is where we manage all our existing Connections created.</p>

      <h2>Create a New Connection</h2>
      <p>Let’s create a Connection to bring data from our Source to the Platform (Since Vue Dataset Destination creates a Dataset in Platform), click on Create New Connection.</p>
      <p>Now this Form is going to be slightly different. Let’s name our connection & select our Source & Destination by their Names. This would generate a Connection Configuration Form that relates to:</p>
      <ul>
        <li>Data Sync Frequency: How often do you want to read from the Source & write to the Destination?</li>
        <li>Schemas: What all Tables do you want to read & write to the Destination along with other configuration possibilities like Full Refresh, Incremental etc.</li>
      </ul>

      <h3>Sync Frequency</h3>
      <ul>
        <li><strong>Manual:</strong> The connection needs to be triggered manually by the user to read from source & write to destination.</li>
        <li><strong>Scheduled:</strong> It involves giving a CRON expression as input, & the connection is scheduled as per the CRON given.</li>
      </ul>

      <h3>Schema</h3>
      <ul>
        <li><strong>Source Sync Mode:</strong> Sync Mode refers to how the data is brought into the destination.</li>
        <ul>
          <li><strong>Full Refresh:</strong> Wipes out the existing data in the Destination & writes data from Source.</li>
          <li><strong>Incremental:</strong> Appends data to existing data by making use of a Cursor Field (some sort of a Flag, in simple terms) to append only required data but it is not mandatory, if done without Cursor Field all data from Source is brought to Destination without wiping the Destination.</li>
        </ul>
        <li><strong>Cursor Field:</strong> A cursor field is the identifier column that is needed for Sync Mode: Incremental, it is usually the Primary Key</li>
      </ul>

      <p>Once we put in the required Connection Configuration, let’s hit Create Connection.</p>

      <h3>Run the Connection</h3>
      <p>Let us now go back to the Connection Listing Page and find our Connection by Name. Under the Actions, hit Run Connection to initiate the connection run.</p>
      <p>Click on the Info button to monitor the Run, this screen shows the history of runs for each connection.</p>

      <h3>View the Data</h3>
      <p>Once the connection run is successful, you can get an overview of what data was brought in! Since the Destination used was Vue Dataset, the Dataset would be created and can be viewed in Data Hub → Document Manager → Datasets.</p>
    </div>
  );
};

export default CreateConnectionInstructions;
