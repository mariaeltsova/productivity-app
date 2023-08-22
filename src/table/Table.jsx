import fakedata from "./MOCK_DATA.json";
import { useTable } from "react-table";
import { useMemo } from 'react'
import { Menu } from '../global/Menu';

export function Table() {
  const data = useMemo(() => fakedata, []);
  const columns = useMemo(()=> [
    {
        Header : "ID",
        accessor: "id",
      },
      {
        Header : "First name",
        accessor: "first_name",
      },
      {
        Header : "Last name",
        accessor: "last_name",
      },
      {
        Header : "Email",
        accessor: "email",
      },
      {
        Header : "Gender",
        accessor: "gender",
      },
      {
        Header : "Uni",
        accessor: "university",
      },
  ], []);
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data}); //a bunch of functions is returned, i can grab them with {}


  return <div className="Table">
    <Menu></Menu>
    <div>
        <table {...getTableProps()}>
            <thead>
{headerGroups.map((headerGroup) => (
    <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
{headerGroup.headers.map((column) => (
    <th key={column} {...column.getHeaderProps()}>
{column.render("Header")}
    </th>
))}
    </tr>
))}
            </thead>
            <tbody {...getTableBodyProps()}>
    {rows.map((row) => {
        prepareRow(row)
        return (
            <tr key={row} {...row.getRowProps()}>
{row.cells.map((cell) => (
  <td key={cell} {...cell.getCellProps()}>{cell.render("Cell")}</td> 
))}
<td><input type='checkbox'></input></td>
            </tr>
        )
    })}
            </tbody>
        </table>
    </div>
  </div>;
}
