const InputApplication = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling form submit..", event);
  };

  return (
    <article>
      <form>
        <label>
          <p>Salary Range</p>
        </label>
        <input name="salary-range" type="text"></input>
        <label>
          <p>Notes</p>
        </label>
        <input name="notes" type="text"></input>
        <label>
          <p>Job Title</p>
        </label>
        <input name="job-title" type="text"></input>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          ADD
        </button>
        <p>Click to save the url and date. All fields are optional.</p>
      </form>
    </article>
  );
};

export default InputApplication;
