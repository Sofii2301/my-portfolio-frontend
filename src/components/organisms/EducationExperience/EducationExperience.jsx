import { useLanguage } from "../../../context/LanguageContext";
import { useState } from "react";
import ToggleSwitch from "../../atoms/ToggleSwitch/ToggleSwitch";
import Timeline from "../Timeline/Timeline";
import useCareer from "../../../hooks/useCareer";
import "./educationExperience.css";

export default function EducationExperience({limit = null}) {
    const [selected, setSelected] = useState("education");
    const {education, experience} = useCareer();
    const { translations } = useLanguage();

    return (
        <div className="education-experience-container">
            <ToggleSwitch
                selected={selected}
                onToggle={setSelected}
                options={[
                    { value: "education", label: translations.education },
                    { value: "experience", label: translations.experience },
                ]}
            />
            <Timeline items={selected === "education" ? education : experience} limit={limit}/>
        </div>
    );
}
