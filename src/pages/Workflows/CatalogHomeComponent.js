import React from 'react';
import './howToRegisterDocumentType.css';

const CatalogHomeComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="catalog-home-page">
      <h2>Exploring the Catalog</h2>
      <p>
        Once the catalog is ‘Sync Complete’, the data has now been processed and the catalog is ready for exploring.
      </p>
      <p>
        To begin, from the listing page, click on the name of the catalog. You will be led to the Catalog Home page which has the following sections:
      </p>

      <h3>Overview</h3>
      <p>The Overview section consists of two sub-sections:</p>
      <ul>
        <li>
          <strong>Last Index Time Stamp:</strong> Gives you sync details about the latest feed.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS6.png`} alt="Last Index Time Stamp" title="Last Index Time Stamp" />
          </div>
        </li>
        <li>
          <strong>Catalog Metrics:</strong> Shows the latest metrics of the catalog across all the feeds.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS7.png`} alt="Catalog Metrics" title="Catalog Metrics" />
          </div>
        </li>
      </ul>

      <h3>Feeds</h3>
      <p>
        Feeds are sets of data that are uploaded to a catalog at one point in time. Multiple feeds make up a catalog. The feeds section enables the user to:
      </p>
      <ul>
        <li>Access all the data within a feed by simply clicking on its name.</li>
        <li>Download the errors that occurred during sync.</li>
        <div className="image-container">
          <img src={`${imageBaseUrl}LMS8.png`} alt="Feed Errors" title="Feed Errors" />
        </div>
        <li>
          Create a new feed. [Note: While creating a new feed, your CSV file's column headers need to match the catalog's column headers (fields) exactly. Click on ‘View Catalog Mapping’ button to view the catalog’s fields and attributes which were configured during catalog creation.]
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS7a.png`} alt="View Catalog Mapping" title="View Catalog Mapping" />
          </div>
        </li>
        <li>Delete, archive/unarchive a feed under ‘Actions’ column in the feed listing table.</li>
        <li>‘Refresh’ to fetch the latest data in the table.</li>
        <li>Use Quick filters to access Processed, Uploaded, and Archived feeds.</li>
      </ul>
      <p>
        <strong>Note:</strong> When the uploaded products have errors, they will not be ingested into the system; they are marked as errors with reasons. The products with errors' information can be downloaded as a CSV in the feed marked as ‘Sync with Errors’. The errors have to be fixed and re-uploaded in a new feed.
      </p>

      <h3>Exports</h3>
      <p>
        Exports contain details about all the downloads triggered within the Catalog by all users.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS10.png`} alt="Exports" title="Exports" />
      </div>
      <p>
        <strong>Note:</strong> Export files are retained for 30 days maximum from the date when export was triggered.
      </p>
    </div>
  );
};

export default CatalogHomeComponent;
