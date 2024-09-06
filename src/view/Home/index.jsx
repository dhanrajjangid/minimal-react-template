import React from "react";
import { HomeContainer } from "./Components/StyledComponents";
import EventListing from "./Components/EventListing";

const Home = () => {
  return (
    <HomeContainer>
      <EventListing />
    </HomeContainer>
  );
};

export default Home;
