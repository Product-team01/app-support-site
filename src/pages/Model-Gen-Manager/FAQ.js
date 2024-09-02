import React from 'react';
import './FAQ.css';

const FAQL = () => {
  return (
    <div className="faq-container">
      {createAccordionItem(0, 'How do I create a Catalog?', 'You can create a Catalog by clicking on the ‘Create New’ button in the Catalogs Listing screen.')}
      {createAccordionItem(1, 'What is a feed?', 'A feed is a collection of products. Feed contains all the products that are uploaded and post-processed.')}
      {createAccordionItem(2, 'What is the data type supported for Catalog’s Primary Key?', 'Currently, only “String” data type is supported for the catalog’s primary key.')}
      {createAccordionItem(3, 'What are the mandatory metadata required for a product to be processed?', 'Product ID/SKU, Gender, Category are the mandatory metadata required for a product to be processed.')}
      {createAccordionItem(4, 'Which Image view is mandatory for a product?', '‘Front’ image view is mandatory for a product.')}
      {createAccordionItem(5, 'What is the time taken to process products after feed submission?', 'The time taken to process products and do the model generation depends on the number of products submitted in the feed.')}
      {createAccordionItem(6, 'How many pair products can be selected for a primary product?', 'You can select up to 10 pair products for a primary product.')}
      {createAccordionItem(7, 'How many models can I choose for a primary product?', 'You can select only one model for a primary product.')}
      {createAccordionItem(8, 'When does a product go to the ‘Rework’ section?', 'When at least one comment is given for the generated image and sent to rework, the product goes to the ‘Rework’ section.')}
      {createAccordionItem(9, 'When does a product go to the \'Approved\' section?', 'When all the generated images are approved, the product goes to the \'Approved\' section.')}

      {/* New FAQs from the image */}
      {createAccordionItem(10, 'When can I export data after updating metadata/styling/product status (Pending Review/ Rework/Resolved/Approved)?', 'It will take up to 30 mins for the latest changes to get updated for exporting them. If the latest changes expected are not seen in the exported file, wait for 30 minutes and export again.')}
      {createAccordionItem(11, 'When will the product status be indicated as error?', 'The product status will be indicated as error in the following cases:\n- When Gender, Category are not given\n- When front view image is not given for the product\n- When images have wrong resolution (Min: 1000 x 1000 pixels, Max: 5000 x 5000 pixels)\n- When the configured naming convention is not followed for image names\n- When the product ID in the CSV file is not available in the Zip file.')}
      {createAccordionItem(12, 'When will the product not be ingested into the feed?', 'In a catalog, when products having the same product IDs are uploaded, those products will not be ingested into the system.')}
      {createAccordionItem(13, 'I have uploaded 5 images, but only one image could be seen in the product. What could be the reason?', 'The one uploaded image that is available is correct in convention and format. Other 4 images uploaded but not available are either uploaded with wrong format or with wrong naming convention.')}
    </div>
  );

  function createAccordionItem(index, question, answer) {
    return (
      <div key={index} className="faq-item">
        <h4 className="faq-question">
          {question}
        </h4>
        <p className="faq-answer">{answer}</p>
      </div>
    );
  }
};

export default FAQL;
