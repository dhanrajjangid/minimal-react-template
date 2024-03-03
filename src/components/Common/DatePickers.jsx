import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #333;
  }

  .react-datepicker__header {
    background-color: #333;
    border-bottom: 1px solid #555;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #fff;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    color: #fff;
  }

  .react-datepicker__day--selected {
    background-color: #555;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #777;
  }

  .custom-datepicker-input {
    box-sizing: border-box;
    width: calc(100% - 2px);
    padding: 5px;
    font-size: 1rem;
    border-radius: 4px;
    border:none;
    border-bottom: 1px solid #ccc;
  }
`;

export const CustomDatePicker = ({onChange }) => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    if (onChange) {
      onChange(date);
    }
  };
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy h:mm aa"
        showTimeSelect
        timeIntervals={15}
        className="custom-datepicker-input"
      />
    </DatePickerWrapper>
  );
};
