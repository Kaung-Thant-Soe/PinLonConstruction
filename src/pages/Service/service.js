import Nav from "../../Navigation/Nav";
import head from "../Service/assests/head.png";
import { Frame } from "../About/About";
import mobileHead from "../Service/assests/mobile-head.png";
import screen from "../Service/assests/engineer/screen.png";
import engineer1 from "../Service/assests/engineer/engineer1.png";
import engineer2 from "../Service/assests/engineer/engineer2.png";
import engineer3 from "../Service/assests/engineer/engineer3.png";
import engineer4 from "../Service/assests/engineer/engineer4.png";
import engineer5 from "../Service/assests/engineer/engineer5.png";
import mobileEngineer from "../Service/assests/engineer/mobileEngineer1.png";

import constructionHead from "../Service/assests/construction/headConstruction.png";
import construction1 from "../Service/assests/construction/construction1.png";
import construction2 from "../Service/assests/construction/construction2.png";
import construction3 from "../Service/assests/construction/construction3.png";
import mobileConstruction from "../Service/assests/construction/mobileConstruction.png";

import afterHead from "../Service/assests/After Service/afterHead.png";
import after1 from "../Service/assests/After Service/after1.png";
import after2 from "../Service/assests/After Service/after2.png";
import after3 from "../Service/assests/After Service/after3.png";
import after4 from "../Service/assests/After Service/after4.png";
import after5 from "../Service/assests/After Service/after5.png";
import mobileAfter from "../Service/assests/After Service/mobileAfter.png";
import { UserContext } from "../../App";
import { useContext } from "react";

