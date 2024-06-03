import React, { useState, useEffect } from "react";
import CardButtons from "./cardButtons";
import WordStatus from "./wordStatus";
import CardFront from "./cardFront";
import CardBack from "./cardBack";
import WordDetails from "./wordDetails";

interface cardsProps {
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
  wordStatus: {
    [key: number]: "mastered" | "learning" | "untouched";
  };
  setWordStatus: React.Dispatch<
    React.SetStateAction<{
      [key: number]: "mastered" | "learning" | "untouched";
    }>
  >;
}

const Card: React.FC<CardProps> = ({ words, wordStatus, setWordStatus }) => {
  const [showMeaning, setShowMeaning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    const updateWordStatus = () => {
      const newWordStatus: Record<
        number,
        "mastered" | "learning" | "untouched"
      > = {};
      words.forEach((_, index) => {
        newWordStatus[index] = "untouched"; // Initial state for new words
      });
      setWordStatus(newWordStatus);
    };

    // Call updateWordStatus initially and whenever words changes
    updateWordStatus();
    return () => updateWordStatus(); // Cleanup function to prevent memory leaks
  }, [words]);

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
  };

  const handleLearningClick = () => {
    setWordStatus((prevStatus) => ({
      ...prevStatus,
      [currentIndex]: "learning",
    }));
    nextWord();
  };

  const nextWord = () => {
    setShowMeaning(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    setAnimateCard(true);
  };
  const prevWord = () => {
    setShowMeaning(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) return (prevIndex - 1) % words.length;
      return prevIndex;
    });
    setAnimateCard(true);
  };

  return (
    <div className="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain px-6">
      <div>
        <WordStatus wordStatus={wordStatus} totalWords={words.length} />
        <WordDetails
          word={words[currentIndex].word}
          index={currentIndex}
          wordStatus={wordStatus}
          phonetics={words[currentIndex].phonetics || [{ audio: "", text: "" }]}
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
        nextWord={nextWord}
        prevWord={prevWord}
      />
    </div>
  );
};

export default Card;
