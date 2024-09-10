import React, { useEffect } from 'react';

const MessageListener = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      // Check the origin of the message to ensure it's from the expected parent
      if (event.origin !== 'https://your-parent-origin.com') {
        console.warn('Untrusted origin:', event.origin);
        return;
      }

      // Process the message
      const { username } = event.data;
      if (username) {
        console.log('Received Username:', username);

        // Display the username on the page
        document.getElementById('usernameDisplay').textContent = `Welcome, ${username}!`;
      }
    };

    // Add the event listener for the message event
    window.addEventListener('message', handleMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Child Component (Message Receiver)</h1>
      <p id="usernameDisplay">Waiting for username...</p>
    </div>
  );
};

export default MessageListener;
