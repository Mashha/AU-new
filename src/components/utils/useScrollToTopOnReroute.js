import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useScrollToTopOnReroute = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "instant" }); // or behavior: 'auto'
  }, [location.pathname]);
};

export default useScrollToTopOnReroute;
