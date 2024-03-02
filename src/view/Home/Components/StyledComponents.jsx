import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 768px){
    height: 70vh;
    justify-content: center;
  }
`;

export const Tagline = styled.h1`
  font-size: 48px;
  line-height: 3.5rem;
  margin-bottom: 20px;
  font-weight: 500
`;

export const SubText = styled.span`
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;