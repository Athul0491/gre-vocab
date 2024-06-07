import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-4xl font-semibold mb-12">Welcome to Crush GRE</h1>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <Link
          to="/flashcard"
          className="block w-72 py-4 text-center bg-gray-100 text-lg font-medium rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition duration-300"
        >
          Flashcards
        </Link>
        <Link
          to="/definition-match"
          className="block w-72 py-4 text-center bg-gray-100 text-lg font-medium rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition duration-300"
        >
          Definition Match
        </Link>
        <Link
          to="/synonyms-practice"
          className="block w-72 py-4 text-center bg-gray-100 text-lg font-medium rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition duration-300"
        >
          Synonyms Practice
        </Link>
        <Link
          to="/sentence-equivalence"
          className="block w-72 py-4 text-center bg-gray-100 text-lg font-medium rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition duration-300"
        >
          Sentence Equivalence
        </Link>
      </nav>
    </div>
  );
};

export default Home;
