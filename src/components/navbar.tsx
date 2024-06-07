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
        <ul className="flex items-center space-x-8">
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
            <span className="text-gray-800 font-medium">
              Welcome back,
              <span className="text-amber-600 font-bold hover:text-amber-800 transition duration-300 ml-1">
                {user.firstName}
              </span>
            </span>
            <UserDropdown />
          </>
        ) : (
          <a
            href="/sign-in"
            className="py-2 px-4 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 hover:text-blue-600 transition duration-300"
          >
            Sign In
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
