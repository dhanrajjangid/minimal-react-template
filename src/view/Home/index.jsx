import React from "react";
import { OutlinedButton, ContainedButton } from "@/components/Common/FormInputs";
import { ButtonContainer, HomeContainer, SubText, Tagline } from "./Components/StyledComponents";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <HomeContainer>
      <Tagline>
        Connect. Collaborate. Elevate.
      </Tagline>
      <SubText>Empowering Athletes Everywhere</SubText>
      <ButtonContainer>
        <ContainedButton onClick={()=> navigate('/player-listing')}>FIND PLAYERS</ContainedButton>
        <OutlinedButton onClick={()=> navigate('/team-listing')}>Find Teams</OutlinedButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
