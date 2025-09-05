"use client";

import { useEffect } from 'react';

const DevToolsDisabler = () => {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Disable F12
      if (event.key === "F12" || event.keyCode === 123) {
        event.preventDefault();
      }
      // Disable Ctrl+Shift+I
      if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
      }
      // Disable Ctrl+Shift+C
      if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
      }
      // Disable Ctrl+Shift+J
      if (event.ctrlKey && event.shiftKey && event.key === 'J') {
          event.preventDefault();
      }
      // Disable Ctrl+U
      if (event.ctrlKey && event.key === 'U') {
          event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DevToolsDisabler;
