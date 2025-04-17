import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function EducationExperience() {
    const { language } = useLanguage(); // Get current language
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        // Load the JSON file corresponding to the language
        fetch(`/data/education_${language}.json`)
        .then((response) => response.json())
        .then((data) => setEducation(data));

        fetch(`/data/experience_${language}.json`)
        .then((response) => response.json())
        .then((data) => setExperience(data));
    }, [language]); // It runs every time the language changes

    return {education, experience};
}
