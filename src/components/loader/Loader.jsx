import { useEffect } from "react";
import "./loader.css";
import logo from "/assets/logo_two.png";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000); // same as animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className='loader-container'>
      <div className='logo-wrapper'>
        <img src={logo} alt='Logo' className='loader-logo' />
      </div>
      <div className='loader-panel top-panel'></div>
      <div className='loader-panel bottom-panel'></div>
    </div>
  );
};

export default Loader;