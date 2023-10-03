import { useState } from "react";
function GroceryList() {
  //state can also be used to track
  const [groceries, setGroceries] = useState(["Milk", "Eggs", "Bread"]);
  const [newItem, setNewItem] = useState("");
  function handleItemChange(event) {
    setNewItem(event.target.value);
  }
  //function that gets the current value of newItem and adds to the end of the array
  function addToArray() {
    //when adding to an array that is tracked by state
    //we are providing a brand new array with all the information
    //from the previous array with new item added
    setGroceries([...groceries, newItem]);
    setNewItem("");
  }
  return (
    <>
      <h2>Grocery List</h2>
      <ul>
        {groceries.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <input onChange={handleItemChange} value={newItem} type="text" />
      <button onClick={addToArray}>Add new item</button>
    </>
  );
}

export default GroceryList;
