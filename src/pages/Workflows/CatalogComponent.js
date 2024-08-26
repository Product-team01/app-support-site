import React from 'react';
import './howToRegisterDocumentType.css';

const CatalogComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="catalog-page">
      <h3>Catalogs</h3>
      <p>
        A catalog is an entity of the Model Gen manager that contains all the assets and their associated metadata that share a common set of metadata. A catalog consists of multiple feeds, each of which is a unique set of assets that are uploaded or created at one time.
      </p>

      <h4>Exports</h4>
      <p>
        Exports contain details about all the downloads triggered within the Catalog by all users.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS10.png`} alt="Exports Image" title="Exports Image" />
      </div>
      <p>
        Note: Export files are retained for 30 days maximum from the date when the export was triggered.
      </p>

      <h4>Exploring the Feed</h4>
      <ul>
  <li>You can update the Feed Name by clicking on the edit icon available in Feed Name.</li>
  <li>You can enable the ‘Show Errors’ toggle. If there are any products that have mandatory fields missing such as Gender and Category or if products' image resolutions are not correct, they will be shown in the result.</li>
  <li>Using the pagination option at the bottom, you can select how many products could be shown on the page and navigate to the next page of products on the same screen.</li>
  <li>You can bulk select and export products, add products to collections, and delete products.</li>
</ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS11.png`} alt="Feed Options Image" title="Feed Options Image" />
      </div>

      <h4>Filters</h4>
      <p>
        Filter through data using the Facet-enabled Metadata (e.g., Gender, Category).
      </p>

      <h4>Search</h4>
      <p>
        Search to identify products quickly within the feed based on the Search-enabled metadata (e.g., Product ID).
      </p>

      <h4>Sort</h4>
      <p>
        Sort products by ascending or descending order based on the Faceted metadata.
      </p>

      <h4>View Switcher: Grid & List View</h4>
      <p>
        Use this toggle to switch between grid and list views and access Data.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS12.png`} alt="View Switcher Image" title="View Switcher Image" />
      </div>

      <h4>Export</h4>
      <p>
        Configure and trigger export for products in the feed. Choose which metadata to export as a CSV.
      </p>

      <h4>Product Card</h4>
      <ul>
        <li>Product ID/SKU (Primary key) will be shown for all the products in the card.</li>
        <li>Clicking on the data or edit within the context menu will open the metadata panel.</li>
        <li>In the panel, update metadata and save.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS13.png`} alt="Product Card Image" title="Product Card Image" />
      </div>

      <h4>Single View</h4>
      <p>
        Clicking on ‘Single View’ in the context menu will navigate you to a more detailed view of the product. This enables you to focus on analyzing and styling one product at a time. You can edit images, metadata, and styling information and save.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS14.png`} alt="Single View Image" title="Single View Image" />
      </div>

      <h4>Delete</h4>
      <p>
        Clicking on ‘Delete’ in the context menu will delete the product permanently.
      </p>

      <h4>Submit Feed</h4>
      <p>
        On clicking ‘Submit Feed,’ the feed is submitted to the Vue.ai team for processing.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS15.png`} alt="Submit Feed Image" title="Submit Feed Image" />
      </div>
      <p>
        Note: Once a feed is submitted, it cannot be undone. Products in a feed cannot be edited after submission.
      </p>
    </div>
  );
};

export default CatalogComponent;
