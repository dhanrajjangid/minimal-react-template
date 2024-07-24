import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cart from "@/view/Cart";
import Sidebar from "@/components/Sidebar";
import MobileMenuButton from "@/components/MenuButton";
import Home from "@/view/Home";
import { useDispatch } from "react-redux";
import Users from "@/view/Users";
import { actions } from "@/redux/slices/sidebarSlice";
import { actions as authActions} from '@/redux/slices/authSlice'
import CreateUser from "@/view/CreateUser";
import Profile from "@/view/Profile";
import Products from "@/view/Products";
import Courses from "@/view/Courses";
import ProductDetails from "@/view/Products/components/ProductDetails";
import PlayerListing from "@/view/PlayerListing";
import TeamListing from "@/view/TeamListing";
import CreateTeam from "@/view/TeamListing/Components/CreateTeam";
import TeamDetails from "@/view/TeamListing/Components/TeamDetails";
import ScheduleCalender from "@/view/ScheduleCalender";
import UserProfile from "@/view/UserProfile";
import EventDetails from "@/view/EventDetails";

const PrivateLayout = ({ children }) => {
  const dispatch = useDispatch();
  const storedUser = localStorage.getItem('user');

  useEffect(() => {
    // Check localStorage for user data and dispatch login action if user is found
    if (storedUser) {
      dispatch(authActions.login(JSON.parse(storedUser)));
    }
  }, [storedUser]);

  return storedUser ? (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <div
        style={{
          boxSizing: "border-box",
          padding: "0.5rem",
          width: "100%",
          position: "relative",
        }}
      >
        <MobileMenuButton />
        <div
          style={{
            boxSizing: "border-box",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            marginTop: "50px",
          }}
          onClick={() => dispatch(actions.toggleSidebar(false))}
        >
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/player-listing",
        element: <PlayerListing />,
      },
      {
        path: "/team-listing",
        element: <TeamListing />,
      },
      {
        path: "/team-details/:id",
        element: <TeamDetails />,
      },
      {
        path: "/team-listing/create",
        element: <CreateTeam />,
      },
      {
        path: "/schedule-calender",
        element: <ScheduleCalender />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/event-details",
        element: <EventDetails />,
      }
    ],
  },
];

export default privateRoutes;
