// routerConfig.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default router;
