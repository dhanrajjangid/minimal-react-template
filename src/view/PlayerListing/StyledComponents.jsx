// PlayerStyles.js

import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 50%;
    align-items: start;
  }
`;



export const PlayerContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px

`

export const ProfilePhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #ECF0FC
`;

export const PlayerDetails = styled.div`
  width: 100%
`;

export const PlayerName = styled.h3`
  margin: 5px 0;
`;

export const PlayerPosition = styled.p`
  margin: 5px 0;
`;


export const ActiveStatus = styled.span`
  color: ${({ active }) => (active ? "green" : "red")};
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%
`

export const ButtonOutlined = styled.button`
  /* Your outlined button styles */
  padding: 8px 50px;
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export const ButtonContained = styled.button`
  /* Your contained button styles */
  padding: 8px 50px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
