 // src/components/ProductFruitsInitializer.js

import { useEffect } from 'react';
import { productFruits } from 'product-fruits';

const ProductFruitsInitializer = ({ username }) => {
  useEffect(() => {
    // Replace 'YOUR_WORKSPACE_CODE' and 'LANGUAGE_CODE' with your actual values.
    // Ensure username is dynamically provided based on the current user's information.
    productFruits.init('LWemVS9QqdVNIlzu', 'en', { username: username });

    // If you need to disable the default location change detection,
    // and handle page changes manually, include the additional options:
    productFruits.init(
      'LWemVS9QqdVNIlzu',
      'en',
      { username: username },
      {
        disableLocationChangeDetection: true
      }
    );
  }, [username]); // The empty array ensures this effect runs only once, when the component mounts.

  return null; // This component does not render anything.
};

export default ProductFruitsInitializer;
