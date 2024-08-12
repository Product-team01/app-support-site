import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ - Vue Platform",
    rows: [
        {
            title: "How can I sign up for Vue?",
            content: `Please reach out to one of our sales representatives via vue-support@madstreetden.com. We’ll get back to you with details.`,
            tags: ['Vue'],
        },
        {
            title: "Is it possible to have a free trial account for Vue?",
            content: `Sorry, currently, we are not offering a free trial account for Vue. However, you can reach us at vue-support@madstreetden.com, and we’ll get back to you with a POC.`,
            tags: ['Vue'],
        },
        {
            title: "How do I set my password for Vue?",
            content: `As a part of account setup, we will provide you with login credentials. If you need additional logins created, please reach us at vue-support@madstreetden.com.`,
            tags: ['Vue'],
        },
        {
            title: "Lost password and can’t sign in?",
            content: `You can reset the password for your account by clicking on the ‘Forgot Password’ CTA & following the instructions.`,
            tags: ['Vue'],
        },
        {
            title: "How can I sign up for a trial?",
            content: `Sorry, currently, we are not offering a free trial account for Vue. However, you can reach us at vue-support@madstreetden.com, and we’ll get back to you with a POC.`,
            tags: ['Vue'],
        },
        {
            title: "How can I change my Vue account password?",
            content: `You can reset the password for your account by clicking on the ‘Forgot Password’ CTA & following the instructions or from the ‘User Profile’ screen.`,
            tags: ['Vue'],
        },
        {
            title: "How to add team members to the Vue account?",
            content: `Currently, it’s not possible for you to invite more members to Vue. Please reach out to us at vue-support@madstreetden.com, and we’ll be happy to create logins for you.`,
            tags: ['Vue'],
        },
        {
            title: "What are the user permissions available for a Vue account?",
            content: `You can decide between any one of the following options:`,
            tags: ['Vue'],
        },
        // ... Add more FAQs here
    ],
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
