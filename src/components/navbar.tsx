import { useUser } from "@clerk/clerk-react";
import UserDropdown from "./flashcard/UserDropdown";
import Logo from "./ui/logo";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Loading state can be a spinner or a simple placeholder
    return null; // or a loading component
  }

  return (
    <header className="header sticky top-0 bg-white shadow-sm flex items-center justify-between px-8 py-2 z-50">
      {/* Logo Section */}
      <h1 className="w-3/12">
        <a href="/">
          <Logo />
        </a>
      </h1>

      {/* Navigation Menu */}
      <nav className="nav font-medium text-lg">
        <ul className="flex items-center space-x-6">
          <li className="border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-600 transition-colors duration-300">
            <a href="/flashcard" className="py-2">
              Flashcards
            </a>
          </li>
          <li className="border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-600 transition-colors duration-300">
            <a href="/definition-match" className="py-2">
              Definition Match
            </a>
          </li>
          <li className="border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-600 transition-colors duration-300">
            <a href="/synonyms-practice" className="py-2">
              Synonyms Practice
            </a>
          </li>
          <li className="border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-600 transition-colors duration-300">
            <a href="/sentence-equivalence" className="py-2">
              Sentence Equivalence
            </a>
          </li>
        </ul>
      </nav>

      {/* User Section */}
      <div className="w-3/12 flex justify-end items-center space-x-4">
        {isSignedIn ? (
          <>
            <span className="text-gray-700 font-medium">
              Welcome back, {user.firstName}
            </span>
            <UserDropdown />
          </>
        ) : (
          <a
            href="/sign-in"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login to save your progress
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
