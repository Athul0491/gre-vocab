import React from "react";

interface WordStatusProps {
  wordStatus: {
    [key: number]: "mastered" | "learning" | "untouched";
  };
  totalWords: number;
}

const WordStatus: React.FC<WordStatusProps> = ({ wordStatus, totalWords }) => {
  return (
    <div className="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain">
    <div className="clear-both flex justify-center">
      <div className="inline-flex rounded-md shadow-sm">
        <div className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm ">
            Mastered {
              Object.values(wordStatus).filter(
                (status) => status === "mastered"
              ).length
            } {" "}/ {totalWords}
        </div>
        <div className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm ">
            Learning {
              Object.values(wordStatus).filter(
                (status) => status === "learning"
              ).length
            } {" "}/ {totalWords}
        </div>
        <div className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm ">
            Untouched {
              Object.values(wordStatus).filter(
                (status) => status === "untouched"
              ).length
            } {" "}/ {totalWords}
        </div>
        </div>
    </div>
    </div>
  );
};

export default WordStatus;