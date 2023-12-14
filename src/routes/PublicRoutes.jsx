// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
// import { productsData } from "./api/Api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "@/view/Home";
// import Product from "./components/Product";
import Login from "@/view/Login";

const PublicLayout = ({ children }) => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default publicRoutes;
