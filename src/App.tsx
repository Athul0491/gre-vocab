import "./index.css";
import { Routes, Route } from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Home from "./routes/Home";
import Flashcard from "./routes/flashcard.tsx";
import DefinitionMatch from "./routes/definition-match.tsx";
import SynonymsPractice from "./routes/synonyms-practice.tsx";
import SentenceEquivalence from "./routes/sentence-equivalence.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Routes>
        <Route
          path="/sign-in/*"
          element={
            <SignIn forceRedirectUrl="/" routing="path" path="/sign-in" />
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <SignUp forceRedirectUrl="/" routing="path" path="/sign-in" />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/definition-match" element={<DefinitionMatch />} />
        <Route path="/synonyms-practice" element={<SynonymsPractice />} />
        <Route path="/sentence-equivalence" element={<SentenceEquivalence />} />
      </Routes>
    </ClerkProvider>
  );
};

export default App;
