import "./footer.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoBig from "/assets/logo_two.png";
import heart from "/assets/heart.png";

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
            <svg viewBox='0 0 24 24' className='social-icon'>
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
            </svg>
          </a>
          <a
            href='https://www.instagram.com/anonymousfortheunheard/'
            className='social-link'
            aria-label='Instagram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg viewBox='0 0 24 24' className='social-icon'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
          </a>
          <a
            href='mailto:anon4unheard@gmail.com'
            className='social-link'
            aria-label='Email'
          >
            <svg viewBox='0 0 24 24' className='social-icon'>
              <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
            </svg>
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
