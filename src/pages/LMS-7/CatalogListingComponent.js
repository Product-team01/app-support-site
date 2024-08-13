import React from 'react';
import './howToRegisterDocumentType.css'; // Import the CSS file for styling

const CatalogListingComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="catalog-listing-page">
      <h2>Catalog Listing Screen</h2>
      <p>
        The core experience of exploring the catalog is the Listing screen that contains all the data about the products in the feed.
      </p>

      <h3>Common Operations that can be Performed</h3>
      <ul>
        <li>Update the Feed Name by clicking on the edit icon available in Feed Name.</li>
        <li>Enable ‘Show Errors’ toggle. If there are any products that have mandatory fields missing such as Gender and Category or if the products’ image resolutions are incorrect, they will be shown in the result.</li>
        <li>Paginate to view more products: Use the pagination option at the bottom to select how many products could be shown on the page and navigate to the next page of products on the same screen.</li>
        <li>Bulk select and export products.</li>
        <li>Add products to collections.</li>
        <li>Delete products.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS11.png`} alt="Common Operations" title="Common Operations" />
      </div>

      <h3>Sifting through Products</h3>
      <ul>
        <li><strong>Filters:</strong> Filter through data using the Facet-enabled Metadata (e.g., Gender, Category).</li>
        <li><strong>Search:</strong> Search to identify products quickly within the feed based on the Search-enabled metadata (e.g., Product ID).</li>
        <li><strong>Sort:</strong> Sort products by ascending or descending order based on the Faceted metadata.</li>
        <li><strong>View Switcher:</strong> Use this toggle to switch between grid & list views and access data.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS12.png`} alt="Sifting through Products" title="Sifting through Products" />
      </div>

      <h3>Exporting a Catalog</h3>
      <p>Configure and trigger export for products in the feed. Choose which metadata to export as a CSV.</p>

      <h3>The Product Card</h3>
      <p>The Product Card is the way to view all the content (images and metadata) about a product. A Product Card consists of:</p>
      <ul>
        <li><strong>Primary Image:</strong> The image of the front view of the product.</li>
        <li><strong>Product ID/SKU (Primary key):</strong> This will be shown for all the products in the card.</li>
        <li>
          <strong>The Context Menu:</strong> The context menu provides access to further actions.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS13.png`} alt="The Product Card" title="The Product Card" />
          </div>
          <ul>
            <li><strong>Edit:</strong> Edit the metadata.</li>
            <li><strong>Single View:</strong> Navigate to a detailed view of the product enabling you to focus on analyzing & styling one product at a time. You can edit images, metadata, and styling information and save.
              <div className="image-container">
                <img src={`${imageBaseUrl}LMS14.png`} alt="Single View" title="Single View" />
              </div>
            </li>
            <li><strong>Delete:</strong> Delete the product from the feed.</li>
          </ul>
        </li>
      </ul>

      <h3>Submitting the Feed</h3>
      <p>
        On clicking ‘Submit Feed’, the feed is submitted to the Vue team for processing.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS15.png`} alt="Submitting the Feed" title="Submitting the Feed" />
      </div>
      <p>
        <strong>Note:</strong> Once a feed is submitted, it cannot be undone. Products in a feed cannot be edited after submission.
      </p>
    </div>
  );
};

export default CatalogListingComponent;
