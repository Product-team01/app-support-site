import React, { useEffect } from 'react';

const GTMNoScript = () => {
  useEffect(() => {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-MXRHJT4S";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";

    // Append the iframe to the body
    document.body.appendChild(iframe);

    // Cleanup function to remove the iframe when the component unmounts
    return () => {
      document.body.removeChild(iframe);
    };
  }, []); // The empty array ensures this effect runs only once after the initial render

  return null; // This component does not render anything itself
};

export default GTMNoScript;
