import React from "react";
import { percentage } from "../../utils/helper";

interface ProgressBarProps {
  masteredWords: number;
  totalWords: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  masteredWords,
  totalWords,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-1">
        <p className="text-sm font-semibold text-gray-700">Progress:</p>
        <p className="text-sm font-semibold text-gray-700 ml-auto">
          {percentage(masteredWords, totalWords)}%
        </p>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full shadow-inner overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full shadow-md"
          style={{ width: `${percentage(masteredWords, totalWords)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
