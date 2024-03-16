import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;

export const TeamImage = styled.img`
max-width: 100%;
`;

export const EventInfo = styled.div`
  width: 100%;
  text-align: left;
  box-sizing: border-box;
padding: 10px;
`;

export const EventName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: auto;
`;

export const EventDetails = styled.p`
  font-size: 20px;
`;

export const JoinButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

export const TeamListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TeamProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const TeamName = styled.span`
  font-size: 20px;
`;