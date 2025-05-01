
import { useState, useEffect, useCallback } from 'react';

const TypewriterEffect = ({ text, delay = 50, className = '', onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const typeNextCharacter = useCallback(() => {
    if (currentIndex < text.length) {
      setDisplayText((prev) => prev + text.charAt(currentIndex));
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(typeNextCharacter, delay);
      return () => clearTimeout(timeout);
    }else if(!isComplete){
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, delay, typeNextCharacter]);

  return (
    <span className={`${className} ${!isComplete ? 'cursor' : ''}`}>
      {displayText}
    </span>
  );
};

export default TypewriterEffect;
