import { useEffect, useState } from "react";
import App from "./App";
import Loader from "./components/loader/Loader";

const AppWrapper = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
  }, []);

  return (
    <>
      {showLoader ? <Loader /> : null}
      <App />;
    </>
  );
};

export default AppWrapper;
