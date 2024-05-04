import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Error from "./Components/Error";
import Home from "./Components/Home";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import Prescription from "./Components/Prescription";
import Doctor from "./Components/Doctor";
import Medicine from "./Components/Medicine";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import OrderList from "./Components/OrderList";
import { HelmetProvider } from "react-helmet-async";
import Test from "./Components/Test";
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/prescription",
        element: <Prescription></Prescription>,
      },
      {
        path: "/doctor",
        element: <Doctor></Doctor>,
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/medicine",
        element: <Medicine></Medicine>,
        loader: () => fetch("/Medicine.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/order",
        element: <OrderList></OrderList>,
      },
      // {
      //   path: "/test",
      //   element: <Test></Test>
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
