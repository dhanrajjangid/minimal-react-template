// privateRoutes.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cart from "@/view/Cart";
import Sidebar from "@/components/Sidebar";
import MobileMenuButton from "@/components/MenuButton";
import Home from "@/view/Home";
import { useSelector } from "react-redux";
import Users from "@/view/Users";

const PrivateLayout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  return isAuthenticated ? (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <div style={{ margin: "1.5rem", width: "100%", position: "relative" }}>
        <MobileMenuButton />
        <div style={{ maxHeight: "100vh", overflowY: "auto", marginTop: "50px" }}>
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
    ],
  },
];

export default privateRoutes;
