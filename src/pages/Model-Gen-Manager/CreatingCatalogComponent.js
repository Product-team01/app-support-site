import React from 'react';

const CreatingCatalogComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="catalog-creation-page">
      <h2>Creating a Catalog</h2>
      <p>
        Vue’s Model Gen Manager allows for the creation of a new catalog by uploading a combination of zip files (that contain the images) and a CSV (either as a file upload or through Google Sheets) that contains the metadata.
      </p>

      <h3>Steps to Create a Catalog</h3>
      <p>To create a new catalog, navigate to Automation Hub → Model Gen Manager → Catalogs.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS1.png`} alt="Navigate to Catalogs" title="Navigate to Catalogs" />
        
      </div>
      <p>Click on the ‘New Catalog’ button.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS2.png`} alt="Navigate to Catalogs" title="Navigate to Catalogs" />
        
      </div>
      <ul>
        <li>Choose the appropriate Catalog Segment (e.g., Apparel).</li>
        <li>Select the upload method (Bulk Upload).</li>
        <li>You can specify instructions for the catalog’s first feed.</li>
        <li>
          Upload the zip file containing the product images and the CSV file containing the metadata & styling information of those products. To download a sample zip file, click on the ‘Download Sample’ button. To view the format of the zip file that can be uploaded, click on ‘View Format’.
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Uploading the zip file & CSV is mandatory to proceed to the next step. Make sure both the zip file and CSV file have the same Product ID or SKU values to map the corresponding product with its metadata & styling information.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS3.png`} alt="Upload Files and Configure" title="Upload Files and Configure" />
      </div>
      <ul>
  <li>Choose the Primary Key for the Catalog Fields. The Primary Key represents unique values that can help identify each product in your catalog. Typically, Primary Keys are fields like Product ID or SKU.</li>
  <li>After selecting the Primary Key, proceed with defining the schema of the catalog by mapping the fields. For more details, scroll to the section on defining the schema below.</li>
  <li>Click on the remove icon in the actions column to exclude any field from syncing.</li>
</ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS4.png`} alt="Map Fields and Configure Schema" title="Map Fields and Configure Schema" />
      </div>

      <p>
        Click on 'Upload' after mapping the fields.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS5.png`} alt="Upload Files" title="Upload Files" />
      </div>

      <p>
        Your catalog will begin to process, and data will be available once sync is complete. The duration of sync varies depending on the size of the catalog data.
      </p>

      <h3>Notes on Defining the Schema</h3>
      <p>
        Every catalog has a schema that needs to be defined so that the data is stored correctly for retrieval and usage. Below are the options available in defining the schema:
      </p>
      <ul>
        <li>
          <strong>Attribute:</strong> Select the attribute which best describes the data in each field. Mandatory attributes to be selected are identifier (Primary Key), Gender, and Category.
        </li>
        <li>
          <strong>Field Type:</strong> The data type of the data within each field. (Note: For ‘Collections,’ select ‘Array of Strings’ as the data type.)
        </li>
        <li>
          <strong>Validation:</strong> Specifies how the system should handle Catalog Sync if there’s an error with the data provided, such as field type mismatch, missing data, corrupted data, etc. (Note: All issues identified during sync are made available for download once the sync is complete.) The following validation options are available:
          <ul>
            <li><strong>Skip row & Sync:</strong> If one field has a data issue, skip the entire row (product) and sync the remaining data (products). The product with the issue won’t be ingested as part of the catalog. The error has to be fixed and re-uploaded.</li>
            <li><strong>Delete Cell Data & Sync:</strong> Ignore the data field with the issue and sync the remaining fields for that same product data. The product will be ingested as part of the catalog and show up as a warning. The issue can be edited in the product.</li>
          </ul>
        </li>
        <li>
          <strong>Index:</strong> Indexes the field in the Vue system to enable fast retrieval of data.
        </li>
        <li>
          <strong>Facet:</strong> Identifies and stores the unique values of data within the field, which will be used in filtering & sort operations. Enable Facet for all the fields that need to be sorted and used in filtering operations (e.g., Gender, Category, Collections).
        </li>
        <li>
          <strong>Search:</strong> Enables text search for the field. Enable Search for the fields that need to be searchable.
        </li>
      </ul>

      <h3>Some Notes and General Practices</h3>
      <p>
        Enable ‘Index’ for all essential fields such as Gender, Category, Pair Products, Model Name, Instructions, Collection, Footwear, Pose IDs.
      </p>
      <p>
        If you want to perform Search, Filtering, and Sort operations on any fields, enable ‘Search’ and ‘Facet’ operations respectively for those fields.
      </p>

      <h3>Some Common Fields and Attribute Mapping</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold', verticalAlign: 'top' }}>Fields</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold', verticalAlign: 'top' }}>Attributes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Product ID</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Identifier (Mandatory)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Gender</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Gender (Mandatory)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Category</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Category (Mandatory)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Secondary product 1</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Pair Product</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Secondary product 2</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Pair Product</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Model</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Model Name</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Product Instructions</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Instructions</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Collection</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Collection</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Footwear</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Footwear</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Front Pose</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Pose ID</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Back Pose</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Pose ID</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreatingCatalogComponent;
