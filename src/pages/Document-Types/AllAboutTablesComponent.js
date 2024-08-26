import React from 'react';


const AllAboutTablesComponent = () => {
  return (
    <div className="all-about-tables-container">
      <h1>All About Tables</h1>
      <p>
        Tables are a common data structure in many documents, such as invoices, bank statements, and reports. 
        They organize data in rows and columns, making it easier to read and extract specific information.
      </p>
      <p>
        In Vue’s IDP, tables are processed and extracted differently compared to other document types. 
        The system uses advanced algorithms to detect the table structure, including headers, rows, and columns. 
        Once detected, each cell’s data is extracted and classified based on the table's configuration.
      </p>
      <h2>Steps to Process Tables:</h2>
      <ol>
        <li>Identify the table structure in the document.</li>
        <li>Detect the headers, rows, and columns.</li>
        <li>Extract data from each cell.</li>
        <li>Classify and store the extracted data based on the table's configuration.</li>
      </ol>
      <h2>Best Practices:</h2>
      <ul>
        <li>Ensure the document quality is high for better table detection.</li>
        <li>Clearly define the headers to help the system identify columns correctly.</li>
        <li>Avoid merging cells that could disrupt the table structure.</li>
      </ul>
      <p>
        By following these best practices and using Vue’s IDP, you can efficiently extract and process data from tables in your documents.
      </p>
    </div>
  );
};

export default AllAboutTablesComponent;
