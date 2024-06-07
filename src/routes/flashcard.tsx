import { useState, useEffect } from "react";
import Card from "../components/flashcard/card";
import Sidebar from "../components/flashcard/sideBar";
import barron from "../assets/barrons.json";
import dummy from "../assets/dummy.json";
import Navbar from "../components/navbar";

const Flashcard = () => {
  const [selected, setSelected] = useState("dummy");
  const [words, setWords] = useState(dummy);
  const [wordStatus, setWordStatus] = useState<{
    [key: number]: "mastered" | "learning" | "untouched";
  }>(() => {
    const initialStatus: {
      [key: number]: "mastered" | "learning" | "untouched";
    } = {};
    dummy.forEach((_, index) => {
      initialStatus[index] = "untouched";
    });
    return initialStatus;
  });

  useEffect(() => {
    if (selected === "barrons 333") {
      setWords(barron);
    } else if (selected === "dummy") {
      setWords(dummy);
    }

    // Reset wordStatus when words change
    const initialStatus: {
      [key: number]: "mastered" | "learning" | "untouched";
    } = {};
    const selectedWords = selected === "barrons 333" ? barron : dummy;
    selectedWords.forEach((_, index) => {
      initialStatus[index] = "untouched";
    });
    setWordStatus(initialStatus);
  }, [selected]);

  return (
    <div>
      <Navbar />
      <div className="flex gap-x-4">
        <Sidebar
          selected={selected}
          setSelected={setSelected}
          wordStatus={wordStatus}
          totalWords={words.length}
        />
        <div className="mr-4 flex-1 h-screen p-4 pl-0">
          <Card
            words={words}
            wordStatus={wordStatus}
            setWordStatus={setWordStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
