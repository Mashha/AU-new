import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./pageTransition.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    setFadeState("fade-out");

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setFadeState("fade-in");
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  return <div className={`page-wrapper ${fadeState}`}>{displayChildren}</div>;
};

export default PageTransition;
