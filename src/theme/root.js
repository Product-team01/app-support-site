import React from 'react';
import Head from '@docusaurus/Head';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Root({children}) {
  return (
    <>
      <Head>
        {/* Google Tag Manager - add GTM script in head */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MXRHJT4S');`,
        }} />
      </Head>
      {children}
      {ExecutionEnvironment.canUseDOM && (
        // Google Tag Manager (noscript) - add GTM noscript after opening <body>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXRHJT4S"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }} />
      )}
    </>
  );
}
