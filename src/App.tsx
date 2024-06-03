import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Flashcard from "./flashcard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/flashcard" element={<Flashcard />} />
      </Routes>
    </Router>
  );
};

export default App;

