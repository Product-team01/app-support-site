import React from 'react';
import './howToRegisterDocumentType.css'; // Import the CSS file for styling

const AddProductComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="add-product-page">
      <h2>Adding New Products to a Feed</h2>
      <p>
         To add a new product to the feed, click the ‘Add Product’ button.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS16.png`} alt="Add Product Button" title="Add Product Button" />
      </div>

      <h3>Uploading Images</h3>
      <p>
        You can upload images for the product by dragging and dropping multiple images or clicking on the ‘Browse’ button to upload a single image in a slot.
      </p>
      <ul>
        <li>Uploading a front image is mandatory for the product.</li>
        <li>After uploading, you can re-arrange images into the respective slots by dragging them across.</li>
      </ul>
      <p>Click on ‘Next Step’ to add metadata.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS17.png`} alt="Uploading Images" title="Uploading Images" />
      </div>

      <h3>Adding Metadata</h3>
      <p>Enter the Metadata of the product.</p>
      <ul>
        <li>Entering Product ID/SKU, Gender, and Category details are mandatory for doing Image Generation.</li>
        <li>You can add any instructions for the product that need to be taken into account during the generation process.</li>
        <li>You can add the product to one or more collections.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS18.png`} alt="Adding Metadata" title="Adding Metadata" />
      </div>
      <p>
        You can proceed to the next step to style the product or click on ‘Save & Exit’ in the context menu near the ‘Next Step’ button to save the images and metadata and add the product to the feed.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS19.png`} alt="Save & Exit" title="Save & Exit" />
      </div>
    </div>
  );
};

export default AddProductComponent;
