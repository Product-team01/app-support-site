import React from 'react';
import './howToRegisterDocumentType.css'; // Import the CSS file for styling

const CollectionsComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="collections-page">
      <h2>Using Collections for Organizing Products</h2>
      <p>
        Collections are an organizational aid that allows for grouping of products based on common characteristics. These can be logical groupings (e.g., shirts, tee shirts under top wear) or could be labels such as seasons. Collections are mainly used for applying as filters in the pair products section to easily find the suitable pairing products for the primary product in the ‘Style Product’ section.
      </p>

      <h3>Adding Products to Collections</h3>
      <ul>
  <li>You can add products to collections by specifying 'Collections' as a field in the CSV while uploading.</li>
  <li>When you select a product in the grid view/List view, in the metadata panel, you can select one or more collections that the product can be added to.</li>
</ul>
<div className="image-container">
  <img src={`${imageBaseUrl}LMS30.png`} alt="Adding Products to Collections in Grid/List View" title="Adding Products to Collections in Grid/List View" />
</div>
<ul>
  <li>In Single view, you can add the product to the collection in the metadata section. You can also add the product to a new collection by clicking on the ‘Add New Collection’ button.</li>
</ul>
<div className="image-container">
  <img src={`${imageBaseUrl}LMS32.png`} alt="Adding Products to Collections in Single View" title="Adding Products to Collections in Single View" />
</div>
<ul>
  <li>In the Grid view/List View, you can bulk select products and add them to one or more collections in the Collections option available at the top. You can also add the products to a new collection by clicking on the ‘Add New Collection’ button.</li>
</ul>
    </div>
  );
};

export default CollectionsComponent;
