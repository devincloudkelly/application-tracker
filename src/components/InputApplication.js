import { useState } from "react";

const InputApplication = () => {
  const [salaryRange, setSalaryRange] = useState("");
  const [notes, setNotes] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitObj = {
      salaryRange: event.target[0].value,
      notes: event.target[1].value,
      jobTitle: event.target[2].value,
      url: window.location.href,
      date: new Date(),
    };
    console.log("handling form submit..here is the submitObj ", submitObj);
    // Need to create an 'applications' state value in App, then pass down the setState for that so that I can save each submission.
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "salary-range") {
      setSalaryRange(value);
    }
    if (name === "notes") {
      setNotes(value);
    }
    if (name === "job-title") {
      setJobTitle(value);
    }
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Salary Range</p>
        </label>
        <input
          name="salary-range"
          type="text"
          value={salaryRange}
          onChange={handleChange}
        ></input>
        <label>
          <p>Notes</p>
        </label>
        <input
          name="notes"
          type="text"
          value={notes}
          onChange={handleChange}
        ></input>
        <label>
          <p>Job Title</p>
        </label>
        <input
          name="job-title"
          type="text"
          value={jobTitle}
          onChange={handleChange}
        ></input>
        <button type="submit">ADD</button>
      </form>
      <p>Click to save the url and date. All fields above are optional.</p>
    </article>
  );
};

export default InputApplication;
