// // src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

// Import your custom components
import HeroSection from '../components/homepage/HeroSection';
import GuidesAndSamples from '../components/homepage/GuidesAndSamples';
import SDKs from '../components/homepage/SDKs';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import NewsfeedLauncher from '../components/NewsfeedLauncher';
// Import the ProductFruitsInitializer component
import ProductFruitsInitializer from '../components/ProductFruitsInitializer';
import ProductFruitsLoader from '../components/ProductFruitsLoader';
export default function Homepage() {
  // Presuming username is retrieved and stored in this variable.
  // Replace 'exampleUser' with the actual logic to retrieve the current user's username.
  const username = 'exampleUser';

  return (
    <Layout wrapperClassName="homepage flex flex-col" noFooter>
      {/* Initialize Product Fruits with the username */}
      <ProductFruitsInitializer username={username} />
      
      <Head>
        {/* Your SEO tags */}
      </Head>
      <ProductFruitsLoader workspaceCode="LWemVS9QqdVNIlzu" />
      {/* <NewsfeedLauncher /> */}
      <HeroSection />
      <GuidesAndSamples />
      <SDKs />
      <APIReferenceSection />
      {/* Additional sections */}
      <div className="z-0">
        <ResourcesSection />
        <HelpSection className="-mb-48" />
      </div>
      <CommunitySection />
      <HomeFooter />
    </Layout>
  );
}
