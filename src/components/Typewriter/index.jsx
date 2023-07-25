import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const texts = [
  "''front-end''",
  "''full-stack''",
  "''back-end''",
];

function Typewriter() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        setIsTyping(true);
        typeText();
      } else {
        setIsTyping(false);
        deleteText();
      }
    }, 1000); // Tempo total entre escrever e apagar (3000 milissegundos = 3 segundos)

    return () => clearInterval(interval);
  }, [currentTextIndex, currentText, isTyping]);

  const typeText = () => {
    const fullText = texts[currentTextIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setCurrentText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Intervalo entre cada caractere digitado (100 milissegundos)
  };

  const deleteText = () => {
    let currentIndex = currentText.length;

    const deletingInterval = setInterval(() => {
      if (currentIndex >= 0) {
        setCurrentText(currentText.slice(0, currentIndex));
        currentIndex--;
      } else {
        clearInterval(deletingInterval);
        setCurrentText("");
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, 100); // Intervalo entre cada caractere apagado (100 milissegundos)
  };

  return (
    <motion.span
      style={{
        fontSize: "0.9rem",
        color: "#fff",
        margin: "1.0rem 0rem 1.0rem 0rem",
      }}
    >
      {currentText}
    </motion.span>
  );
}

export default Typewriter;
