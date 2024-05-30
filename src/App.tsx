import Card from "./components/card";
import data from "./assets/barrons.json"
const App = () => {
  return (
    <Card words={data} />
  );
};

export default App;
