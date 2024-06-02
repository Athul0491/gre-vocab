import React from "react";
import Dropdown from "./ui/dropdown";

interface SidebarProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const Sidebar: React.FC<SidebarProps> = ({ selected, setSelected }) => {
    let options = ["dummy", "barrons 333"];
  return (
    <div className="w-[324px] bg-white p-6 h-screen overflow-y-auto shadow-md flex flex-col justify-between">
      <h1 className="text-3xl font-bold mt-8 ml-5 mb-6 text-gray-800">
        Flashcards
      </h1>
      <div className="flex flex-col">
        <div className="mt-6 ml-2">
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
        <div className="mb-6">{/* Add your content here */}</div>
      </div>
      <div className="text-sm text-gray-800 mt-auto">© 2024 Made with ❤️</div>
    </div>
  );
};
{
  /* <div>
        <ul className="space-y-4">
          <li className="text-lg hover:text-green-700 cursor-pointer">
            Item 1
          </li>
          <li className="text-lg hover:text-green-700 cursor-pointer">
            Item 2
          </li>
          <li className="text-lg hover:text-green-700 cursor-pointer">
            Item 3
          </li>
        </ul>
      </div> */
}
export default Sidebar;
