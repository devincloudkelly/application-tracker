const ButtonGroup = (props) => {
  let { view, setView } = props;

  const handleClick = (e) => {
    console.log("handling click, view, e.target.id", view, e.target.id);
    if (view !== e.target.id) {
      setView(e.target.id);
    }
  };

  return (
    <div className="btn-group">
      <button
        id="add-new-btn"
        className={view === "add-new-btn" ? "selected" : ""}
        onClick={(e) => handleClick(e)}
      >
        Add New
      </button>
      <button
        id="view-all-btn"
        className={view === "view-all-btn" ? "selected" : ""}
        onClick={(e) => handleClick(e)}
      >
        View All
      </button>
    </div>
  );
};

export default ButtonGroup;
