import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
