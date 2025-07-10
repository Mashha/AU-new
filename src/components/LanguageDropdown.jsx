// LanguageDropdown.jsx
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./languageDropdown.css";
import SLO from "/assets/SI.png";
import GB from "/assets/GB.png";

const urlMap = [
  ["/meat", "/meso"],
  ["/fish", "/ribe"],
  ["/eggs", "/jajca"],
  ["/dairy", "/mleko"],
  ["/resources", "/viri"],
  ["/about", "/o-nas"],
  ["/", "/"],
  ["*", "*"],
];

const LanguageDropdown = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: "en", label: "En", flag: GB },
    { code: "sl", label: "Slo", flag: SLO },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    const matchingEntry = urlMap.find((entry) => {
      return entry.includes(location.pathname);
    });

    if (matchingEntry) {
      const oppositeEntry =
        matchingEntry[0] === location.pathname
          ? matchingEntry[1]
          : matchingEntry[0];
      navigate(oppositeEntry);
    }

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
      <div className="mobile-language-section">
        <div className="mobile-language-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`mobile-language-option ${
                i18n.language === lang.code ? "active" : ""
              }`}
            >
              <span className="flag">
                <img src={lang.flag} alt="" />
              </span>
              <span>{lang.label}</span>
              {i18n.language === lang.code && (
                <span className="checkmark">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flag">
          <img src={currentLanguage.flag} alt="" />
        </span>
        <span className="language-code">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown size={16} className={`chevron ${isOpen ? "open" : ""}`} />
      </button>

      {isOpen && (
        <div className="language-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-option ${
                i18n.language === lang.code ? "active" : ""
              }`}
            >
              <span className="flag">
                <img src={lang.flag} alt="" />
              </span>
              <span className="language-info">
                <span className="language-name">{lang.label}</span>
                <span className="language-code-small">
                  ({lang.code.toUpperCase()})
                </span>
              </span>
              {i18n.language === lang.code && (
                <span className="checkmark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
