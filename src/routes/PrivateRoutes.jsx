// privateRoutes.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import Cart from "@/view/Cart";
import CreateUser from "@/view/CreateUser";
import Sidebar from "@/components/Sidebar";
import MobileMenuButton from "@/components/MenuButton";

const isAuthenticated = true;

const PrivateLayout = ({ children }) =>
  isAuthenticated ? (
    <div style={{ height: "100vh", display: "flex" }}>
        <Sidebar />
        <div style={{margin: "1.5rem", width: "100%", position: 'relative'}}>
          <MobileMenuButton/> 
          <div style={{maxHeight: "100vh", overflowY: "auto"}}>
          <Outlet />
          </div>
        </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );

const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
    ],
  },
];

export default privateRoutes;
