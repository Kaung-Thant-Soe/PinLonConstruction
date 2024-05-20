import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import About from "../src/pages/About/About.js";
import Project from "../src/pages/Project/project.js";
import Service from "../src/pages/Service/service.js";
import Contact from "../src/pages/Contact Us/Contact.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
