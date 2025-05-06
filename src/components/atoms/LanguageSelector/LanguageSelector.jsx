import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import './languageSelector.css'

export default function LanguageSelector() {
    const { language, changeLanguage, languages } = useLanguage();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="language-selector">
            <button className="btn btn-outline-light ms-lg-3 ms-md-0 mt-lg-0 mt-md-2 dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {languages[language].flag} {languages[language].name}
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu show">
                {Object.keys(languages).map((lang) => (
                  <li key={lang}  data-bs-dismiss="offcanvas">
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