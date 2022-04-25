import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "./globalFilter";

const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
  border-none
`;

const TableHead = tw.thead`
  p-2
  bg-gray-500
  border-none
`;

const TableRow = tw.tr`
border-none
border-gray-500
`;

const TableHeader = tw.th`
border-none
border-gray-500
p-2
`;

const TableBody = tw.tbody`
`;

const TableData = tw.td`
border-none
border-gray-500
p-5
bg-gray-100
`;

export function Sensores(props) {
  const [sensores, setSensores] = useState([]);

  const fetchSensores = async () => {
    const response = await axios
      .get("http://34.228.77.116/api/data")
      .catch((err) => console.log(err.response.data));

    if (response) {
      const sensores = [response.data];

      console.log("Sensores: ", sensores);
      setSensores(sensores);
    }

  };

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "Sensor_Id",
      },
      {
        Header: "Temperatura",
        accessor: d => `${d.Temperature.substring(0,5)} ${"° C"}`,
      },
      {
        Header: "Humedad",
        accessor: d => `${d.Humidity.substring(0,5)} ${"%"}`,
      },
    ],
    []
  );

  const DatoSensores = useMemo(() => [...sensores], [sensores]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: DatoSensores,
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  useEffect(() => {
    fetchSensores();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
     <br/>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <TableRow
                {...row.getRowProps()}
                className={isEven(idx) ? "bg-green-400 bg-opacity-30" : ""}
              >
                {row.cells.map((cell, idx) => (
                  <TableData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
    
  );
}