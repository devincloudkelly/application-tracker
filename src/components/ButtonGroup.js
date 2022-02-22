const ButtonGroup = (props) => {
  let { view, setView } = props;

  const handleClick = (e) => {
    console.log("handling click", e.target.id);
  };

  return (
    <div className="btn-group">
      <button
        id="add-new-btn"
        className={view ? "selected" : ""}
        onClick={(e) => handleClick(e)}
      >
        Add New
      </button>
      <button
        id="view-all-btn"
        className={!view ? "selected" : ""}
        onClick={(e) => handleClick(e)}
      >
        View All
      </button>
    </div>
  );
};

export default ButtonGroup;
