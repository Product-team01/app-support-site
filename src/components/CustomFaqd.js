import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ ",
    rows: [
     
        {
            title: "What is Content Hub? What does it do?",
            content: "Content Hub enables you to create Catalogs by uploading data from different datasources, manage Catalog content, and enrich Catalog content."
        },
        {
            title: "How do I create a Catalog?",
            content: 'You can create a Catalog by clicking on ‘Create New’ in the Explore screen. Click <a href="https://support.vue.ai/guides/Audience%20Hub/Getting%20started" target="_blank" rel="noopener noreferrer">here</a> to find detailed instructions on how to create a Catalog.'
        },
        {
            title: "How can I access a Catalog’s Content?",
            content: 'In the Catalog listing table, either click on the Catalog Name or on the ‘info’ icon. Click <a href="https://support.vue.ai/guides/Audience%20Hub/Getting%20started" target="_blank" rel="noopener noreferrer">here</a> to find detailed instructions on how to access & manage Catalog content.'
        },
        {
            title: "What are the types of data sources supported?",
            content: "We currently support Amazon S3, SFTP, Kafka, and Manual File upload."
        },
        {
            title: "Can I upload data from Shopify feed?",
            content: 'No, we currently don’t support Shopify feed as a data source. Please check our list of currently supported <a href="https://support.vue.ai/guides/Audience%20Hub/Getting%20started" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        {
            title: "What is a schema?",
            content: "A schema represents how the Catalog data is organized in the database; the relationship between entities like table name, field, attribute, field type, etc."
        },
        {
            title: "What is a feed?",
            content: "A feed is a collection of data."
        },
        {
            title: "Can I edit a Catalog after ‘Submit’?",
            content: "Yes, click on the ‘edit’ icon next to each Catalog name in the listing table or click on the ‘Update Catalog settings’ CTA from the Catalog Explore screen."
        },
        {
            title: "What are the types of Catalog supported?",
            content: "We currently support four types of Catalog: Product Catalog, Document Catalog, Banner Catalog, and Offer Catalog."
        },
        {
            title: "What are the segments supported?",
            content: 'We currently support a host of segments. Please find the list <a href="https://support.vue.ai/guides/Audience%20Hub/Getting%20started" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        {
            title: "What does ‘Test Connection’ do?",
            content: "Test Connection verifies if all the details provided as part of the Catalog creation process are valid. Test connection must be successful to proceed to finish configuring the Catalog."
        },
        {
            title: "Can I change the Primary Key after a Catalog has been Submitted?",
            content: "No, it’s not possible to change the Primary key after the Catalog has been submitted."
        },
        {
            title: "What are the data types supported for Primary Key?",
            content: "Currently, we only support “String” data type for the primary key."
        },
        {
            title: "When will the catalog sync during the initial setup? Is it based on the sync schedule?",
            content: "Initial sync happens immediately. Following ones happen according to the schedule."
        },
        {
            title: "What are the sync options available for a Catalog?",
            content: 'We support a variety of sync & schedule options as part of the Catalog. Please click <a href="https://support.vue.ai/guides/Audience%20Hub/Getting%20started" target="_blank" rel="noopener noreferrer">here</a> to learn more about sync.'
        },
        {
            title: "If a data file from a customer has duplicate column headers, what is the default behavior in handling it?",
            content: "If they are mapped to different fields, then they will be treated as different."
        },
        {
            title: "How can I update the mapping after a Catalog has been Submitted?",
            content: "Yes, click on the ‘edit’ icon next to each Catalog name in the listing table or click on the ‘Update Catalog settings’ CTA from the Catalog Explore screen. And update mapping as required."
        },
        
                           
        
    ]
  };
  

const styles = {
    // Add any custom styles here
    // bgColor: 'white',
    titleTextColor: 'blue',
    // titleTextSize: '48px',
    rowTitleColor: 'blue',
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
};

const config = {
    // Add any custom configuration here
};

export default function App() {
    return (
        <div>
            <Faq data={data} styles={styles} config={config} />
        </div>
    );
}
