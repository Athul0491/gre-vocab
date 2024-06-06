import React from "react";

interface CardButtonsProps {
  handleMasteredClick: () => void;
  handleLearningClick: () => void;
  nextWord: () => void;
  prevWord: () => void;
}

const CardButtons: React.FC<CardButtonsProps> = ({
  handleMasteredClick,
  handleLearningClick,
  nextWord,
  prevWord,
}) => {
  return (
    <div className="flex justify-center">
      <div className="shadow-sm">
        <button
          onClick={prevWord}
          className="mr-8 rounded-lg text-center font-medium focus:ring-2 focus:z-10 px-4 py-2 text-sm text-gray-800 bg-gray-200 hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleMasteredClick}
          className="mr-3 text-center rounded-lg font-medium focus:ring-2 focus:z-10 px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800 focus:ring-green-300"
        >
          I know this word
        </button>
        <button
          onClick={handleLearningClick}
          className="ml-3 text-center rounded-lg font-medium focus:ring-2 focus:z-10 px-4 py-2 text-sm text-white bg-red-700 hover:bg-red-800 focus:ring-red-300"
        >
          I don't know this word
        </button>
        <button
          onClick={nextWord}
          className="ml-8 rounded-lg text-center font-medium focus:ring-2 focus:z-10 px-4 py-2 text-sm text-gray-800 bg-gray-200 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardButtons;
