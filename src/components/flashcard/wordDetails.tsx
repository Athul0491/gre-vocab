import React from "react";
import { decodeUnicode } from "../../utils/helper";
import { playAudio } from "../../utils/helper";

interface WordDetailsProps {
  word: string;
  phonetics: (
    | { audio: string; text?: undefined }
    | { text: string; audio: string }
  )[];
  index: number;
  wordStatus: {
    [key: number]: "mastered" | "learning" | "untouched";
  };
}

const WordDetails: React.FC<WordDetailsProps> = ({
  word,
  phonetics,
  index,
  wordStatus,
}) => {
  const statusClasses = {
    mastered: "bg-green-100 text-green-800",
    learning: "bg-yellow-100 text-yellow-800",
    untouched: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center capitalize">
        <span className="text-xl font-semibold">
          {word} {"(#0" + (index + 1) + ")"}
        </span>
        <span
          className={`ml-2 font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-xs rounded ${
            statusClasses[wordStatus[index]]
          } mr-20`}
        >
          {wordStatus[index]}
        </span>
        <span className="text-sm text-gray-700 italic ml-8">
          {decodeUnicode(phonetics[0]?.text || "")}
          &nbsp;
        </span>
        <button
          className="inline cursor-pointer mt-2 mb-2"
          onClick={() => playAudio(phonetics[0].audio)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-volume"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8a5 5 0 0 1 0 8"></path>
            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WordDetails;
