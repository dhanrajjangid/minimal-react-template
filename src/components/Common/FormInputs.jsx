import React from 'react';
import styled from 'styled-components';

// TextField component
export const TextField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 100%;
  font-size: 1rem;
`;

// Dropdown component
export const Dropdown = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

// Date Picker component
export const DatePicker = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

// Button component (Contained)
export const ContainedButton = styled.button`
  padding: 15px 20px;
  border: none;
  width: 100%;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Button component (Outlined)
export const OutlinedButton = styled.button`
  padding: 15px 20px;
  width: 100%;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

// Container for responsive design
export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
