import React, { useEffect } from 'react';

const SearchWidget = () => {
  useEffect(() => {
    const configId = "0219f818-de9d-45a0-be91-0fb857cc07b6";
    const triggerId = "searchWidgetTrigger";

    // Load the Widget JavaScript bundle
    const script = document.createElement('script');
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_US";
    script.async = true;
    document.head.appendChild(script);

    // Set up the Search Widget
    script.onload = () => {
      const searchWidgetElement = document.createElement('gen-search-widget');
      searchWidgetElement.configId = configId;
      searchWidgetElement.triggerId = triggerId;

      // Set authorization token if needed
      const authToken = "<JWT or OAuth token provided by your backend>";
      if (authToken) {
        searchWidgetElement.authToken = authToken;
      }

      document.body.appendChild(searchWidgetElement);
    };

    return () => {
      // Cleanup on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Element that opens the widget on click. It does not have to be an input */}
      <input placeholder="Search here" id="searchWidgetTrigger" />
    </div>
  );
};

export default SearchWidget;
