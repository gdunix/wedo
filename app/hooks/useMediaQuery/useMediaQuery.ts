import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    documentChangeHandler();

    // Set up a ResizeObserver to listen for changes in the document
    const resizeObserver = new ResizeObserver(() => {
      documentChangeHandler();
    });

    // Start observing the document
    resizeObserver.observe(document.documentElement);

    // Clean up on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
