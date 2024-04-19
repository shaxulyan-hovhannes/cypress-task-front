import React from "react";
import PropTypes from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const MuiTable = ({ headCells = {}, bodyCells = [] }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            {Object.values(headCells).map((cell, i) => (
              <TableCell key={cell} className="table-head-row-cell">
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyCells.map((row, i) => (
            <TableRow key={row.name}>
              {Object.keys(headCells).map((headRow) => (
                <TableCell
                  key={headRow}
                  className="table-body-row-cell"
                  component="th"
                  scope="row"
                >
                  {headRow === "id" ? ++i : row[headRow]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MuiTable.propTypes = {
  headCells: PropTypes.object,
  bodyCells: PropTypes.array,
};

export default MuiTable;
