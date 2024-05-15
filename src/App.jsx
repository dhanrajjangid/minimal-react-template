import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Provider } from "react-redux";
import store from "@/redux/store";
import ReactPixel from "react-facebook-pixel";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
