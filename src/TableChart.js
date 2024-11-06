import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const TableChart = props => {
  const data = props.data.slice(1,100);
  return (
    <div>
      <h2 style={{marginLeft:"2px"}}>Table for electric Vehicle</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell align="right">Clean Alternative Fuel Vehicle (CAFV) Eligibility</TableCell>
              <TableCell align="right">Electric Utility</TableCell>
              <TableCell align="right">Electric Vehicle Type</TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Electric Range</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.City}</TableCell>
                <TableCell align="right">{row["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]}</TableCell>
                <TableCell align="right">{row["Electric Utility"]}</TableCell>
                <TableCell align="right">{row["Electric Vehicle Type"]}</TableCell>
                <TableCell align="right">{row["Make"]}</TableCell>
                <TableCell align="right">{row["Electric Range"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableChart;
