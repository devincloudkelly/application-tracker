import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  // Need to return a button group at top to switch between adding an app, viewing old apps
  // Then return the content based on which button is selected
  const [selectedView, setSelectedView] = useState("add-new-btn");

  return (
    <section className="App">
      Hello, world
      <ButtonGroup view={selectedView} setView={setSelectedView} />
    </section>
  );
}

export default App;
