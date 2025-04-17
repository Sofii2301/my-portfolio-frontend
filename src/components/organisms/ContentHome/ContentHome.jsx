import { useLanguage } from "../../../context/LanguageContext";
import useTypingEffect from "../../../hooks/useTypingEffect.js";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";
//import right_image from '../../../assets/right_image.gif'
import "./contentHome.css";

export default function Hero() {
  const { translations } = useLanguage();
  const words = [translations.job_word1, translations.job_word2];
  const { text, cursorVisible } = useTypingEffect(words);

  return (
    <div className="text-white content w-100">
      <div className="row row-home align-items-center w-100 h-100">
        {/* Left Column (Texts + Networks) */}
        <div className="col-md-6 text-content text-center text-md-start">
          <h1 className="animate-from-top">{translations.greeting}</h1>
          <h3 className="typing-effect">
            {translations.job_part1} <span className="highlight">{text}</span>
            {cursorVisible && <span className="cursor">|</span>} {translations.job_part2}
          </h3> 
          <div className="animate-from-left">
            <SocialIcons />
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="col-md-6 image-placeholder animate-from-right h-100">
          {/* <img src={right_image} className="img-fluid" alt="Animated" /> */}
        </div>
      </div>
    </div>
  );
}
