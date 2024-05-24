import "./nav.css";
import React, { useContext, useEffect, useState } from "react";
import logo from "../Navigation/logo.png";
import stair from "../Navigation/stairIcon.png";
import Mobilelogo from "../Navigation/Mobile-logo.png";
import { Link, NavLink, resolvePath, useParams } from "react-router-dom";
import { UserContext } from "../App";
import { useLocation } from "react-router-dom";
function Nav() {
  const { dark, setDark } = useContext(UserContext);
  const navList = [
    { navName: "Home", value: "home" },
    { navName: "About", value: "about" },
    { navName: "Project", value: "project" },
    { navName: "Service", value: "service" },
    { navName: "Contact Us", value: "contact_us" },
  ];
  const [isClick, setIsClick] = useState(false);
  const path = useLocation().pathname;
  const [isBtn, setIsBtn] = useState("");
  // window.localStorage.setItem("dark", dark);
  // const mode = window.localStorage.getItem("dark");
  // console.log(mode);
  // console.log(dark);
  function handleMode() {
    if (dark === "light") {
      setDark("dark");
    } else {
      setDark("light");
    }
  }

  // useEffect(() => {
  //   if (path === "/") {
  //     setIsBtn("home");
  // console.log(isBtn);
  // }
  // console.log(path);
  //   console.log(isBtn);
  // });
  // setTimeout(() => {
  //   setIsBtn((isBtn) => 'home');
  // }, 3000);
  // console.log(isBtn);

  // function handleBtn(e) {
  //   console.log(e.target.path);

  // }
  // console.log(isBtn);
  useEffect(() => {
    if (path === "/") {
      setIsBtn(() => "home");
    }
  }, []);
  // function handlebtn(item) {}
  return (
    <>
      <nav className="dark:bg-[#101827]  min-[375px]:py-4 sm:py-8 bg-primary">
        <div className="flex items-center text-primary min-[375px]:justify-between sm:justify-center sm:gap-[16.5rem] md:gap-20 xl:gap-32  ps-1">
          <NavLink to="/home" className="h-20 sm:h-12 flex items-center ">
            <img
              src={logo}
              alt="logo"
              className="min-[375px]:hidden sm:block h-full "
            />
            <img
              src={Mobilelogo}
              alt="mobile logo"
              className="sm:hidden shadow-none"
            />
          </NavLink>
          <div>
            <div className="md:flex flex-row items-center sm:gap-6 lg:gap-20 sm:text-lg xl:text-2xl font-body min-[375px]:hidden text-neutralWhite pe-6">
              {navList.map((item, index) => (
                <li
                  key={index}
                  className={
                    path === `/${item.value}` || isBtn === `${item.value}`
                      ? "border-chip border-2  text-center list-none h-[3.5rem]"
                      : `list-none`
                  }
                >
                  {/* {console.log(isBtn === "" ? item : isBtn)} */}
                  <NavLink
                    to={`/${item.value}`}
                    className={
                      path === `/${item.value}` || isBtn === `${item.value}`
                        ? "bg-chip mt-2 block ml-2 px-2 py-[10px] w-full h-full"
                        : ""
                    }
                    // onClick={handlebtn(item)}
                  >
                    {/* {console.log(isBtn)} */}
                    {item.navName}
                  </NavLink>
                </li>
              ))}
              <div className="border-[1px] border-chip ">
                <button
                  className={
                    dark === "dark"
                      ? "bg-neutralWhite p-2 text-black"
                      : "bg-black p-2"
                  }
                  onClick={handleMode}
                >
                  {dark === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
            {/* Mobile Nav */}
            <div className="md:hidden text-neutralWhite min-[375px]:block ">
              <div
                className={`border-chip border-2 h-[2.8rem] ${isClick ? " border-none mr-1" : "mr-2"}`}
              >
                <button
                  className={`flex items-center w-full justify-center  h-full gap-4 bg-chip  ${isClick ? "m-0 px-[1.3rem]" : " mt-1 px-2 ml-1"}`}
                  onClick={() => setIsClick(!isClick)}
                >
                  <p>Menu</p>{" "}
                  <img
                    src={stair}
                    alt="stair case btn"
                    className="shadow-none"
                  />
                </button>
              </div>
              <div className="absolute right-1 sm:right-[6.75rem] z-10">
                {navList.map((item, index) => (
                  <div
                    key={index}
                    className={`${isClick ? "flex" : "hidden"} flex-row items-center justify-center 
                    align-middle w-full h-[40px] mt-[1px] text-center bg-primary   md:hidden`}
                  >
                    <NavLink
                      to={`/${item.value}`}
                      className={
                        path === `/${item.value}` || isBtn === `${item.value}`
                          ? " bg-chip align-middle pt-2 w-full h-full block"
                          : "align-middle "
                      }
                      // onClick={handlebtn(item)}
                    >
                      {item.navName}
                    </NavLink>
                  </div>
                ))}
                <div
                  className={`text-center ${isClick ? "block" : "hidden"} bg-primary px-1 py-1  mt-[1px]`}
                >
                  <button
                    className={
                      dark === "dark"
                        ? "bg-neutralWhite px-3 py-2 text-black"
                        : "bg-black px-3 py-2"
                    }
                    onClick={handleMode}
                  >
                    {dark === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
