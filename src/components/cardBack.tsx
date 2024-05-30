import React from "react";

interface CardbackProps {
  onClick: () => void;
  animateCard: boolean;
  currentIndex: number;
  words: {
    word: string;
    phonetics: (
      | { audio: string; text?: undefined }
      | { text: string; audio: string }
    )[];
    meanings: {
      partOfSpeech: string;
      definition: string;
    }[];
    frequency: string;
  }[];
}

const Cardback: React.FC<CardbackProps> = ({
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
      } cursor-pointer font-bold text-lg`}
    >
      <div className="card-back p-8 bg-white overflow-hidden inset-0 rounded-lg shadow-lg border border-gray-200 mx-auto max-w-2xl">
        <div className="flex flex-col items-center space-y-4">
          {words[currentIndex].meanings.map((meaning, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 bg-gray-50 w-4/5 md:w-3/5 lg:w-2.5/5"
            >
              <div className="flex items-start space-x-2">
                <span className="font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-sm bg-blue-100 text-blue-800 rounded-full">
                  {meaning.partOfSpeech}
                </span>
                <p className="text-sm text-gray-900 leading-normal font-normal whitespace-normal">
                  {meaning.definition}
                </p>
              </div>
            </div>
          ))}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 w-4/5 md:w-3/5 lg:w-2.5/5">
            <div className="flex items-start space-x-2">
              <span className="font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-sm bg-blue-100 text-blue-800 rounded-full">
                Example
              </span>
              <p className="text-sm text-gray-900 leading-normal font-normal whitespace-normal">
                This is a sentence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardback;
