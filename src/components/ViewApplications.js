const ViewApplications = (props) => {
  const { applications } = props;

  const renderApplications = (apps) => {
    console.log("rendering applications...", apps);
    // for (
    //   let application = 0;
    //   application < applications.length;
    //   application++
    // ) {
    return apps.map((app) => {
      console.log(app);
      const { salaryRange, notes, jobTitle, url, date } = app;

      return (
        <li key={date.toISOString()} className="app-div">
          <div className="app-line">
            <h5>
              {jobTitle} &nbsp;&nbsp;&nbsp; ${salaryRange}
            </h5>
          </div>
          <div className="app-line">
            <h5>
              <a href={url} target="_blank" rel="noreferrer">
                link
              </a>{" "}
              &nbsp;&nbsp;&nbsp; {date.toLocaleString()}
            </h5>
          </div>
        </li>
      );
    });
  };

  return (
    <article>
      <h2>View Applications</h2>
      <ul>{renderApplications(applications)}</ul>
    </article>
  );
};

export default ViewApplications;
