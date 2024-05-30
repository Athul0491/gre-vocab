import React, { useState, useEffect } from "react";
import CardButtons from "./cardButtons";
import WordStatus from "./wordStatus";
import CardFront from "./cardFront";
import CardBack from "./cardBack";
import WordDetails from "./wordDetails";

interface  cardsProps {
  word: string;
  phonetics: (
    | { audio: string; text?: undefined }
    | { text: string; audio: string }
  )[];
  meanings: { partOfSpeech: string; definition: string }[];
  frequency: string;
}
interface CardProps {
  words: cardsProps[];
}

const Card: React.FC<CardProps> = ({ words }) => {
  const [showMeaning, setShowMeaning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState(false);
  const [wordStatus, setWordStatus] = useState<{
    [key: number]: "mastered" | "learning" | "untouched";
  }>(() => {
    const initialStatus: {
      [key: number]: "mastered" | "learning" | "untouched";
    } = {};
    words.forEach((_, index) => {
      initialStatus[index] = "untouched";
    });
    return initialStatus;
  });

  useEffect(() => {
    if (animateCard) {
      const timer = setTimeout(() => {
        setAnimateCard(false);
      }, 300); // Set timeout to match the duration of CSS animation
      return () => clearTimeout(timer);
    }
  }, [animateCard]);

  const handleClick = () => {
    setShowMeaning(!showMeaning);
  };

  const handleMasteredClick = () => {
    setWordStatus((prevStatus) => ({
      ...prevStatus,
      [currentIndex]: "mastered",
    }));
    nextWord();
    setAnimateCard(true);
  };

  const handleLearningClick = () => {
    setWordStatus((prevStatus) => ({
      ...prevStatus,
      [currentIndex]: "learning",
    }));
    nextWord();
    setAnimateCard(true);
  };

  const nextWord = () => {
    setShowMeaning(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain px-6">
      <div>
        <WordStatus wordStatus={wordStatus} totalWords={words.length} />
        <WordDetails
          word={words[currentIndex].word}
          index={currentIndex}
          wordStatus={wordStatus}
        />
      </div>
      {!showMeaning ? (
        <CardFront
          onClick={handleClick}
          animateCard={animateCard}
          word={words[currentIndex].word}
        />
      ) : (
        <CardBack
          onClick={handleClick}
          currentIndex={currentIndex}
          animateCard={animateCard}
          words={words}
        />
      )}

      <CardButtons
        handleMasteredClick={handleMasteredClick}
        handleLearningClick={handleLearningClick}
      />
    </div>
  );
};

export default Card;
