import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHome, AiOutlineUser, AiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineAppstore, AiOutlineBook, AiOutlineUser as AiOutlineUserProfile } from 'react-icons/ai';
import ProfileImg from "@/assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { actions } from "@/redux/slices/sidebarSlice";

const SidebarContainer = styled.div`
  width: 300px;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    position: absolute;
    left: ${({ isopen }) => (isopen ? 0 : "-300px")};
    transition: left 0.20s ease;
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
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.sidebar.open);
  const pathname = window.location.pathname;

  const handleNavigation = (path) => {
    navigate(path);
    dispatch(actions.toggleSidebar(!isOpen));
  };

  const menuItems = [
    {
      title: "Home",
      path: "/home",
      icon: <AiOutlineHome />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <AiOutlineUser />,
    },
    {
      title: "Cart",
      path: "/cart",
      icon: <AiOutlineShoppingCart />,
    },
    {
      title: "Create User",
      path: "/create-user",
      icon: <AiOutlineUserAdd />,
    },
    {
      title: "Products",
      path: "/products",
      icon: <AiOutlineAppstore />,
    },
    {
      title: "Courses",
      path: "/courses",
      icon: <AiOutlineBook />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <AiOutlineUserProfile />,
    },
  ];

  return (
    <SidebarContainer isopen={isOpen}>
      <SidebarNav>
        <div className="flex-center">
          <ProfilePhoto src={ProfileImg} alt="Profile" />
        </div>
        {menuItems.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              active={pathname === item.path ? true : false}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon>{item.icon}</Icon>
              {item.title}
            </SidebarItem>
          );
        })}
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
