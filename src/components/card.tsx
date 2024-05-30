import React, { useState, useEffect } from "react";
import CardButtons from "./cardButtons";
import WordStatus from "./wordStatus";
import CardFront from "./cardFront";
import CardBack from "./cardBack";
import WordDetails from "./wordDetails";

interface CardProps {
  word: string;
  meaning: string;
}

const Card = () => {
  const words = [
    {
      word: "abate",
      definition: "become less in amount or intensity",
      pos: "adjective"
    },
    {
      word: "aberrant",
      definition: "markedly different from an accepted norm",
    pos: "adjective"},
    {
      word: "abeyance",
      definition: "temporary cessation or suspension",
    pos: "adjective"},
    {
      word: "abscond",
      definition: "run away, often taking something or somebody along",
    pos: "adjective"},
    {
      word: "abstemious",
      definition: "marked by temperance in indulgence",
    pos: "adjective"},
    {
      word: "admonish",
      definition: "scold or reprimand; take to task",
    pos: "adjective"},
  ];

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
    <div className="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain">
        <div>

        <WordStatus wordStatus={wordStatus} totalWords={words.length} />
        <WordDetails word={words[currentIndex].word} index={currentIndex} wordStatus={wordStatus} />
        </div>
      {!showMeaning ? (
        <CardFront
          onClick={handleClick}
          currentIndex={currentIndex}
          animateCard={animateCard}
          words={words}
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
