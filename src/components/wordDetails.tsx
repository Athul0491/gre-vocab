import React from "react";

interface WordDetailsProps {
  word: string;
  index: number;
  wordStatus: {
    [key: number]: "mastered" | "learning" | "untouched";
  };
}
const WordDetails: React.FC<WordDetailsProps> = ({
  word,
  index,
  wordStatus,
}) => {
    const statusClasses = {
      mastered: "bg-green-100 text-green-800",
      learning: "bg-yellow-100 text-yellow-800",
      untouched: "bg-red-100 text-red-800",
    };
  return (
    <div className="flex justify-center">
      <div className="flex justify-between capitalize">
        {word + " (#0" + (index + 1) + ")  "}
        <span className={`ml-2 mr-2 font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-xs rounded ${statusClasses[wordStatus[index]]}`}>
          {wordStatus[index]}
        </span>
        {"   "}
        <button className="inline cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-table icon-table-volume inline-block"
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
