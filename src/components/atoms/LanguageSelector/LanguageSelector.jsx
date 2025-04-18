import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import './languageSelector.css'

export default function LanguageSelector() {
    const { language, changeLanguage, languages } = useLanguage();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="language-selector">
            <button className="btn btn-outline-light ms-3 dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {languages[language].flag} {languages[language].name}
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu show">
                {Object.keys(languages).map((lang) => (
                  <li key={lang}>
                    <button className="dropdown-item" onClick={() => { changeLanguage(lang); setDropdownOpen(false); }}>
                      {languages[lang].flag} {languages[lang].name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
    );
}