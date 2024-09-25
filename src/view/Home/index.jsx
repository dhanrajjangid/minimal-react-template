import React from "react";
import { HomeContainer } from "./Components/StyledComponents";
import EventListing from "./Components/EventListing";
import CandidateList from "../CandidateList";

const Home = () => {
  return (
    <HomeContainer>
      {/* <EventListing /> */}
      <CandidateList />
    </HomeContainer>
  );
};

export default Home;
