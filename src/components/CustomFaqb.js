import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
     
        {
            title: "What is an Audience?",
            content: "An Audience refers to a specific segment of users who share common attributes & behavior patterns. Example: Desktop Visitors, High-value spenders."
          },
          {
            title: "What is Audience Overlap Information?",
            content: "Audience Overlap provides you with details about the visitors who overlap between the different Audience segments configured."
          },
          {
            title: "How can I access the Audience Overlap Information?",
            content: 'Click on the ‘overlap’ icon next to each Audience name from the Audience Listing Table. Please click <a href="https://support.vue.ai/guides/Audience%20Hub/Getting%20started" target="_blank">here</a> to find details about Audience Overlap.'
          },
          {
            title: "Can I create a custom Audience?",
            content: "Click on the ‘Upload New’ CTA from the Audience listing screen, and upload any audience information as a CSV file."
          },
          {
            title: "To upload a new audience, is CSV the only supported format?",
            content: "At this point, only CSV. We can support more formats in future releases."
          },
          {
            title: "What does the audience editing screen look like? What all can be edited in the audience?",
            content: "Currently, we don’t support editing existing Audiences."
          },
          {
            title: "Where is Audience used within Vue?",
            content: "As part of Experience, Audience is used to target and display the Experience only to a specific segment of visitors. Audience is also used within metrics to filter & access data at a more granular level."
          }
        
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
