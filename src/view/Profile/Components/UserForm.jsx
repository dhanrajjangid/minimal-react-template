import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Import common components
import { TextField, ContainedButton, Container } from "@/components/Common/FormInputs";

const StyledFormContainer = styled(Container)`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%; 
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
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert("Form submitted successfully!");
  };

  return (
    <StyledFormContainer>
      <FormTitle>User Information Form</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextField {...field} placeholder="Name" />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </>
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextField {...field} placeholder="Email" />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </>
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <Controller
            name="position"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextField {...field} placeholder="Position" />
                {errors.position && <ErrorMessage>{errors.position.message}</ErrorMessage>}
              </>
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextField {...field} placeholder="City" />
                {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
              </>
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextField {...field} placeholder="State" />
                {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
              </>
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextField {...field} placeholder="Phone Number" />
                {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
              </>
            )}
          />
        </FieldContainer>
        <ContainedButton type="submit">Submit</ContainedButton>
      </Form>
    </StyledFormContainer>
  );
};

export default UserForm;
