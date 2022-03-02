import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import InputApplication from "./components/InputApplication";
import ViewApplications from "./components/ViewApplications";

function App() {
  // Then return the content based on which button is selected
  const [selectedView, setSelectedView] = useState("add-new-btn");

  return (
    <section className="App">
      <ButtonGroup view={selectedView} setView={setSelectedView} />
      {selectedView === "add-new-btn" ? (
        <InputApplication />
      ) : (
        <ViewApplications />
      )}
    </section>
  );
}

export default App;
