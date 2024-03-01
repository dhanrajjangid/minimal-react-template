import React from "react";
import Profile from "./Components/Profile";
import UserForm from "./Components/UserForm";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* By default, one column */
  grid-gap: 10px; /* Adjust gap between items */
  padding: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
  }
`;

const App = () => {
  return (
    <Container>
      <Profile />
      <UserForm />
    </Container>
  );
};

export default App;
