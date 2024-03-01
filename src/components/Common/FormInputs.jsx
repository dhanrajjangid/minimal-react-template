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
  appearance: none; /* Remove default arrow icon */
  background-color: #fff; /* Set background color */
  font-size: 16px; /* Adjust font size */
  line-height: 1.5; /* Adjust line height */
  cursor: pointer; /* Show pointer cursor */
  outline: none; /* Remove default focus outline */
  -webkit-appearance: none; /* For older versions of iOS */
  -moz-appearance: none; /* For older versions of Firefox */

  /* Add custom arrow icon */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center; /* Adjust position of arrow icon */
  background-size: 16px 16px; /* Adjust size of arrow icon */
`;

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
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
