import {useState, useEffect} from 'react';

const DataTable = ({ caption, header, rows }) => {
  const [thead, setThead] = useState(null);
  const [tbody, setTbody] = useState(null);

  useEffect(() => {
    if (!header) return;
    if (thead) return;
    const headerItems = [];
    Object.keys(header).forEach((key, index) => 
      headerItems.push(<th key={`theader-${index}`} scope="col">{header[key]}</th>));
    let headerItem = (
      <thead>
        <tr>
          {headerItems}
        </tr>
      </thead>
    )
    setThead(headerItem);
  }, [header, thead])

  useEffect(() => {
    if (!rows) return;
    if (tbody) return;
    const trItems = [];
    rows.map((row, rowIndex) => {
      let rowItems = [];
      Object.keys(row).forEach((key, index) => {
        const data = rows[rowIndex][key];
        rowItems.push(<td key={`td-${key}-${rowIndex}-${index}`} data-label={`${key}`}>{data.toString()}</td>)
      });
      trItems.push(
        <tr key={`tr-${rowIndex}`}>
          {rowItems}
        </tr>
      );
    });
    const tbodyItem = (
      <tbody>
        {trItems}
      </tbody>
    )
    setTbody(tbodyItem);
  }, [rows, tbody])

  return (
    <table>
      <caption>{caption}</caption>
      {thead}
      {tbody}
    </table>
  );
};

export default DataTable;
