function SelectStudent(props) {
  return (
    <>
      <h2>SelectStudent</h2>
      <label htmlFor="">Select a student:</label>
      <select onChange={props.onSelect} name="" id="">
        <option value="">--Select--</option>
        {props.students.map((student, index) => {
          return (
            <option key={index} value={student}>
              {student}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectStudent;
