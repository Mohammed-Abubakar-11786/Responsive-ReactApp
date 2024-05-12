import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Layout from "./Layout";
import Home from "./Components/Home/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Components/About/About";
import User from "./Components/User/User";
import ContactUs from "./Components/ContactUs/ContactUs";
import Github, { fetchGithubInfo } from "./Components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="github" element={<Github />} loader={fetchGithubInfo} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
