import React from "react";

interface CardFrontProps {
  onClick: () => void;
  animateCard: boolean;
  currentIndex: number;
  words: {
    word: string;
    definition: string;
  }[];
}

const CardFront: React.FC<CardFrontProps> = ({
  onClick,
  currentIndex,
  animateCard,
  words,
}) => {
  return (
    <div
      onClick={onClick}
      className={`transition-opacity duration-100 ease-in-out ${
        animateCard ? "opacity-70" : "opacity-100"
      } card-front cursor-pointer text-center px-7 py-28 bg-white overflow-hidden inset-0 rounded-lg shadow-lg border border-slate-300`}
    >
      <div className="flex justify-center content-center h-100 w-100 capitalize">
        <p className="text-2xl text-gray-900 font-bold text-left whitespace-normal capitalize">
          {words[currentIndex].word}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
