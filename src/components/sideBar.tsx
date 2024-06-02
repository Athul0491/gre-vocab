import React from "react";
import Dropdown from "./ui/dropdown";

interface SidebarProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const Sidebar: React.FC<SidebarProps> = ({ selected, setSelected }) => {
    let options = ["dummy", "barrons 333"];
  return (
    <div className="w-[324px] bg-green-200 p-6 h-screen overflow-y-auto shadow-lg flex flex-col justify-between">
      <h1 className="text-2xl font-bold mt-12 ml-5">Flashcards</h1>
      <div className="mt-8 flex flex-col">
        <div className="mb-4">
          Select your word list
          <Dropdown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Recent Flashcards</p>
          {/* Add recent flashcards here */}
        </div>
        <div>
          <p className="text-lg font-semibold">Quick Links</p>
          {/* Add quick links here */}
        </div>
      </div>
      <div className="text-sm text-gray-600 mt-auto">© 2024 Made with love</div>
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
