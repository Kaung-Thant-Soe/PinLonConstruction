import React from "react";
import Nav from "../../Navigation/Nav";
import building from "../Home/home page buiding.png";
import mobileBuilding from "../Home/home page building mobile.png";
import "../Home/home.css";
import building1 from "../Home/project-building/building-1.png";
import building2 from "../Home/project-building/building-2.png";
import building3 from "../Home/project-building/building-3.png";
import building4 from "../Home/project-building/building-4.png";
import building5 from "../Home/project-building/building-5.png";
import engineer from "../Home/engineer.png";
import client1 from "../Home/client/client1.png";
import client2 from "../Home/client/client2.png";
import client3 from "../Home/client/client3.png";
import client4 from "../Home/client/client4.png";
import Footer from "../../footer/main-footer";
import { Frame } from "../About/About";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Home() {
  const { dark, setDark } = useContext(UserContext);
  const mode = window.localStorage.getItem("dark");

  return (
    <>
      <Nav />
      <div className={dark === "dark" ? "dark" : ""}>
        <HomeHead />
        <AboutUs />
        <OurProject />
        <OurService />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
function HomeHead() {
  return (
    <div className="bg-primary relative font-body  h-min w-full min-w-full">
      <img
        src={building}
        className="sm:block min-[375px]:hidden dark:brightness-50 w-full"
        alt="home-page-building"
      />
      <img
        src={mobileBuilding}
        alt="mobile home page"
        className="sm:hidden w-full dark:brightness-50"
      />
      <p className="absolute sm:top-[40%] uppercase sm:text-5xl sm:left-16  lg:text-8xl xl:text-9xl text-primary font-normal lg:left-28  min-[375px]:top-12 min-[375px]:left-8 min-[375px]:text-4xl tracking-wider dark:text-neutralWhite text-shadow ">
        Discover A<br /> unique
        <br className="min-[375px]:hidden sm:block" /> combo
      </p>
    </div>
  );
}
function AboutUs() {
  return (
    <div className=" w-full bg-primary dark:bg-black">
      <div className=" dark:text-neutralWhite  text-secondary py-12 sm:px-4 lg:px-8 flex flex-col items-center justify-center sm:gap-10 min-[375px]:gap-6 font-body text-xl  m-auto">
        <h3 className="text-4xl">About Us</h3>
        <p className="text-center">
          Since August 7, 2001, PINLON Construction Co.,ltd has been established
          as a company with registration number 7674 and has been responsible
          for the construction of your homes by skilled engineers in the
          construction industry in Yangon Region.
        </p>
        <hr className="sm:w-full min-[375px]:w-[90%]" />
        <div className="flex flex-row justify-around w-full ">
          <div className="text-center lg:leading-[3rem] ">
            <p className="text-4xl  font-medium mb-4 "> 600+ </p>
            <p className="sm:text-lg lg:text-xl">
              Worked with 600+ Big Companies
            </p>
          </div>
          <div className="text-center lg:leading-[3rem]">
            <p className="text-4xl  font-medium mb-4 ">800+</p>
            <p className="sm:text-lg lg:text-xl">
              {" "}
              Projects Completed Successfully
            </p>
          </div>
          <div className="text-center lg:leading-[3rem]">
            <p className="text-4xl  font-medium mb-4 ">99%</p>
            <p className="sm:text-lg lg:text-xl">
              {" "}
              We stand with 99% Success Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function OurProject() {
  var settings = {
    nextArrow: <></>,
    prevArrow: <></>,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-12 dark:bg-[#1a2e42] px-4 min-[1800px]:px-0 ">
        <div className="w-full font-header  text-primary dark:text-neutralWhite text-center">
          <h2 className="text-2xl xl:text-5xl 2xl:text-6xl ">Our Project</h2>
          <h3 className="text-lg xl:text-2xl 2xl:text-4xl">
            Let us create your idea{" "}
          </h3>
        </div>
        <div className="py-6 xl:py-8 min-[1920px]:py-16 w-full h-full">
          <Slider {...settings}>
            {/* <div className="flex items-center lg:justify-center  py-8 lg:pr-4 lg:pl-2 lg:gap-8 xl:gap-8  min-[1440px]:gap-12 min-[375px]:max-lg:overflow-x-auto min-[375px]:gap-8 overflow-y-hidden  sm:gap-6 whitespace-nowrap sm:px-12 min-[375px]:px-6 "> */}
            <div className="xl:h-[24rem] md:h-[18rem] min-[375px]:h-[22rem] sm:h-[15rem] lg:h-[18rem] min-[1440px]:h-[25rem] 2xl:h-[28rem] min-[1920px]:h-[32rem] sm:px-4 lg:px-5 px-6">
              <Frame location={building1} c={"w-full h-full"} />
            </div>
            <div className="xl:h-[24rem] md:h-[18rem] min-[375px]:h-[22rem] sm:h-[15rem] lg:h-[18rem] min-[1440px]:h-[25rem] 2xl:h-[28rem] min-[1920px]:h-[32rem]  sm:px-4 lg:px-5 px-6">
              <Frame location={building2} c={"w-full h-full"} />
            </div>
            <div className="xl:h-[24rem] md:h-[18rem] min-[375px]:h-[22rem] sm:h-[15rem] lg:h-[18rem] min-[1440px]:h-[25rem] 2xl:h-[28rem] min-[1920px]:h-[32rem] sm:px-4 lg:px-5 px-6">
              <Frame location={building3} c={"w-full h-full  "} />
            </div>
            <div className="xl:h-[24rem] md:h-[18rem] min-[375px]:h-[22rem] sm:h-[15rem] lg:h-[18rem] min-[1440px]:h-[25rem] 2xl:h-[28rem] min-[1920px]:h-[32rem] sm:px-4 lg:px-5 px-6">
              <Frame location={building4} c={"w-full h-full"} />
            </div>
            <div className="xl:h-[24rem] md:h-[18rem] min-[375px]:h-[22rem] sm:h-[15rem]  lg:h-[18rem] min-[1440px]:h-[25rem]  2xl:h-[28rem] min-[1920px]:h-[32rem] sm:px-4 lg:px-5 px-6">
              <Frame location={building5} c={"w-full h-full"} />
            </div>
            {/* </div> */}
          </Slider>
        </div>
        <div className="flex justify-center mt-6">
          <div className="text-center  font-body border-2 border-black ">
            <button className="bg-chip  mt-1 text-xl ml-1 py-3 px-3 h-full w-full min-[1920px]:text-3xl text-neutralWhite">
              <Link to="/project">View All Products</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function OurService() {
  return (
    <>
      <div className="flex sm:flex-row min-[375px]:flex-col items-center justify-center sm:gap-12 md:gap-20 lg:gap-16 min-[375px]:px-4  py-12 sm:px-8  md:p-16 min-[375px]:w-full dark:bg-[#060606ef]">
        <div className="font-header bg-secondary flex flex-col items-center justify-center text-primary text-center h-auto min-[375px]:gap-4 sm:gap-8 lg:py-20 sm:py-12 min-[375px]:px-4 min-[375px]:py-6 sm:px-3 lg:px-6 dark:bg-[#21436633] dark:text-neutralWhite">
          <h2 className="uppercase min-[375px]:text-3xl  lg:text-4xl xl:text-5xl font-semibold">
            our service
          </h2>
          <p className="font-medium min-[375px]:text-lg  xl:text-3xl lg:text-2xl min-[375px]:px-0 sm:px-6 xl:px-20 lg:px-8 ">
            We provide the necessary services at every stage, right from
            construction.We provide the necessary services at every stage, right
            from construction.
          </p>
          <div className="min-[375px]:flex sm:hidden">
            <button className="text-center font-body border-2  border-black  dark:border-white">
              <Link
                className="block bg-chip mt-1 ml-1 px-2 py-2 h-full w-full text-neutralWhite "
                to="/service"
              >
                View More Services
              </Link>
            </button>
          </div>
        </div>
        <div className="relative min-[375px]:hidden sm:block">
          <Frame location={engineer} />
          <div className="flex justify-center mt-6 absolute -bottom-6 right-1">
            <div className="text-center  font-body border-2 border-black dark:border-primary ">
              <button className="bg-chip  mt-1 text-xl ml-1 py-3 px-3 h-full w-full text-neutralWhite">
                <Link to="/service">View More Services</Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Feedback() {
  return (
    <div className="bg-secondary dark:bg-[#1a2e42] min-[375px]:py-12 min-[375px]:text-center md:text-start lg:py-12 xl:pt-20 xl:pb-0 h-auto">
      <div>
        <h2 className="text-3xl text-primary  dark:text-neutralWhite font-header md:ml-20">
          Our Client Feedback
        </h2>
      </div>
      <div className="min-[375px]:flex sm:block flex-row   xl:flex items-center  xl:px-8 xl:pb-8 pt-16 overflow-x-auto ">
        <div className="min-[375px]:max-sm:min-w-[80svw] min-[375px]:px-6 sm:w-1/2 sm:px-4 md:px-8 sm:py-4  lg:px-12 flex flex-col items-center lg:bg-secondary dark:bg-[#1a2e42] xl:px-8 float-start">
          <div className="relative z-0">
            <div className="min-[375px]:h-[20rem] md:h-[23rem] lg:h-[25rem] xl:h-[20rem] 2xl:h-[23rem] min-[1920px]:w-[20rem] min-[1920px]:h-[25rem]">
              <Frame
                location={client1}
                // h="20rem"
                // c={"lg:h-[20rem] md:h-[19rem] min-[375px]:h-80 "}
                c={"w-full h-full"}
              />
            </div>
            <div className="font-header absolute bottom-0 left-6">
              {" "}
              <h2 className="font-medium text-4xl text-white">Min Thu</h2>
              <p className="text-2xl text-white">Business Owner</p>
            </div>
          </div>
          <p className="w-fit whitespace-normal border-[1px] border-black p-3 mt-6 bg-neutralWhite text-primary text-lg   dark:text-neutralWhite dark:bg-primary">
            The price is reasonable and the design is cute. Their service is
            excellent.
          </p>{" "}
        </div>
        <div className="min-[375px]:max-sm:min-w-[80svw] min-[375px]:px-6 sm:w-1/2 sm:px-4 md:px-8 sm:py-4  lg:px-12 flex flex-col items-center lg:bg-secondary dark:bg-[#1a2e42] xl:px-8 xl:mb-32 float-end">
          <div className="relative z-0">
            <div className="min-[375px]:h-[20rem]  md:h-[23rem] lg:h-[25rem] xl:h-[20rem] 2xl:h-[23rem] min-[1920px]:w-[20rem] min-[1920px]:h-[25rem]">
              <Frame
                location={client2}
                // h="20rem"
                // c={"lg:h-[20rem] md:h-[19rem] min-[375px]:h-80"}
                c={"w-full h-full"}
              />
            </div>
            <div className="font-header absolute bottom-0 left-6">
              {" "}
              <h2 className="font-medium text-4xl text-white">May Thu</h2>
              <p className="text-2xl text-white">Studio Owner</p>
            </div>
          </div>
          <p className="w-fit whitespace-normal border-[1px] border-black p-3 mt-6 bg-neutralWhite text-primary text-lg  dark:text-neutralWhite dark:bg-primary">
            The price is reasonable and the design is cute. Their service is
            excellent.
          </p>{" "}
        </div>
        <div className="min-[375px]:max-sm:min-w-[80svw] min-[375px]:px-6 sm:w-1/2 sm:px-4 md:px-8 sm:py-4  lg:px-12 flex flex-col items-center lg:bg-secondary dark:bg-[#1a2e42] xl:pb-0 xl:px-8 float-start">
          <div className="relative z-0">
            <div className="min-[375px]:h-[20rem]  md:h-[23rem] lg:h-[25rem] xl:h-[20rem] 2xl:h-[23rem] min-[1920px]:w-[20rem] min-[1920px]:h-[25rem]">
              <Frame
                location={client3}
                // h="20rem"
                // c={"lg:h-[20rem] md:h-[19rem] min-[375px]:h-80"}
                c={"w-full h-full"}
              />
            </div>
            <div className="font-header absolute bottom-0 left-6">
              {" "}
              <h2 className="font-medium text-4xl text-white">May Thu</h2>
              <p className="text-2xl text-white">Restaurent Owner</p>
            </div>
          </div>
          <p className="w-fit whitespace-normal border-[1px] border-black p-3 mt-6 bg-neutralWhite text-primary text-lg  dark:text-neutralWhite dark:bg-primary">
            The price is reasonable and the design is cute. Their service is
            excellent.
          </p>{" "}
        </div>
        <div className="min-[375px]:max-sm:min-w-[80svw] min-[375px]:px-6 sm:w-1/2 sm:px-4 md:px-8 sm:py-4  lg:px-12 flex flex-col items-center lg:bg-secondary dark:bg-[#1a2e42] xl:pb-0 xl:px-8 xl:mb-32 float-end">
          <div className="relative z-0">
            <div className="min-[375px]:h-[20rem]  md:h-[23rem] lg:h-[25rem] xl:h-[20rem] 2xl:h-[23rem] min-[1920px]:w-[20rem] min-[1920px]:h-[25rem]">
              <Frame
                location={client4}
                // h="20rem"
                // c={"lg:h-[20rem] md:h-[19rem] min-[375px]:h-80"}
                c={"w-full h-full"}
              />
            </div>
            <div className="font-header absolute bottom-0 left-6">
              {" "}
              <h2 className="font-medium text-4xl text-white">Min Thu</h2>
              <p className="text-2xl text-white">Business Owner</p>
            </div>
          </div>
          <p className="w-fit whitespace-normal border-[1px] border-black p-3 mt-6 bg-neutralWhite text-primary text-lg  dark:text-neutralWhite dark:bg-primary">
            The price is reasonable and the design is cute. Their service is
            excellent.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
export default Home;
{
  /* 
      
      <div className="font-header text-center text-primary bg-secondary flex gap-5 flex-col items-center">
        <h2 className="text-3xl mt-6">Our Project</h2>
        <h3 className="text-xl font-normal">Let us create your idea.</h3>
        <div className=" relative ">
          <div className="w-full absolute h-[356px] ">
            <div className="absolute w-[236px] h-full left-[-1.7%]  top-5 border-2 border-primary z-0"></div>
            <div
              className="absolute w-[236px] h-full right-[63.5%] top-5 border-2 
            border-primary z-0"
            ></div>
            <div className="absolute w-[236px] h-full right-[42.8%] top-5 border-2 border-primary z-0"></div>
            <div className="absolute w-[236px] h-full right-[22.5%] top-5 border-2 border-primary z-0"></div>
            <div className="absolute w-[236px] h-full right-[1.8%] top-5 border-2 border-primary z-0"></div>
          </div>
          <div className="flex flex-row justify-center gap-10 mt-10">
            <img src={building1} className="z-10" />
            <img src={building2} className="z-10" />
            <img src={building3} className="z-10" />
            <img src={building4} className="z-10" />
            <img src={building5} className="z-10" />
          </div>
        </div>
        <div className="w-full h-fit relative py-6 mb-8 mt-4">
          <button className="text-neutralWhite bg-chip w-fit px-5 border-[1px] border-black py-2 sticky font-body z-10 cursor-pointer ">
            View All Products
          </button>
          <div className="w-[161px] h-[42px] absolute right-[45%] border-black border-2 top-[18%] z-0"></div>
        </div>
      </div>
      <div className="flex flex-row justify-between  px-10 py-20 gap-20">
        
        <div className="w-[40%] flex flex-col items-center relative ">
          <div className="w-full h-full relative">
            <div className="w-[92%] h-full border-[1px] border-primary absolute right-[15%] bottom-[6%] z-0 opacity-50"></div>
            <img src={engineer} className="z-10 sticky" />
          </div>
          <div className="absolute z-20 bottom-[-30px] right-[40px]">
            <div className="border-[1px] border-primary absolute right-[13px] bottom-2 w-full h-full z-0"></div>
            <button className="bg-chip text-xl py-2 px-4 border-[1px] border-primary z-10 sticky">
              View More Service
            </button>
          </div>
        </div>
      </div>
      <div className="bg-secondary  px-20 py-10">
        <h2 className="font-header text-4xl text-primary mt-16">
          Our Client Feedack
        </h2>
        <div className="flex flex-column justify-around mt-32">
          <div className="w-auto h-full relative">
            <div className="w-full m-h-[90%] h-[71%] border-[1px] border-primary absolute right-[13%] bottom-[35%] z-0 opacity-50"></div>
            <img src={client1} className="z-10 sticky mb-6" />
            <p className="w-[237px] border-[1px] border-black text-primary text-3 px-6 py-4  text-l font-medium">
              The price is reasonable and the design is cute. Their service is
              excellent.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative bottom-[15%]">
              <div className="w-full m-h-[90%] h-[71%] border-[1px] border-primary absolute right-[13%] bottom-[35%] z-0 opacity-50"></div>
              <img src={client2} className="z-10 sticky  mb-6" />
              <p className="w-[237px] border-[1px] border-black text-primary text-3 px-6 py-4 text-l font-medium">
                The price is reasonable and the design is cute. Their service is
                excellent.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-full relative bottom-0">
              <div className="w-full m-h-[90%] h-[71%] border-[1px] border-primary absolute right-[13%] bottom-[35%] z-0 opacity-50"></div>
              <img src={client3} className="z-10 sticky  mb-6" />
              <p className="w-[237px] border-[1px] border-black text-primary text-3 px-6 py-4 text-l font-medium">
                The price is reasonable and the design is cute. Their service is
                excellent.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-full relative bottom-[15%]">
              <div className="w-full m-h-[90%] h-[71%] border-[1px] border-primary absolute right-[13%] bottom-[35%] z-0 opacity-50"></div>
              <img src={client4} className="z-10 sticky  mb-6" />
              <p className="w-[237px] border-[1px] border-black text-primary text-3 px-6 py-4 text-l font-medium">
                The price is reasonable and the design is cute. Their service is
                excellent.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FirstFooter />
      <div className="flex flex-row justify-center overflow-hidden">
        {/* <div
          className=" translate-x-[-7.5rem] 
        translate-y-[-6rem]  left-0 rotate-[25deg] overflow-hidden"
        >
          {" "}
          <img src={fancy2} className="w-[255px] h-[198px]  bg-secondary  " />
        </div> */
}
//   <div className="bg-secondary w-full h-fit p-4 text-center text-primary opacity-50 text-xl ">
//     Copyright @ Green Lotus Eatery I Design By Webloom
//   </div>
//   {/* <img src={fancy1} /> */}
// </div> */}
