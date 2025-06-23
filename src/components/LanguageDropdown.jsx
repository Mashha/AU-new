// LanguageDropdown.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./languageDropdown.css";
import SLO from "/assets/SI.png";
import GB from "/assets/GB.png";

const LanguageDropdown = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "En", flag: GB },
    { code: "sl", label: "Slo", flag: SLO },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className='mobile-language-section'>
        <div className='mobile-language-options'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`mobile-language-option ${
                i18n.language === lang.code ? "active" : ""
              }`}
            >
              <span className='flag'>
                <img src={lang.flag} alt='' />
              </span>
              <span>{lang.label}</span>
              {i18n.language === lang.code && (
                <span className='checkmark'>✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='language-dropdown' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='language-trigger'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <span className='flag'>
          <img src={currentLanguage.flag} alt='' />
        </span>
        <span className='language-code'>
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown size={16} className={`chevron ${isOpen ? "open" : ""}`} />
      </button>

      {isOpen && (
        <div className='language-menu'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-option ${
                i18n.language === lang.code ? "active" : ""
              }`}
            >
              <span className='flag'>
                <img src={lang.flag} alt='' />
              </span>
              <span className='language-info'>
                <span className='language-name'>{lang.label}</span>
                <span className='language-code-small'>
                  ({lang.code.toUpperCase()})
                </span>
              </span>
              {i18n.language === lang.code && (
                <span className='checkmark'>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
