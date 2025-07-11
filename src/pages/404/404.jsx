import { Link } from "react-router-dom";
import "./404.css";
import logo from "/assets/logo_two.png";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className='not-found'>
      <img src={logo} alt='Logo' className='logo-404' />
      <h1>404</h1>
      <div className='text'>
        <p>{t("404.title")}</p>
        <p>{t("404.sub")}</p>
      </div>
      <Link to='/' className='home-button'>
        {t("404.btn")}
      </Link>
    </div>
  );
};

export default NotFound;
