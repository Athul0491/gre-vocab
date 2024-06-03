import React from "react";

interface DropdownProps {
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  setSelected,
}) => {
  return (
    <div className="mt-2 dropdown inline-block relative">
      <button className="border font-medium bg-white text-gray-700 gap-2 py-3 px-4 rounded inline-flex justify-center items-center">
        <span className="mr-1">{selected}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
        {options.map((option, index) => (
          <li key={index} className="border-b border-gray-100">
            <div
              className="rounded-t cursor-pointer font-medium bg-white text-gray-600 hover:bg-gray-100 py-2 px-6 block whitespace-no-wrap"
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
