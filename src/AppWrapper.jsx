import { useEffect, useState } from "react";
import App from "./App";
import Loader from "./components/loader/Loader";

const AppWrapper = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("visited");

    const isFirstVisit = !alreadyVisited;
    const fromExternal =
      document.referrer === "" ||
      !document.referrer.includes(window.location.hostname);

    if (isFirstVisit && fromExternal) {
      sessionStorage.setItem("visited", "true");
      setShowLoader(true);

      setTimeout(() => {
        setShowLoader(false);
      }, 4000);
    }
  }, []);

  return showLoader ? <Loader /> : <App />;
};

export default AppWrapper;
