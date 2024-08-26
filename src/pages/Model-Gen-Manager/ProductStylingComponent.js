import React from 'react';
import './howToRegisterDocumentType.css'; // Import the CSS file for styling

const ProductStylingComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="product-styling-page">
      <h2>Product Styling</h2>
      <p>
        Styling, essentially, is defining what the generated image will look like. This is done by selecting:
      </p>
      <ul>
        <li>The products that need to be paired with the input product</li>
        <li>The model that the final generation needs to be on</li>
        <li>Model’s footwear style, hairstyle, and poses</li>
      </ul>

      <h3>Pair Products</h3>
      <p>
        Pair product(s) are the products other than the primary product that need to be added when generating the final image. These can include both complementary (e.g., shirts for a pair of jeans) and layers (e.g., jackets for a shirt).
      </p>
      <ul>
        <li>You can select up to 10 pair products for the primary product.</li>
        <li>Selecting a pair product is optional. If you do not select a pair product, any relevant pair products are taken and used for processing.</li>
        <li>Typically, pair products are selected from across all feeds of a catalog. If required, the pair products can be specified in the input CSV when creating a product itself.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}LMS20.png`} alt="Selecting Pair Products" title="Selecting Pair Products" />
      </div>

      <h3>Model</h3>
      <p>
        You can select one model for which the primary product and pair product can be applied.
      </p>
      <ul>
        <li>Selecting a model is optional. If you do not select a model, any relevant model is selected and used for processing.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}Screenshot5.png`} alt="Selecting Model" title="Selecting Model" />
      </div>

      <h3>Footwear, Hair, Pose</h3>
      <ul>
  <li>Based on the chosen model, you can select one footwear style for the model.</li>
</ul>
<div className="image-container">
  <img src={`${imageBaseUrl}Screenshot4.png`} alt="Selecting Footwear" title="Selecting Footwear" />
</div>
<ul>
  <li>Based on the chosen model and footwear, you can select one hairstyle for the model (if applicable).</li>
  <li>Based on the chosen model, footwear, and hairstyle, you can select different poses for the model to be generated.</li>
</ul>
<div className="image-container">
  <img src={`${imageBaseUrl}Screenshot3.png`} alt="Selecting Pose" title="Selecting Pose" />
</div>
<ul>
  <li>You can view the preview of the product along with the selected stylings by clicking on the ‘Preview’ button.</li>
  <li>Click on ‘Save’ to save the styling that is done.</li>
</ul>

      <p>
        <strong>Note:</strong> Choosing model, footwear, hairstyle, and poses are all optional. You can also specify Model, Footwear, Hair, and Poses as fields in the CSV while uploading. If specified in the CSV, those will be pre-selected here, and you can edit them if required.
      </p>

      <p>
        <strong>Note:</strong> To edit styling for a product in single view, click on the ‘Style Product’ tab. You can edit the pair products, model, footwear, hairstyle, and poses and save them.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}Style1.png`} alt="Style Product" title="Style Product" />
      </div>
    </div>
  );
};

export default ProductStylingComponent;
