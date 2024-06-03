import React from "react";
import Dropdown from "./ui/dropdown";
import ProgressBar from "./ui/progressBar";

interface SidebarProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  wordStatus: {
    [key: number]: "mastered" | "learning" | "untouched";
  };
  totalWords: number;
}
const Sidebar: React.FC<SidebarProps> = ({
  selected,
  setSelected,
  wordStatus,
  totalWords,
}) => {
  let options = ["dummy", "barrons 333"];
  let masteredWords = Object.values(wordStatus).filter(
    (status) => status === "mastered"
  ).length;

  return (
    <div className="w-[324px] bg-gradient-to-b from-white to-gray-100 p-6 h-screen overflow-y-auto shadow-md flex flex-col justify-between">
      <h1 className="text-3xl font-bold mt-8 ml-5 mb-6 text-gray-800">
        Flashcards
      </h1>
      <div className="flex flex-col">
        <div className="mt-6 ml-2 mb-4">
          <p className="text-lg font-semibold text-gray-800">
            Select your word list{" "}
            <span className="text-green-500 text-xl font-medium">
              ({options.length})
            </span>
          </p>
          <Dropdown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <ProgressBar masteredWords={masteredWords} totalWords={totalWords} />
      </div>
      <div className="text-sm text-gray-800 mt-auto">© 2024 Made with ❤️</div>
    </div>
  );
};

export default Sidebar;
