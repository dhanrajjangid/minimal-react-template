import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Import common components
import {
  UnderlinedTextField,
  ContainedButton,
} from "@/components/Common/FormInputs";

const Form = styled.form`
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: left;
  max-width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px; /* Adjust the font size */
  margin-top: 5px; /* Adjust as needed */
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  position: Yup.string().required("Position is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
});

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert("Form submitted successfully!");
  };

  const fields = [
    {
      name: "name",
      placeholder: "Name",
      validation: validationSchema.fields.name,
    },
    {
      name: "email",
      placeholder: "Email",
      validation: validationSchema.fields.email,
    },
    {
      name: "position",
      placeholder: "Position",
      validation: validationSchema.fields.position,
    },
    {
      name: "city",
      placeholder: "City",
      validation: validationSchema.fields.city,
    },
    {
      name: "state",
      placeholder: "State",
      validation: validationSchema.fields.state,
    },
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      validation: validationSchema.fields.phoneNumber,
    },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => {
        return (
          <FieldContainer>
            <Controller
              name={item.name}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <UnderlinedTextField
                    {...field}
                    placeholder={item.placeholder}
                  />
                  {errors[field.name] && (
                    <ErrorMessage>{errors[field.name].message}</ErrorMessage>
                  )}
                </>
              )}
            />
          </FieldContainer>
        );
      })}
      <ContainedButton type="submit">Submit</ContainedButton>
    </Form>
  );
};

export default UserForm;
