import { useState, useEffect } from "react";
function Area() {
  //Length With and Area all tracked by state
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);
  //these are just functions that fire when the inputs change
  function handleLengthChange(e) {
    setLength(e.target.value);
  }
  function handleWidthChange(e) {
    setWidth(e.target.value);
  }
  //useEffect(callback, [dependencies])
  //This code will run anytime length or width changes
  useEffect(() => {
    const calcArea = length * width;
    setArea(calcArea);
  }, [length, width]);
  return (
    <>
      <h2>Area</h2>
      <div>
        <label htmlFor="length">Length: </label>
        <input type="number" value={length} onChange={handleLengthChange} />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input type="number" value={width} onChange={handleWidthChange} />
      </div>
      <div>
        <p>Area of Rectangle: {area}</p>
      </div>
    </>
  );
}

export default Area;
