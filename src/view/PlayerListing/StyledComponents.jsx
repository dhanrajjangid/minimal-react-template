// PlayerStyles.js

import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const PlayerDetails = styled.div`
  flex: 1;
`;

export const PlayerName = styled.h3`
  margin: 5px 0;
`;

export const PlayerPosition = styled.p`
  margin: 5px 0;
`;

export const Distance = styled.p`
  margin: 5px 0;
`;

export const ActiveStatus = styled.span`
  color: ${({ active }) => (active ? "green" : "red")};
`;
