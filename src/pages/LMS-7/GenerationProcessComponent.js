import React from 'react';
import './howToRegisterDocumentType.css'; // Import the CSS file for styling

const GenerationProcessComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="generation-process-page">
      <h2>Generation Process</h2>
      <p>
        Once the feed is submitted, it is taken up for processing. Model generation is powered by advanced artificial intelligence technology called Generative Adversarial Networks (GANs). Once the products are processed and after the model generation, the products are sent to the Business user’s app to review the generated images.
      </p>
      <p>
        The time taken to process products and do the model generation depends on the number of products submitted in the feed.
      </p>

      <h3>Stages of the Generation Process</h3>
      <ul>
        <li>
          <strong>In-Progress:</strong> Shows all the products that are submitted as part of the feed and are being processed. As products get processed, they are sent for your review in the ‘Pending Review’ section.
          <br />
          If there are any issues with the input image of the product, the processing will not be done for the product, and the product will be sent to the ‘On-Hold’ section along with the reason for not processing.
        </li>
        <li>
          <strong>Pending Review:</strong> The products that are processed and need to be reviewed by you are sent to this section. Click on the ‘Review’ button in the Generated Images Card to review the product.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS21.png`} alt="Pending Review" title="Pending Review" />
          </div>
        </li>
        <li>
          <strong>Rework:</strong> The product(s) having image(s) that are rejected and sent again for rework will come to this section. In this section, you can only view the images that are rejected. You cannot comment on the rejected or approved images. You can comment on images that are not reviewed yet.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS22.png`} alt="Rework" title="Rework" />
          </div>
        </li>
        <li><strong>Resolved</strong> - The products that were in ‘Rework’, after they are processed again, are sent to this section and the resolved images are highlighted with ‘Resolved’ tags for your review.
    <ul>
      <li>You can approve the image or again provide feedback and reject.</li>
      <li>If all the images are approved, the product(s) will be moved to ‘Approved’ section.</li>
      <li>If at least one image is rejected again, the product(s) will be moved to ‘Rework’ section again and the same cycle goes on until all the images are approved.</li>
      <li><strong>History</strong> - Shows the previous history of Generated images sent for rework along with the comments. Click on the ‘Clock’ icon to view the history.</li>
    </ul>
  </li>
        <li>
          <strong>Approved:</strong> Products having all the images approved are sent to this section.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS23.png`} alt="Approved" title="Approved" />
          </div>
        </li>
        <li>
          <strong>On Hold:</strong> The products that are submitted as part of the feed, if there are any issues with the input images, the Vue.ai team rejects the products by sending them to this section along with the reason(s). You should check the reason, correct them, and upload those products in a new feed. You cannot re-upload the products to the same feed.
          <div className="image-container">
            <img src={`${imageBaseUrl}LMS24.png`} alt="On Hold" title="On Hold" />
          </div>
        </li>
      </ul>

      <h3>Reviewing an Image</h3>
      <p>The Vue Model Gen Manager allows for extensive reviewing options for the generated images. Below are the details:</p>
      
      <h4>Sending an Image for Rework</h4>
      <p>
        Any image that does not meet the requirements can be sent back for rework by drawing a box on the image, highlighting the area that needs rework, and commenting in the comment section available in the right panel. Click on the ‘Box Annotation’ icon in the toolbar to draw on the image. When you add one comment and save it, the image gets rejected. You can add one or more comments to an image. When you move to another product, the current product that has image(s) rejected will be sent for rework.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}Screenshot2.png`} alt="Sending an Image for Rework" title="Sending an Image for Rework" />
      </div>

      <h4>Other Review Options</h4>
      <ul>
        <li>Approve all the images in the product by clicking on the ‘Approve All’ button.</li>
        <li>Send all images for rework by clicking on the ‘Reject All’ button and providing a common comment for all the images. You can also upload a reference image in the comment while rejecting the image.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}Screenshot1.png`} alt="Other Review Options" title="Other Review Options" />
      </div>
    </div>
  );
};

export default GenerationProcessComponent;
