import SelectStudent from "./SelectStudent";
import { useState } from "react";
function StudentList() {
  const students = ["Josh", "Kyle", "Gianni", "Colleen"];
  const [selectedStudent, setSelectedStudent] = useState("");
  function handleSelectedStudent(event) {
    setSelectedStudent(event.target.value);
  }
  return (
    <>
      <h2>StudentList</h2>
      <h4>Selected Student: {selectedStudent}</h4>
      {/* passing the student list and a callback functions via props */}
      <SelectStudent onSelect={handleSelectedStudent} students={students} />
    </>
  );
}

export default StudentList;
