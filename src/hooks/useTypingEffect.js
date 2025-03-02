import { useState, useEffect } from "react";

export default function useTypingEffect(words, speed = 150, delay = 1000) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => words[wordIndex].slice(0, prev.length + 1));
        if (text === words[wordIndex]) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return { text, cursorVisible };
}
