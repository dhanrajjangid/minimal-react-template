import React, { useEffect, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Import common components
import {
  Form,
  FieldContainer,
  ErrorMessage,
} from "@/components/Common/FormComponents";

import {
  UnderlinedTextField,
  ContainedButton,
  DropdownContainer,
  Label,
  Dropdown,
  OutlinedButton,
  ActionButtons,
} from "@/components/Common/FormInputs";
import { CustomDatePicker } from "@/components/Common/DatePickers";
import { useNavigate } from "react-router-dom";

// Import your API function for creating a team, if available
import { useTeamListing } from '../apiFunctions'

const validationSchema = Yup.object().shape({
  teamName: Yup.string().required("Team Name is required"),
  venue: Yup.string().required("Venue is required"),
  date: Yup.string().required("Date is required"),
  duration: Yup.string().required("Duration is required"),
  capacity: Yup.number()
    .required("Capacity is required")
    .positive("Capacity must be a positive number"),
});

const CreateTeam = () => {
  const navigate = useNavigate();
  const player_id = JSON.parse(localStorage.getItem('user'))?.player_id
  const {createTeamApi} = useTeamListing()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // Implement your submission logic here, e.g., calling an API function
    // createTeam(data);
    console.log(data, "form datais consoled");
    createTeamApi(player_id, data)
  };

  const durationOptions = [
    "1 hour",
    "1 hour 30 minutes",
    "2 hours",
    "3 hours",
    "4 hours",
    "5 hours",
    "6 hours",
    "7 hours",
    "8 hours",
    "9 hours",
    "10 hours",
    "11 hours",
    "12 hours",
  ];

  const fields = [
    {
      name: "teamName",
      placeholder: "Team Name",
      validation: validationSchema.fields.teamName,
      type: "text",
    },
    {
      name: "venue",
      placeholder: "Venue",
      validation: validationSchema.fields.venue,
    },

    {
      name: "capacity",
      placeholder: "Capacity",
      type: "number",
      validation: validationSchema.fields.capacity,
      defaultValue: 0,
    },
    {
      name: "date",
      placeholder: "Date & Time",
      type: "date",
      validation: validationSchema.fields.date,
    },
    {
      name: "duration",
      placeholder: "Duration",
      validation: validationSchema.fields.duration,
      selectOptions: durationOptions,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create Team</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => {
          return (
            <FieldContainer key={index}>
              <Controller
                name={item.name}
                control={control}
                render={({ field }) => (
                  <>
                    {item.type === "date" ? (
                      <div
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "10px",
                        }}
                      >
                        <Label>{item.placeholder}:</Label>

                        <CustomDatePicker {...field} />
                      </div>
                    ) : (
                      <>
                        {item.selectOptions ? (
                          <div
                            style={{
                              width: "100%",
                              padding: "0.5rem",
                              boxSizing: "border-box",

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",

                              gap: "10px",
                            }}
                          >
                            <Label>{item.placeholder}: </Label>
                            <Dropdown
                              {...field}
                              style={{
                                width: "50%",
                              }}
                            >
                              {item.selectOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Dropdown>
                          </div>
                        ) : (
                          <UnderlinedTextField
                            {...field}
                            type={item.type}
                            placeholder={item.placeholder}
                          />
                        )}
                      </>
                    )}
                    {errors[field.name] && (
                      <ErrorMessage>{errors[field.name].message}</ErrorMessage>
                    )}
                  </>
                )}
              />
            </FieldContainer>
          );
        })}
        <ActionButtons>
          <OutlinedButton onClick={() => navigate("/team-listing")}>
            Cancel
          </OutlinedButton>
          <ContainedButton type="submit">Submit</ContainedButton>
        </ActionButtons>
      </Form>
    </>
  );
};

export default CreateTeam;
