import React, { useEffect, useState } from 'react';

const ProductFruitsBadge = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const handleUnreadCount = (data) => {
      setUnreadCount(data.count);
    };

    if (window.productFruits && window.productFruits.api.announcementsV2) {
      window.productFruits.api.announcementsV2.listen('newsfeed-unread-count-changed', handleUnreadCount);

      // Assuming `customLauncher` is already defined in your DOM
      const customLauncher = document.getElementById('newsfeed-launcher');
      if (customLauncher) {
        window.productFruits.api.announcementsV2.attachNewsWidgetToElement(customLauncher);
      }
    }

    // Cleanup
    return () => {
      // Make sure to remove the listener if your component unmounts to prevent memory leaks
    };
  }, []);

  // Render the badge based on `unreadCount`
  return <div>{unreadCount > 0 && <span className="badge">{unreadCount}</span>}</div>;
};

export default ProductFruitsBadge;
