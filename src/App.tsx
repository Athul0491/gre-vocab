import "./index.css";
import Flashcard from "./flashcard";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

const App = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Flashcard />
      </SignedIn>
    </div>
  );
};

export default App;
