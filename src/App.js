import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  // Need to return a button group at top to switch between adding an app, viewing old apps
  // Then return the content based on which button is selected
  const [isNewAppView, setIsNewAppView] = useState(true);

  return (
    <div className="App">
      Hello, world
      <ButtonGroup view={isNewAppView} setView={setIsNewAppView} />
    </div>
  );
}

export default App;
