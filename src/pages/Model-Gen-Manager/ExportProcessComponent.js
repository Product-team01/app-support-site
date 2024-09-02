import React from 'react';
import './howToRegisterDocumentType.css'; // Import the CSS file for styling

const ExportProcessComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="export-process-page">
      <h2>Exporting Metadata and Styling Information</h2>
      <p>
        You can export the metadata and styling information of products as a CSV in all the views - Grid view, List view, and Single View in the feed.
      </p>
      <p>To start the export process:</p>
      <ul>
        <li>Click on <strong>Export</strong> → <strong>CSV</strong>.</li>
        <li>In the 'Details’ section, input the file name.</li>
        <li>Select the number of products to be exported.</li>
        <ul>
          <li>In Single view, it will be only the product that is available in the single view.</li>
        </ul>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS25.png`} alt="Export Details Section" title="Export Details Section" />
      </div>

      <h3>Configuration Section</h3>
      <p>
        In the ‘Configuration’ section, select the fields to be exported under ‘Metadata & Styling Info’. By default, all fields will be selected.
      </p>
      <p>
        Click on <strong>Export</strong>. The export process starts, and clicking the <strong>Go to Exports</strong> button at the bottom takes you to the Export listing screen where you could see the exported file in ‘Running’ status. Once it is in ‘Completed’ status, it will be available to download. Clicking the <strong>Download</strong> icon downloads the CSV file locally to your device.
      </p>

      <p>
        <strong>Note:</strong> In the grid view/list view, you can also select particular products and export them. In this case, those products will already be selected in the Export option.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS26.png`} alt="Selecting Products for Export" title="Selecting Products for Export" />
      </div>

      <h3>Exporting Images</h3>
      <p>
        Under ‘Images’, select <strong>'output_images'</strong> (Generated Images).
      </p>

      <div className="image-container">
        <img src={`${imageBaseUrl}LMS29.png`} alt="Exporting Images" title="Exporting Images" />
      </div>
      <strong>Note:</strong> Images can be exported only after feed submission

      <p>
        Click on <strong>Export</strong>. The export process starts, and clicking the <strong>Go to Exports</strong> button at the bottom takes you to the Export listing screen where you could see the exported file in ‘Running’ status. Once it is in ‘Completed’ status, it will be available to download. Clicking the <strong>Download</strong> icon downloads the Zip file locally to your device containing the product images and metadata & styling (CSV).
      </p>
      <p>
        <strong>Note:</strong> It will take up to 30 mins for the latest changes to get updated for exporting them. If the latest changes expected are not seen in the exported file, wait for 30 minutes and export again. 
      </p>
    </div>
  );
};

export default ExportProcessComponent;
