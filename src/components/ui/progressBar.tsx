import React from "react";

interface ProgressBarProps {
  masteredWords: number;
  totalWords: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  masteredWords,
  totalWords,
}) => {
  let percentage = Math.floor((masteredWords / totalWords) * 100);

  return (
    <div className="mb-6">
      <div className="flex items-center mb-1">
        <p className="text-sm font-semibold text-gray-700">Progress:</p>
        <p className="text-sm font-semibold text-gray-700 ml-auto">
          {percentage}%
        </p>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full shadow-inner overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full shadow-md"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
