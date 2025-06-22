import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./nav.css";
import logo from "/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Meat", "Dairy", "Eggs", "Fish", "Resources"];

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='navInner'>
          <img src={logo} alt='Logo' className='logo' />

          {/* Desktop Menu */}
          <div className='desktopMenu'>
            <div className='menuList'>
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className='navLink'
                >
                  {item}
                </a>
              ))}
            </div>
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
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className='mobileNavLink'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
