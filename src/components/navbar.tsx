import UserDropdown from "./flashcard/UserDropdown";
import Logo from "./ui/logo";

const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-1.5 z-50">
      <h1 className="w-3/12">
        <a href="/">
          <Logo />
        </a>
      </h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Flashcard</a>
          </li>
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Definition match</a>
          </li>
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Synonyms Practice</a>
          </li>
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Sentence Equivalence</a>
          </li>
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end items-center space-x-4">
        {/* Welcome Message */}
        <span className="text-gray-700 font-medium">Welcome back, Athul</span>
        {/* User Dropdown */}
        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;
