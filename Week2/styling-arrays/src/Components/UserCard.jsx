function UserCard(props) {
  return (
    <>
      <div className="card">
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
export default UserCard;
