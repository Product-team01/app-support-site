import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ ",
    rows: [
     
        {
            title: "How do I publish a product recommendation strategy on my website?",
            content: 'Please click <a href="https://support.vue.ai/guides/DXM%20hub/Strategy/Predifined%20strategy" target="_blank" rel="noopener noreferrer">here</a> to visit our knowledge base with step-by-step instructions on how to create & publish personalized recommendations.'
        },
        {
            title: "Where can I find my recommendation metrics?",
            content: "You can find all Metrics under the ‘Metrics’ section. Navigate to the Metrics section by clicking on ‘Metrics’ in the top navigation bar."
        },
        {
            title: "I have created a strategy, but nothing is being displayed on my website?",
            content: 'Please click <a href="https://support.vue.ai/guides/DXM%20hub/Strategy/Creating%20a%20strategy" target="_blank" rel="noopener noreferrer">here</a> to visit our knowledge base with step-by-step instructions on how to create & publish personalized recommendations.'
        },
        {
            title: "The recommendation I have created is working on my website but not on my app. How can I fix it?",
            content: 'Recommendation on the application only works via API implementation. Please click <a href="https://support.vue.ai/api/#" target="_blank" rel="noopener noreferrer">here</a> to find detailed instructions on how to implement API & receive recommendation data.'
        },
        {
            title: "Can I modify/update the parameters?",
            content: "You can click on the ‘edit’ icon next to “Configure Model Parameters” within a Strategy configuration. Here you can add or remove any attribute or even adjust the slider for the attribute you want to change the score."
        },
        {
            title: "How can I change the weightage score of strategy model parameters?",
            content: 'You can click on the ‘edit’ icon next to “Configure Model Parameters” within a Strategy configuration. Adjust the slider for the attribute you want to change the score.'
        },
        {
            title: "Can I modify any live feature item?",
            content: "Yes, you can edit and update the configuration for any live item. Note: Any changes made to an experiment configuration will automatically reset the test."
        },
        {
            title: "How can I display recommendations only on a page/page type?",
            content: 'You can configure an Experience to render only on a particular page. Please click <a href="https://support.vue.ai/guides/DXM%20hub/Pages" target="_blank" rel="noopener noreferrer">here</a> to find detailed instructions on how to configure an Experience.'
        },
        {
            title: "Can I change my template type for an existing template?",
            content: "No, once a template configuration has been created it’s not possible to modify the template type. The same template, however, can be used for different types of content."
        },
        {
            title: "Can I change/edit my template while configuring a module?",
            content: "No, it’s not possible to directly edit a template from within a module config screen."
        },
        {
            title: "Can I link multiple different strategies and/or content on the same template & module?",
            content: "Yes, as part of module configuration, you can link multiple Strategies and/or Content to the same template."
        },
        {
            title: "How can I set a goal, metric & confidence score for an Experiment?",
            content: "While configuring an Experience, within the Experiment Settings, you can set a goal, metric & confidence score for a particular Experiment."
        },
        {
            title: "How can I create & publish an experience across all the pages on my website?",
            content: "Currently, it’s not possible to publish a single Experience across all pages on your website."
        },
        {
            title: "For collaborative filtering strategy, can I combine two different models into the same strategy?",
            content: "Yes, simply select the models you’d want to be part of the Collaborative Filtering Strategy and finish the strategy setup."
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
