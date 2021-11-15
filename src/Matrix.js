const Matrix = (props) => {
  const columns = props.columns;
  const rows = props.rows;
  const currentColumn = +props.current.column;
  const currentRow = +props.current.row;
  console.log(`${currentColumn},${currentRow}`);
  const _array = (n) => {
    return [...Array(10).keys()];
  };
  const tableHeader = _array(columns + 1).map((i) => {
    if (i) {
      return (
        <td className="header" key={`${i}ch`}>
          {i.toString().padStart(5, "     ")}
        </td>
      );
    } else {
      return <td key={"0ch"}></td>;
    }
  });
  const tableRows = _array(rows + 1)
    .filter((i) => i > 0)
    .map((r) => {
      const tableColumns = _array(columns + 1).map((c) => {
        if (c) {
          if (currentColumn === c && currentRow === r) {
            return (
              <td className="active" key={`${c}${r}c`}>
                {(c * r).toString().padStart(5, "     ")}
              </td>
            );
          } else {
            return <td key={`${c}${r}c`}>{c * r}</td>;
          }
        } else {
          return (
            <td className="row" key={`0${r}`}>
              {r}
            </td>
          );
        }
      });
      return <tr key={`${r}r`}>{tableColumns}</tr>;
    });
  return (
    <table>
      <thead>
        <tr>{tableHeader}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Matrix;
