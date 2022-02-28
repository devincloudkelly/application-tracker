import { useState } from "react";

const InputApplication = () => {
  const [salaryRange, setSalaryRange] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling form submit..", event.target);
  };

  const handleChange = (event) => {
    // handle change based on which input is updating
    let name = event.target.name;
    let value = event.target.value;
    if (name === "salary-range") {
      setSalaryRange(value);
    }
  };

  return (
    <article>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          <p>Salary Range</p>
        </label>
        <input
          name="salary-range"
          type="text"
          value={salaryRange}
          onChange={(event) => handleChange(event)}
        ></input>
        <label>
          <p>Notes</p>
        </label>
        <input name="notes" type="text"></input>
        <label>
          <p>Job Title</p>
        </label>
        <input name="job-title" type="text"></input>
        <button type="submit">ADD</button>
        <p>Click to save the url and date. All fields are optional.</p>
      </form>
    </article>
  );
};

export default InputApplication;
