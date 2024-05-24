import "./App.css";
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
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { createContext, useEffect, useState } from "react";

const router = createBrowserRouter([
  { path: "*", element: <Home /> },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: '',
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/contact_Us",
    element: <Contact />,
  },
]);

export const UserContext = createContext();
function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark") || "light");
  window.localStorage.setItem("dark", dark);
  //  console.log(dark);
  // console.log(localStorage.getItem('dark') || 'light');
  // console.log(window.localStorage.getItem('dark'));
  return (
    <>
      <UserContext.Provider value={{ dark, setDark }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
