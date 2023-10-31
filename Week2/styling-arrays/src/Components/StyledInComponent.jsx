function StyledInComponent(props) {
  //Create a style object
  const styleObject = {
    backgroundColor: "lightblue", //background-color
    padding: "15px",
    borderRadius: "20px",
    boxShadow: "0px 4px 6px #000",
  };
  return (
    <>
      <div style={styleObject} className="card">
        <h2 className="card-title">{props.userName}</h2>
        <div className="card-body">
          <div className="card-label">Email: </div>
          <div>{props.email}</div>
          <div className="card-label">Phone: </div>
          <div>{props.phoneNumber}</div>
          <div className="card-label">Address: </div>
          <div>{props.address}</div>
        </div>
      </div>
    </>
  );
}
export default StyledInComponent;
