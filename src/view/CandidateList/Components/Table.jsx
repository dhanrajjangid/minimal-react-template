import React, { useState } from "react";
import {
  TableContainer,
  TableElement,
  Thead,
  Th,
  Td,
  EditButton,
  MobileView,
  MobileCard,
  MobileCardContent,
} from "./StyledComponents"; // Update styled components as well
import FormModal from "./FormModal";
import { ContainedButton } from "@/components/Common/FormInputs";

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Example data (replace this with actual data)
  const users = [
    {
      name: "Adam Trantow",
      date: "22-09-2024",
      company: "Revolute",
      role: "UI Designer",
      deposit: 1000,
      remainingAmount: 500,
      status: "Active",
    },
    {
      name: "Angel Rolfson-Kulas",
      date: "22-09-2024",
      company: "Freshprints",
      role: "UI Designer",
      deposit: 1500,
      remainingAmount: 300,
      status: "Active",
    },
    {
      name: "Betty Hammes",
      date: "22-09-2024",
      company: "Freshprints",
      role: "UI Designer",
      deposit: 2000,
      remainingAmount: 1000,
      status: "Active",
    },
    {
      name: "Billy Braun",
      date: "22-09-2024",
      company: "Freshprints",
      role: "UI Designer",
      deposit: 1200,
      remainingAmount: 600,
      status: "Banned",
    },
    {
      name: "Billy Stoltenberg",
      date: "22-09-2024",
      company: "Freshprints",
      role: "Leader",
      deposit: 2500,
      remainingAmount: 800,
      status: "Banned",
    },
  ];

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      {/* Desktop View */}
      <TableContainer>
        <TableElement>
          <Thead>
            <tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Company</Th>
              <Th>Role</Th>
              <Th>Deposit</Th>
              <Th>Remaining Amount</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
            </tr>
          </Thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{user.date}</Td>
                <Td>{user.company}</Td>
                <Td>{user.role}</Td>
                <Td>₹{user.deposit}</Td>
                <Td>₹{user.remainingAmount}</Td>
                <Td>{user.status}</Td>
                <Td>
                  <EditButton onClick={() => openModal(user)}>Edit</EditButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableElement>
      </TableContainer>

      {/* Mobile View */}
      <MobileView>
        {users.map((user, index) => (
          <MobileCard key={index}>
            <MobileCardContent>
              <strong>Name:</strong> {user.name}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Date:</strong> {user.date}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Company:</strong> {user.company}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Role:</strong> {user.role}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Deposit:</strong> ₹{user.deposit}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Remaining Amount:</strong> ₹{user.remainingAmount}
            </MobileCardContent>
            <MobileCardContent>
              <strong>Status:</strong> {user.status}
            </MobileCardContent>
            <ContainedButton
              padding="10px 5px"
              backgroundColor="#BD9BC7"
              border="1px solid #BD9BC7"
              onClick={() => openModal(user)}
            >
              Edit
            </ContainedButton>
          </MobileCard>
        ))}
      </MobileView>
      {isModalOpen && <FormModal user={selectedUser} closeModal={closeModal} />}
    </>
  );
};

export default Table;
