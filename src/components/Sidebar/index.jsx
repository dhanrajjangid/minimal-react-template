import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProfileImg from "@/assets/images/profile.jpg";

const SidebarContainer = styled.div`
  width: 300px;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fff;
 
  @media (max-width: 600px) {
    position: absolute;
    left: ${({ isopen }) => (isopen ? 0 : '-300px')};
    transition: left 0.15s ease;
    z-index: 1;
  }
}
`;

const SidebarNav = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ProfilePhoto = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 2.5em auto 1.5em 2.5em; 
`;

const SidebarItem = styled.div`
  padding: 0.5em 1em;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f4f4f4' : '#fff')};;
  border-radius: 4px;
  margin: 0.15em 1.5em;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.open);
  return (
    <SidebarContainer isopen={isOpen}>
      <SidebarNav>
        <div className="flex-center">
          <ProfilePhoto src={ProfileImg} alt="Profile" />
        </div>
        <SidebarItem active={true}>Home</SidebarItem>
        <SidebarItem active={false}>About</SidebarItem>
        <SidebarItem active={false}>Pages</SidebarItem>
        <SidebarItem active={false}>Contact</SidebarItem>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
