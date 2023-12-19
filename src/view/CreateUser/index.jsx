// CreateUserForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
  &:focus {
    border-color: #3498db;
  }
`;

const Button = styled.button`
  background-color: #4a4a4a;
  color: #fff; /* Updated to white */
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s;
  &:hover {
    background-color: #333; /* Darker shade on hover */
  }
`;

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <FormContainer>
      <h2>Create User</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Create User</Button>
      </Form>
    </FormContainer>
  );
};

export default CreateUserForm;
