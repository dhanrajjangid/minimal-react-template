import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  email,
  phoneNumber,
  dob
) {
  return { name, email, phoneNumber, dob};
}

const rows = [
  createData("Jane Doe1", "jane.doe@example.com", "987-654-3210", "1985-05-15"),
  createData("John Doe2", "john.doe@example.com", "123-456-7890", "1990-01-01"),
  createData("Jane Doe3", "jane.doe@example.com", "987-654-3210", "1985-05-15"),
  createData("Jane Doe4", "jane.doe@example.com", "987-654-3210", "1985-05-15"),
];

export default function UsersTable() {
  const [selectAll, setSelectAll] = React.useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (index) => {
    // Handle individual row selection logic if needed
  };

  return (
      <TableContainer sx={{minWidth: 700}}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                  color="primary"
                />
              </StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Date of Birth</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.index}>
                <StyledTableCell>
                  <Checkbox
                    checked={selectAll}
                    onChange={() => handleSelectRow(index)}
                    color="primary"
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">{row.dob}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
