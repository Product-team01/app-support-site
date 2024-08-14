import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "Model Gen Manager",
    rows: [
        {
            title: "How do I create a Catalog?",
            content: `You can create a Catalog by clicking on the ‘Create New’ button in the Catalogs Listing screen.`,
        },
        {
            title: "What is a feed?",
            content: `A feed is a collection of products. The feed contains all the products that are uploaded and post-processed.`,
        },
        {
            title: "What is the data type supported for Catalog’s Primary Key?",
            content: `Currently, only “String” data type is supported for the catalog’s primary key.`,
        },
        {
            title: "What are the mandatory metadata required for a product to be processed?",
            content: `Product ID/SKU, Gender, and Category are the mandatory metadata required for a product to be processed.`,
        },
        {
            title: "Which Image view is mandatory for a product?",
            content: `The ‘Front’ image view is mandatory for a product.`,
        },
        {
            title: "What is the time taken to process products after feed submission?",
            content: `The time taken to process products and generate the model depends on the number of products submitted in the feed.`,
        },
        {
            title: "How many pair products can be selected for a primary product?",
            content: `You can select up to 10 pair products for a primary product.`,
        },
        {
            title: "How many models can I choose for a primary product?",
            content: `You can select only one model for a primary product.`,
        },
        {
            title: "When does a product go to the ‘Rework’ section?",
            content: `When at least one comment is given for the generated image and sent to rework, the product goes to the ‘Rework’ section.`,
        },
        {
            title: "When does a product go to the 'Approved' section?",
            content: `When all the generated images are approved, the product goes to the 'Approved' section.`,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
};

const config = {
    animate: true,
    arrowIcon: "V",
};

export default function FaqCatalog() {
    return (
        <div>
            <Faq data={data} styles={styles} config={config} />
        </div>
    );
}