import Footer from "../../footer/second-footer";
function Service() {
  const {dark,setDark} = useContext(UserContext);
  return (
    <>
      <Nav />
      <div className={dark === 'dark' ? "dark" : ""}>
        <Head />
        <Reason />
        <Engineering />
        <Construction />
        <AfterSaleService />
        <Footer />
      </div>
    </>
  );
}
function Reusable({ src, img1, img2, img3, img4, img5, h, p, mobileImg }) {
  return (
    <>
      <div className="min-[375px]:hidden lg:block ">
        <div className="flex flex-row items-center bg-secondary dark:bg-inherit justify-center lg:px-6 lg:gap-12 px-12 py-12 gap-20">
          <div>
            <Frame location={src} />
          </div>
          <div className="text-primary font-body text-center bg-neutralWhite px-16 py-20 dark:bg-black dark:text-neutralWhite">
            <h2 className="text-6xl uppercase mb-6">{h}</h2>
            <p className="text-3xl font-normal leading-8">{p}</p>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-center lg:gap-8 lg:pr-8  lg:pl-4  xl:gap-12 xl:pl-4 xl:pr-6 pt-8 pb-16 bg-secondary dark:bg-[#101827]">
          <Frame location={img1} c={"lg:h-[335px] xl:h-[315px]  w-full"} />
          <Frame location={img2} c={"lg:h-[335px] xl:h-[315px]  w-full"} />
          <Frame
            location={img3}
            c={"lg:hidden xl:block w-full xl:h-[315px] "}
          />
          <Frame location={img4} c={"lg:h-[335px] xl:h-[315px]  w-full"} />
          <Frame location={img5} c={"lg:h-[335px] xl:h-[315px]  w-full"} />
        </div>
      </div>
      <div className="lg:hidden bg-secondary pb-8 dark:bg-inherit">
        <div className="p-16 min-[375px]:h-[23rem] sm:h-[24rem] sm:pr-14 sm:pl-12 md:h-[30rem] min-[375px]:py-8 min-[375px]:pl-4  min-[375px]:px-8 ">
          <Frame mobileLocation={mobileImg} mobile={window.innerWidth < 1024} />
        </div>
        <div className="text-primary font-body text-center bg-neutralWhite mx-12 min-[375px]:mx-4 sm:my-8 my-0 py-8 dark:bg-[#101827] dark:text-neutralWhite">
          <h2 className="min-[375px]:text-3xl lg:text-5xl uppercase mb-6">
            {h}
          </h2>
          <p className="min-[375px]:text-xl min-[375px]:px-6 text-2xl font-normal leading-8">
            {p}
          </p>
        </div>
      </div>
    </>
  );
}
function Head() {
  return (
    <div className="w-full ">
      <img src={head} className="min-[375px]:max-sm:hidden sm:block w-full" />
      <div className="min-[375px]:hidden sm:block w-full dark:h-[874px] absolute top-[7.7rem] bg-gradient-to-r from-black to-transparent "></div>
      <img
        src={mobileHead}
        className="min-[375px]:max-sm:block sm:hidden w-full  min-[375px]:-mt-4"
      />
      <p className="min-[375px]:text-3xl lg:text-8xl min-[375px]:top-32  min-[375px]:left-0  min-[375px]:px-4  sm:text-5xl sm:top-2/4 sm:left-4 h-fit font-body uppercase bottom-0 absolute w-fit lg:left-16 xl:left-20 xl:px-20 lg:px-12 left-20 xl:top-[50%] tracking-normal text-shadow min-[375px]:font-shadow text-primary font-medium">
        best <br className="min-[375px]:hidden lg:block" /> service <br /> for
        you
      </p>
    </div>
  );
}
function Reason() {
  return (
    <div className="bg-primary text-secondary font-body text-center py-12 px-6 min-[375px]:px-6 dark:bg-black">
      <h2 className="md:text-4xl min-[375px]:text-xl">
        Why should you choose our service?
      </h2>
      <p className="min-[375px]:text-base md:text-lg mt-6 md:px-6 leading-8 min-[375px]:px-0">
        Why should you choose our service?Why should you choose our service?Why
        should you choose our service?Why should you choose our service?Why
        should you choose our service?Why should you choose our service?Why
        should you choose our service?Why should you choose our service?Why
        should you choose our service?
      </p>
    </div>
  );
}
function Engineering() {
  return (
    <div className="bg-secondary dark:bg-[#101827]">
      <Reusable
        src={screen}
        h={"Engineering"}
        p={`Pinlon Star's core activities include providing engineering services and support from tender to project implementation; This includes developing and maintaining an engineering knowledge base and recruiting and developing staff.`}
        img1={engineer1}
        img2={engineer2}
        img3={engineer3}
        img4={engineer4}
        img5={engineer5}
        mobileImg={mobileEngineer}
      />
    </div>
  );
}
function Construction() {
  return (
    <>
      <div className=" sm:flex flex-row items-center xl:py-12 xl:gap-2 dark:bg-black ">
        <div className="lg:w-3/5 min-[375px]:w-full min-[375px]:max-lg:flex-col-reverse flex flex-col items-center justify-center sm:px-6 min-[375px]:px-4 min-[375px]:py-12  px-8 py-16 lg:py-2 xl:py-0 lg:gap-12  gap-8">
          <div className="bg-secondary  text-primary xl:px-20 md:px-6 min-[375px]:py-6 md:py-8 xl:py-12 text-center font-body dark:bg-[#101827] dark:text-neutralWhite">
            <h2 className="uppercase xl:text-4xl min-[375px]:text-xl sm:text-2xl lg:text-3xl">
              Construction
            </h2>
            <p className="xl:text-2xl min-[375px]:text-base min-[375px]:py-4 sm:text-lg lg:text-xl min-[375px]:px-6  sm:max-lg:pt-6 pt-8 lg:pt-4  lg:px-12 xl:px-0 md:px-6">
              We always use the best quality tools in construction.We always use
              the best quality tools in construction.We always use the best
              quality tools in construction.We always use the best quality tools
              in construction.
            </p>
          </div>
          <div className="sm:hidden w-full h-full  pl-2 pr-6">
            <Frame
              mobile={true}
              mobileLocation={mobileConstruction}
              c={"h-[17.5rem] min-[375px]:w-[19.5rem] min-[375px]:h-[17.5rem] md:w-[20rem]"}
            />
          </div>
          <div className="sm:flex flex-row min-[1440px]:gap-20 sm:px-4 sm:gap-8 sm:pr-6 md:pr-4 md:gap-8 items-center lg:gap-12 justify-center 2xl:gap-16 min-[375px]:hidden">
            <Frame
              location={construction2}
              c={
                "sm:w-full sm:h-[250px] md:h-[300px] lg:max-2xl:w-[200px] lg:max-2xl:h-[280px] "
              }
            />
            <Frame
              location={construction1}
              c={
                "sm:w-full sm:h-[250px] md:h-[300px] lg:max-2xl:w-[200px]  lg:max-2xl:h-[280px]"
              }
            />
            <Frame
              location={construction3}
              c={
                "sm:w-full sm:h-[250px] md:h-[300px] lg:hidden xl:block lg:max-2xl:w-[200px] lg:max-2xl:h-[280px]"
              }
            />
          </div>
        </div>
        <div className="min-[375px]:hidden  lg:block xl:w-2/5 h-[45rem] lg:px-4 lg:pr-8 xl:pl-0 xl:pr-12 xl:py-10 2xl:py-8 lg:py-16 flex items-center">
          <Frame location={constructionHead} c={"lg:w-full lg:h-full"} />
        </div>
      </div>
    </>
  );
}

function AfterSaleService() {
  return (
    <div className="dark:bg-[#101827] bg-secondary">
      <Reusable
        src={afterHead}
        img1={after1}
        img2={after2}
        img3={after3}
        img4={after4}
        img5={after5}
        mobileImg={mobileAfter}
        h={"After sale service"}
        p={
          "Even after buying, I will never forget you.No repair costs required.Even after buying, I will never forget you.No repair costs required.Even after buying, I will never forget you.No repair costs required."
        }
      />
    </div>
  );
}

export default Service;
