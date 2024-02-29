// privateRoutes.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cart from "@/view/Cart";
import Sidebar from "@/components/Sidebar";
import MobileMenuButton from "@/components/MenuButton";
import Home from "@/view/Home";
import { useSelector, useDispatch } from "react-redux";
import Users from "@/view/Users";
import { actions } from "@/redux/slices/sidebarSlice";
import CreateUser from "@/view/CreateUser";
import Profile from "@/view/Profile";
import Products from "@/view/Products";
import Courses from "@/view/Courses";
import ProductDetails from "@/view/Products/components/ProductDetails";
import PlayerListing from "@/view/PlayerListing";

const PrivateLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  return isAuthenticated ? (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <div
        style={{
          boxSizing: "border-box",
          padding: "1.5rem",
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
    ],
  },
];

export default privateRoutes;
