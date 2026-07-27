import { useState } from "react";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";


function App() {
  const [isgamplay, setgameplay] = useState(false);
  const togglegame = () => {
    setgameplay((prev) => !prev);
  };
 
  return (
    <div>
      {isgamplay ? <Gameplay /> : <Startgame toggle={togglegame} />}
     
    </div>
  );
}

export default App;
