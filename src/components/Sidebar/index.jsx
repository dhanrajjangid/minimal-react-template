import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProfileImg from "@/assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 300px;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fff;
 
  @media (max-width: 600px) {
    position: absolute;
    left: ${({ isopen }) => (isopen ? 0 : "-300px")};
    transition: left 0.15s ease;
    z-index: 1;
  }
}
`;

const SidebarNav = styled.div`
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
  background-color: ${({ active }) => (active ? "#f4f4f4" : "#fff")};
  border-radius: 4px;
  margin: 0.15em 1.5em;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate()
  const isOpen = useSelector((state) => state.sidebar.open);
  const pathname = window.location.pathname;

  const handleNavigation = (path) => {
    navigate(path)
  }

  const menuItems = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Users",
      path: "/users",
    },
    {
      title: "About",
      path: "/users",
    },
    {
      title: "Contact",
      path: "/users",
    },
  ];
  return (
    <SidebarContainer isopen={isOpen}>
      <SidebarNav>
        <div className="flex-center">
          <ProfilePhoto src={ProfileImg} alt="Profile" />
        </div>
        {menuItems.map((item) => {
          return (
            <SidebarItem active={pathname === item.path ? true : false} onClick={()=> handleNavigation(item.path)}>
              {item.title}
            </SidebarItem>
          );
        })}
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
