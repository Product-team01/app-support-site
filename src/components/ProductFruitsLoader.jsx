// src/components/ProductFruitsLoader.js

import { useEffect } from 'react';

const ProductFruitsLoader = ({ workspaceCode }) => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = `https://www.productfruits.com/api.js?code=${workspaceCode}`;
    script.async = true;
    
    // Append the script to the document head
    document.head.appendChild(script);
    
    // Cleanup function to remove the script
    return () => {
      document.head.removeChild(script);
    };
  }, [workspaceCode]);

  return null;
};

export default ProductFruitsLoader;
