import Card from "./components/card";
import Sidebar from "./components/sideBar";
import barron from "./assets/barrons.json"
import {useState} from "react";
import dummy from "./assets/dummy.json"

const App = () => {
  const [selected, setSelected] = useState("dummy");
  return (
    <>
      <div className="flex gap-x-4 ">
        <Sidebar selected={selected} setSelected={setSelected} />
        <div className="mr-15 flex-1 h-screen p-4 pl-0">
          {selected === "barrons 333" ? (
            <Card words={barron} />
          ) : selected === "dummy" ? (
            <Card words={dummy} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default App;
