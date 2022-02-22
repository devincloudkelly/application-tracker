import ButtonGroup from "./components/ButtonGroup";

function App() {
  // Need to return a button group at top to switch between adding an app, viewing old apps
  // Then return the content based on which button is selected
  return (
    <div className="App">
      Hello, world
      <ButtonGroup />
    </div>
  );
}

export default App;
