import { useState } from "react";
import ToggleSwitch from "../../atoms/ToggleSwitch/ToggleSwitch";
import Timeline from "../Timeline/Timeline";
import useCareer from "../../../hooks/useCareer";
import "./educationExperience.css";

export default function EducationExperience({limit = null}) {
    const [selected, setSelected] = useState("education");
    const {education, experience} = useCareer();

    return (
        <div className="education-experience-container">
        <ToggleSwitch selected={selected} onToggle={setSelected} />
        <Timeline items={selected === "education" ? education : experience} limit={limit}/>
        </div>
    );
}
