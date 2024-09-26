// FormModal.js
import React, { useState } from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  FormField,
  Label,
  Input,
  Select,
  SaveButton,
} from "./StyledComponents";
import { ContainedButton, OutlinedButton, TextField } from "@/components/Common/FormInputs";

const FormModal = ({ user, closeModal }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    company: user.company,
    role: user.role,
    deposit: user.deposit,
    addDeposit: "",
    remainingAmount: user.remainingAmount,
    status: user.status,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Logic to handle saving of the data
    closeModal();
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <form>
          <FormField>
            <Label>Name</Label>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Company</Label>
            <Select
              name="company"
              value={formData.company}
              onChange={handleChange}
            >
              <option value="Freshprints">Freshprints</option>
              <option value="Revolut">Revolut</option>
            </Select>
          </FormField>

          <FormField>
            <Label>Role</Label>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value="Operations Manager">Operations Manager</option>
              <option value="Operations Associate">Operations Associate</option>
              <option value="Inside Sales Associate">
                Inside Sales Associate
              </option>
            </Select>
          </FormField>

          <FormField>
            <Label>Deposit</Label>
            <TextField name="deposit" value={formData.deposit} disabled />
          </FormField>

          <FormField>
            <Label>Add More Deposit</Label>
            <TextField
              name="addDeposit"
              value={formData.addDeposit}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Label>Remaining Amount</Label>
            <TextField
              name="remainingAmount"
              value={formData.remainingAmount}
              disabled
            />
          </FormField>

          <FormField>
            <Label>Status</Label>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Applied">Applied</option>
              <option value="Assessment Pending">Assessment Pending</option>
              <option value="Assessment Completed">Assessment Completed</option>
              <option value="Interview Pending">Interview Pending</option>
              <option value="Interview Completed">Interview Completed</option>
              <option value="Offer Letter Received">
                Offer Letter Received
              </option>
            </Select>
          </FormField>
          <div style={{display: 'flex', gap: 5}}>
          <OutlinedButton onClick={closeModal}>Cancel</OutlinedButton>
          <ContainedButton onClick={handleSave}>Save</ContainedButton>
          </div>
        </form>
      </ModalContainer>
    </Overlay>
  );
};

export default FormModal;
