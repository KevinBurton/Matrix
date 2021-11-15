import "./styles.css";
import Matrix from "./Matrix";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Matrix columns={10} rows={10} current={{ column: 4, row: 5 }} />
    </div>
  );
}
