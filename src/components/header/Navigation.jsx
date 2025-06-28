import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./nav.css";
import logo from "/assets/logo.png";
import LanguageDropdown from "../LanguageDropdown";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  // Get navigation items from translation
  const navItems = t("navigation.items", { returnObjects: true });

  const handleNavClick = (item) => {
    if (item.type === "hash") {
      // Hash link - scroll to section on homepage
      if (window.location.pathname !== "/") {
        // If not on homepage, navigate to homepage first then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (item.type === "route") {
      // Route navigation
      navigate(item.href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='navInner'>
          <a href='/'>
            <img src={logo} alt='Logo' className='logo' />
          </a>

          {/* Desktop Menu */}
          <div className='desktopMenu'>
            <div className='menuList'>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className={`navLink ${
                    item.type === "route" && location.pathname === item.href
                      ? "active"
                      : ""
                  }`}
                  type='button'
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LanguageDropdown />
          </div>

          {/* Mobile menu button */}
          <div className='mobileMenuButton'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='mobileMenuButton'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='mobileMenu'>
            <div className='mobileMenuContent'>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className={`mobileNavLink ${
                    item.type === "route" && location.pathname === item.href
                      ? "active"
                      : ""
                  }`}
                  type='button'
                >
                  {item.label}
                </button>
              ))}

              <LanguageDropdown isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
