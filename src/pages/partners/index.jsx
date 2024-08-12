// // src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import ProductFruitsInitializer from '../../components/ProductFruitsInitializer';
import ProductFruitsLoader from '../../components/ProductFruitsLoader';

import Link from '@docusaurus/Link';

export default function Homepage() {
  // Presuming username is retrieved and stored in this variable.
  // Replace 'exampleUser' with the actual logic to retrieve the current user's username.
  const username = 'exampleUser';

  return (
    <Layout wrapperClassName="homepage flex flex-col" noFooter>
      {/* Initialize Product Fruits with the username */}
      <ProductFruitsInitializer username={username} />

      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ProductFruitsLoader workspaceCode="LWemVS9QqdVNIlzu" />

      <section className="partner-home noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-center py-14">
          <h2 className="font-jakarta text-5xl font-bold">
            Welcome to Vue Partner Support
          </h2>
        </div>
      </section>

      <div className="z-0">
        <section className="px-4 pt-16 pb-16">
          <div
            className={
              'mx-auto max-w-7xl rounded-3xl p-4 py-10 text-black dark:text-white lg:p-24 lg:py-1'
            }
          >
            <h2 className="mb-12 text-center lg:text-3xl">
              How can we help you today?
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <h3 className="my-3">MSD/Vue.ai Overview</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  This repository has resources which provide a corporate
                  overview of Mad Street Den (MSD), our flagship brand, Vue.ai,
                  our offerings by vertical and the world of use cases that we
                  power.
                </p>
                <Link
                  href="/partners/overview"
                  className="text-primary dark:text-primary-100"
                >
                  Take me there &rarr;
                </Link>
              </div>

              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <h3 className="my-3">Retail Partner Enablement</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  This comprehensive repository is designed to provide you with
                  any resources and technical support documentation required to
                  empower you as our retail partner.
                </p>
                <Link
                  href="/partners/retail"
                  className="text-primary dark:text-primary-100"
                >
                  Take me there &rarr;
                </Link>
              </div>

              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <h3 className="my-3">IDP Partner Enablement</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  This robust repository is designed to provide you with any
                  resources and technical support documentation required to get
                  you started as our IDP partner.
                </p>
                <Link
                  href="/partners/idp"
                  className="text-primary dark:text-primary-100"
                >
                  Take me there &rarr;
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-16">
            <div
              className={'video-container'}
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6918UXo7bAo?si=yZ_gttDzN7N-wZtj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
              }}
            />
            <div
              className={'video-container'}
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N0ZboK3w_Qg?si=rLoqISkBmo5s-QMv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
              }}
            />
          </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
