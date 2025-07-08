import "./footer.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoBig from "/assets/logo_two.png";
import heart from "/assets/heart.png";
import emailIcon from "/assets/icons/email_grey.png";
import fbIcon from "/assets/icons/fb_grey.png";
import tikIcon from "/assets/icons/tiktok_grey.png";
import instaIcon from "/assets/icons/insta_grey.png";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Get navigation items from translation (same as main nav)
  const navItems = t("navigation.items", { returnObjects: true });

  const handleNavClick = (item) => {
    if (item.href.startsWith("#")) {
      // Hash link - scroll to section on homepage
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(item.href);
    }
  };

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='logo-section'>
          <div className='logo-container'>
            <img src={logoBig} alt='Anonymous For The Unheard Logo' />
          </div>
        </div>

        <div className='social-icons'>
          <a
            href='https://www.facebook.com/profile.php?id=100091701833498'
            className='social-link'
            aria-label='Facebook'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={fbIcon} alt='' className='social-icon' />
          </a>
          <a
            href='https://www.instagram.com/anonymousfortheunheard/'
            className='social-link'
            aria-label='Instagram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instaIcon} alt='' className='social-icon' />
          </a>
          <a
            href='mailto:anon4unheard@gmail.com'
            className='social-link'
            aria-label='Email'
          >
            <img src={emailIcon} alt='' className='social-icon' />
          </a>
          <a
            href='https://www.tiktok.com/@anonymous4theunheard'
            className='social-link'
            aria-label='Tiktok'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={tikIcon} alt='' className='social-icon' />
          </a>
        </div>

        <nav className='footer-nav'>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item)}
              className='nav-link'
            >
              {item.label}
            </button>
          ))}
        </nav>
        <p className='credit'>
          Photography by{" "}
          <a href='https://andrewskowron.org/' target='_blank' rel='noopener'>
            Andrew Skowron
          </a>
        </p>
      </div>

      <div className='footer-bottom'>
        <div className='copyright'>
          <span>
            {t(
              "footer.copyright",
              "© All right reserved | Anonymous For The Unheard"
            )}
          </span>
        </div>
        <div className='created-by'>
          <img src={heart} alt='Heart' />
          <span>{t("footer.createdBy", "Created by Orelia")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
