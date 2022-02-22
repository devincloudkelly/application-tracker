const ButtonGroup = (props) => {
  let { view, setView } = props;

  return (
    <div className="btn-group">
      <button id="add-new-btn">Add New</button>
      <button id="view-all-btn">View All</button>
    </div>
  );
};

export default ButtonGroup;
