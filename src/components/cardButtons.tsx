import React from "react";

interface CardButtonsProps {
  handleMasteredClick: () => void;
  handleLearningClick: () => void;
}

const CardButtons: React.FC<CardButtonsProps> = ({
  handleMasteredClick,
  handleLearningClick,
}) => {
  return (
    <div className="my-2 flex justify-center">
      <div className="inline-flex rounded-lg shadow-sm">
        <button
          onClick={handleMasteredClick}
          className="text-center font-medium focus:ring-2 focus:z-10 size inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 first:rounded-l-lg last:rounded-r-lg"
        >
          I know this word
        </button>
        <button
          onClick={handleLearningClick}
          className="text-center font-medium focus:ring-2 focus:z-10 size inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 first:rounded-l-lg last:rounded-r-lg"
        >
          I don't know this word
        </button>
      </div>
    </div>
  );
};

export default CardButtons;
