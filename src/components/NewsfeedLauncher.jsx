// // src/components/NewsfeedLauncher.js

// import React, { useEffect, useRef, useState } from 'react';

// const NewsfeedLauncher = () => {
//   const [unreadCount, setUnreadCount] = useState(0);
//   const launcherRef = useRef(null);

//   useEffect(() => {
//     // Function to setup Product Fruits after the script is loaded
//     const setupProductFruits = () => {
//       if (window.productFruits && window.productFruits.api && window.productFruits.api.announcementsV2) {
//         // Listen for the unread count changes
//         const unsubscribe = window.productFruits.api.announcementsV2.listen('newsfeed-unread-count-changed', (data) => {
//           setUnreadCount(data.count);
//         });

//         // Attach the Newsfeed widget to the launcher element
//         window.productFruits.api.announcementsV2.attachNewsWidgetToElement(launcherRef.current);

//         return unsubscribe;
//       }

//       // Try again if Product Fruits is not ready yet
//       setTimeout(setupProductFruits, 500);
//     };

//     setupProductFruits();
    
//     return () => {
//       // Perform cleanup if unsubscribe function is provided by Product Fruits API
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={launcherRef} id="newsfeed-launcher">Newsfeed</div>
//       {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
//     </div>
//   );
// };

// export default NewsfeedLauncher;

// src/components/NewsfeedLauncher.js
// import React, { useEffect, useState } from 'react';
// import './NewsfeedLauncher.css'; // Ensure you have the CSS for the badge

// const NewsfeedLauncher = () => {
//   const [unreadCount, setUnreadCount] = useState(0);

//   useEffect(() => {
//     // Check if Product Fruits is loaded
//     if (typeof window.productFruits !== 'undefined' && window.productFruits.api) {
//       // Setup the listener and attach the widget
//       const unsubscribe = window.productFruits.api.announcementsV2.listen('newsfeed-unread-count-changed', (data) => {
//         setUnreadCount(data.count);
//       });
//       window.productFruits.api.announcementsV2.attachNewsWidgetToElement(document.getElementById('newsfeed-launcher'));

//       // Cleanup the listener on unmount
//       return () => unsubscribe && unsubscribe();
//     }
//   }, []);

//   return (
//     <div id="newsfeed-launcher-container">
//       <div id="newsfeed-launcher">Release Notes</div>
//       {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
//     </div>
//   );
// };

// export default NewsfeedLauncher;

import React, { useEffect, useState } from 'react';
import './NewsfeedLauncher.css'; // Make sure this path is correct

const NewsfeedLauncher = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Check if Product Fruits is loaded and window is defined for SSR frameworks
    if (typeof window !== 'undefined' && window.productFruits && window.productFruits.api) {
      // Setup the listener and attach the widget
      const unsubscribe = window.productFruits.api.announcementsV2.listen('newsfeed-unread-count-changed', (data) => {
        setUnreadCount(data.count);
      });
      window.productFruits.api.announcementsV2.attachNewsWidgetToElement(document.getElementById('newsfeed-launcher'));

      // Cleanup the listener on unmount
      return () => unsubscribe && unsubscribe();
    }
  }, []);

  // Handler to open the newsfeed
  const handleNewsfeedOpen = () => {
    window.productFruits.api.announcementsV2.showNewsfeed();
  };

  return (
    <div id="newsfeed-launcher-container">
      <button id="newsfeed-launcher" onClick={handleNewsfeedOpen}>
        Release Notes
      </button>
      {unreadCount > 0 && (
        <div className="badge">{unreadCount}</div>
      )}
    </div>
  );
};

export default NewsfeedLauncher;
