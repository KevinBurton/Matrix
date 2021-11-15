import "./styles.css";
import Matrix from "./Matrix";
import { useState } from "react";

export default function App() {
  const columnInput = (e) => {
    setInputColumn(e.target.value);
  };
  const rowInput = (e) => {
    setInputRow(e.target.value);
  };
  const [inputColumn, setInputColumn] = useState(0);
  const [inputRow, setInputRow] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <label htmlFor="inputColumn">Column</label>
      <input id="inputColumn" type="number" onChange={columnInput} />
      <label htmlFor="inputRow">Row</label>
      <input id="inputRow" type="number" onChange={rowInput} />
      <Matrix
        columns={10}
        rows={10}
        current={{ column: inputColumn, row: inputRow }}
      />
    </div>
  );
}
