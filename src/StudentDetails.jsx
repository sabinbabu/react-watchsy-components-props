import { useState } from "react";

const StudentDetails = () => {
  const style = { color: "red" };
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };

  const subNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div class="d-flex justify-content-center align-items-center flex-column">
      <h1>Counter</h1>
      <button class="btn border" onClick={subNumber} style={style}>
        -
      </button>
      <p>{number}</p>
      <button class="btn border" onClick={addNumber} style={style}>
        +
      </button>
    </div>
  );
};
export default StudentDetails;
