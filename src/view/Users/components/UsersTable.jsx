import React, { useState } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const StyledTableHead = styled.thead`
  color: #fff;
  background-color: #e0e0e0;
`;

const StyledTableCell = styled.th`
  padding: 15px;
  text-align: left;
`;

const StyledTableRow = styled.tr`

  &:nth-child(even) {
    background-color: #f1f1f1;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledTableCellBody = styled.td`
  padding: 15px;
  text-align: left;
`;

const StyledCheckboxCell = styled.td`
  padding: 15px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const usersData = [
  { name: "Jane Doe1", email: "jane.doe@example.com", phoneNumber: "987-654-3210", dob: "1985-05-15" },
  { name: "John Doe2", email: "john.doe@example.com", phoneNumber: "123-456-7890", dob: "1990-01-01" },
  { name: "Jane Doe3", email: "jane.doe@example.com", phoneNumber: "987-654-3210", dob: "1985-05-15" },
  { name: "Jane Doe4", email: "jane.doe@example.com", phoneNumber: "987-654-3210", dob: "1985-05-15" },
];

const UsersTable = () => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (index) => {
    // Handle individual row selection logic if needed
  };

  return (
    <StyledTable>
      <StyledTableHead>
          <StyledTableCell>
            <Checkbox
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
          </StyledTableCell>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Email</StyledTableCell>
          <StyledTableCell>Phone Number</StyledTableCell>
          <StyledTableCell>Date of Birth</StyledTableCell>
      </StyledTableHead>
      <tbody>
        {usersData.map((row, index) => (
          <StyledTableRow key={index}>
            <StyledCheckboxCell>
              <Checkbox
                type="checkbox"
                checked={selectAll}
                onChange={() => handleSelectRow(index)}
              />
            </StyledCheckboxCell>
            <StyledTableCellBody>{row.name}</StyledTableCellBody>
            <StyledTableCellBody>{row.email}</StyledTableCellBody>
            <StyledTableCellBody>{row.phoneNumber}</StyledTableCellBody>
            <StyledTableCellBody>{row.dob}</StyledTableCellBody>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default UsersTable;
