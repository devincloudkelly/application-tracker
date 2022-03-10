const ViewApplications = (props) => {
  const { applications } = props;

  const renderApplications = () => {
    console.log("rendering applications...", applications);
    return applications.forEach((application) => {
      console.log(application);
      const { salaryRange, notes, jobTitle, url, date } = application;
      return (
        <div className="app-div">
          <div>
            <h5>{jobTitle}</h5>
            <h5>{salaryRange}</h5>
          </div>
          <div>
            <h5>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </h5>
            <h5>{date.toDateString()}</h5>
          </div>
        </div>
      );
    });
  };

  return (
    <article>
      <h2>View Applications</h2>
      {renderApplications()}
    </article>
  );
};

export default ViewApplications;
