import React, { useState } from 'react';
import './FAQ.css';

const FAQL = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    </div>
  );

  function createAccordionItem(index, question, answer) {
    return (
      <div key={index} className="faq-item">
        <h4
          className={`faq-question ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          {question}
          <span className="arrow">{activeIndex === index ? '▼' : '►'}</span>
        </h4>
        {activeIndex === index && <p className="faq-answer">{answer}</p>}
      </div>
    );
  }
};

export default FAQL;
