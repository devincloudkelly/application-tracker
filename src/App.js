import { useState, useEffect } from "react";
import ButtonGroup from "./components/ButtonGroup";
import InputApplication from "./components/InputApplication";
import ViewApplications from "./components/ViewApplications";

function App() {
  // Then return the content based on which button is selected
  const [selectedView, setSelectedView] = useState("add-new-btn");
  const [applications, setApplications] = useState(() => {
    const persistedApplications = JSON.parse(
      localStorage.getItem("applications")
    );
    return persistedApplications !== null ? persistedApplications : [];
  });

  const handleApplication = (application) => {
    console.log(
      "handling applications..application and applications state",
      application,
      applications
    );
    setApplications([...applications, application]);
  };

  // runs once on component mount, pulls applicatins from localStorage.
  // useEffect(() => {
  //   console.log("getting applications from localStorage in useEffect");
  //   setApplications(JSON.parse(localStorage.getItem("applications")));
  // }, []);

  // updates local storate when applications state updates
  useEffect(() => {
    console.log("updating localStorage with updated applications");
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  return (
    <section className="App">
      <ButtonGroup view={selectedView} setView={setSelectedView} />
      {selectedView === "add-new-btn" ? (
        <InputApplication
          applications={applications}
          setApplications={setApplications}
          handleApplication={handleApplication}
        />
      ) : (
        <ViewApplications applications={applications} />
      )}
    </section>
  );
}

export default App;
