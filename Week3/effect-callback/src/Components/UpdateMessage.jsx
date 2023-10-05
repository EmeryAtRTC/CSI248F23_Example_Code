function UpdateMessage(props) {
  return (
    <>
      <h3>Change the Message</h3>
      {/* on Click we call the setMessage function that was passed via props */}
      <button onClick={() => props.setMessage("Hello From Child")}>
        Hello
      </button>
    </>
  );
}

export default UpdateMessage;
