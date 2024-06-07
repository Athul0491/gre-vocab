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
    try {
      console.log("currentIndex:", currentIndex);
      console.log("words.length:", words.length);

      if (currentIndex >= words.length) {
        setCurrentIndex(words.length - 1);
      }
    } catch (error) {
      console.error("Error in Card component:", error);
    }
  }, [currentIndex, words]);

  useEffect(() => {
    setCurrentIndex(0); // Reset the index to 0 whenever the words array changes
    setShowMeaning(false); // Hide the meaning when words change
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
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % words.length;
    });
    setAnimateCard(true);
  };

  const prevWord = () => {
    setShowMeaning(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) return prevIndex - 1;
      return words.length > 0 ? words.length - 1 : 0;
    });
    setAnimateCard(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <WordStatus wordStatus={wordStatus} totalWords={words.length} />
        <WordDetails
          word={words[currentIndex]?.word || ""}
          index={currentIndex}
          wordStatus={wordStatus}
          phonetics={
            words[currentIndex]?.phonetics || [{ audio: "", text: "" }]
          }
        />
      </div>
      {!showMeaning ? (
        <CardFront
          onClick={handleClick}
          animateCard={animateCard}
          word={words[currentIndex]?.word || ""}
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
