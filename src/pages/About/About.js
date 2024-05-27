import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "../../Navigation/Nav";
import about from "../About/assests/about-us-building.png";
import mission from "../About/assests/our-mission-building.png";
import mobileMission from "../About/assests/mission-mobile.png";
import vision from "../About/assests/vision-building.png";
import building1 from "../About/assests/building-1.png";
import building2 from "../About/assests/building-2.png";
import building3 from "../About/assests/building-3.png";
import building4 from "../About/assests/building-4.png";
import building5 from "../About/assests/building-5.png";
import SecondFooter from "../../footer/second-footer";
import mobileVision from "../About/assests/mobileVision.png";
import { UserContext } from "../../App";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function About() {
  const { dark, setDark } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className={dark === "dark" ? "dark" : ""}>
        <div className="min-w-full relative">
          <h1 className="absolute text-6xl lg:text-8xl font-medium uppercase translate-y-full lg:mt-[5%] text-primary left-[10rem] min-[375px]:text-4xl min-[375px]:ml-0 sm:top-36 sm:text-5xl z-10 dark:text-neutralWhite min-[375px]:max-sm:left-6">
            About Us
          </h1>
          <img
            src={about}
            alt="About Us Page Building"
            className="dark:brightness-50 w-full"
          />
        </div>
        <OurMission />
        <OurVision />
        <OurProject />
        <SecondFooter />
      </div>
    </>
  );
}
export function Frame({
  w = "236px",
  h = "356px",
  c,
  location,
  mobile,
  mobileLocation,
  isLetter,
}) {
  const [seen, setSeen] = useState(false);
  function handleMouseMove(e) {
    setSeen(!seen);
  }

  return (
    <div
      className={`border-[1px] border-primary dark:border-secondary ${c}  ${mobile ? "w-full h-full " : `w-[${w}] h-[${h}] `}`}
    >
      <div
        className={`${isLetter === true ? "cursor-pointer" : "cursor-default"}
          md:filter-none relative h-full w-full z-0 flex flex-col items-center ml-2`}
        onClick={handleMouseMove}
      >
        <p
          className={`${seen ? "visible " : "invisible"} font-body  text-wrap w-full h-full absolute inline-flex flex-col font-medium items-center justify-center text-xl min-[375px]:text-lg min-[375px]:font-normal leading-8 z-50 ${isLetter ? "block" : "hidden"}`}
        >
          Location -No(64),
          <br /> 133rd Street,
          <br /> Ponnar Kone Quarter,
          <br /> Tamwe Township,
          <br />
          Yangon, Myanmar.
          <br /> Area – 30′ x 33′ <br />
          Type – 6 Storeyed <br />
          R.C.C Building
        </p>
        <img
          src={location}
          alt="building"
          className={`${c} ${seen && isLetter ? "blur-md " : ""}   mt-4 ml-4 ${mobile ? "hidden h-0" : "block "}`}
        />
        <img
          src={mobileLocation}
          alt="building"
          className={` w-full   mt-4 ml-4 ${mobile ? `block h-full` : "hidden h-0"}`}
        />
      </div>
    </div>
  );
}

function OurMission() {
  return (
    <div className="flex flex-row h-auto w-full items-center bg-secondary lg:max-xl:px-16 lg:max-xl:py-20 sm:max-lg:flex sm:max-lg:flex-col sm:max-lg:px-0 sm:max-lg:py-12 sm:max-lg:gap-6 min-[375px]:p-0  min-[375px]:flex  min-[375px]:max-lg:flex-col  xl:py-12 min-[375px]:py-0 min-[375px]:h-full dark:bg-[#0A0B14]">
      <div className="font-header text-center w-9/12 px-10 text-primary h-full pt-12  sm:max-lg:px-10  sm:max-lg:w-full  min-[375px]:max-lg:px-0   sm:max-lg:py-10  min-[375px]:w-full dark:text-neutralWhite ">
        <h2 className="uppercase text-5xl  sm:max-lg:text-5xl min-[375px]:max-sm:text-3xl">
          Our Mission
        </h2>
        <p className="text-medium text-3xl lg:max-xl:px-0 px-10 mt-6 sm:max-lg:px-0  sm:max-lg:text-2xl min-[375px]:max-lg:text-base min-[375px]:max-lg:px-6 ">
          A pure focus on all-inclusive projects. The best outcomes derive from
          expert oversight and a commitment to unwavering high-quality. We
          prefer to handle everything. DCC never stops searching for better.
          Being deliberately selective about the projects we take on makes us
          stand out. From people to process to techn
        </p>
      </div>
      <div className="lg:w-4/12 lg:h-full sm:max-lg:h-[300px] p-4 md:max-lg:w-[90%] sm:w-full sm:max-lg:flex sm:max-lg:justify-center sm:max-lg:px-20 sm:max-lg:pt-0 sm:max-lg:pb-0 lg:max-xl:p-0 xl:px-0 min-[375px]:pr-6 min-[375px]:pl-2 min-[375px]:pt-8 min-[375px]:pb-4 min-[375px]:w-full min-[375px]:h-[17rem] ">
        <Frame
          location={mobileMission}
          // mobileLocation={mobileMission}
          c={"h-full w-full min-[375px]:block lg:hidden"}
        />
        <Frame
          location={mission}
          mobile={window.innerWidth < 1024}
          mobileLocation={mobileMission}
          c={" min-[375px]:max-lg:hidden"}
        />
      </div>
    </div>
  );
}

function OurVision() {
  return (
    <div className="dark:bg-blend-saturation dark:bg-[#00000067] visionBg">
      <div className="text-primary dark:text-neutralWhite  font-header w-full flex flex-col items-center min-[375px]:max-md:px-6 min-[375px]:max-md:pb-[23rem] px-12 sticky z-10 gap-8 sm:pb-[18.5rem] sm:pt-8 ">
        <h2 className="min-[375px]:max-sm:text-3xl sm:max-lg:text-4xl lg:text-5xl mt-10  ">
          Our Vision
        </h2>
        <p className="sm:max-lg:text-2xl min-[375px]:max-md:px-0 lg:text-3xl lg:px-12 text-center bg-transparent">
          Being deliberately selective about the projects we take on makes us
          stand out. From people to process to technology, we put quality first
          and ensure an elevated standard – regardless of budget or scope.
          Clients come to us to take their visions out of this world.
        </p>
      </div>
      {/* <div className="w-full sticky bottom-36 z-0">
        <img
          src={vision}
          alt="vision building"
          className="min-[375px]:hidden sm:block"
        />
        <img
          src={mobileVision}
          alt="vision"
          className="sm:hidden min-[375px]:block w-full"
        />
      </div> */}
    </div>
  );
}
function OurProject() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <div className="lg:py-4 xl:p-6 overflow-hidden bg-secondary pb-10 dark:bg-[#0A0B14] px-4">
      <div className="w-full text-center font-header font-medium text-primary dark:text-neutralWhite py-6 mt-12">
        <h2 className="min-[375px]:max-lg:text-2xl lg:text-3xl">
          Our Completed Projects
        </h2>
        <h4 className="text-xl xl:text-2xl mt-3">Let us create your idea.</h4>
      </div>
      {/* <div className="flex flex-row justify-between gap-12 xl:gap-16 min-[375px]:max-md:gap-12 w-full  min-[375px]:h-full min-[375px]:py-12 px-6 xl:px-4  whitespace-nowrap overflow-auto min-[375px]:max-md:px-12 lg:gap-12"> */}
      <Slider {...settings}>
        <div className="px-6 min-[375px]:h-[25rem] sm:h-[15rem] md:h-[17rem] xl:h-[24rem] 2xl:h-[28rem] min-[1920px]:h-[34rem]">
          <Frame
            location={building1}
            c={"w-full h-full"}
            // c={
            //   "min-[375px]:max-sm:min-w-[50svw] w-full min-[375px]:h-[17rem] md:min-w-[26svw] md:h-[315px] sm:h-[350px] md:h-[315px]  lg:h-[25.5rem] xl:h-[31rem] sm:max-md:min-w-[40svw] "
            // }
            isLetter={true}
          />
        </div>

        <div className="px-6 min-[375px]:h-[25rem] sm:h-[15rem] md:h-[17rem] xl:h-[24rem] 2xl:h-[28rem] min-[1920px]:h-[34rem]">
          <Frame
            location={building2}
            c={"w-full h-full"}
            // c={
            //   "min-[375px]:max-sm:min-w-[50svw] min-[375px]:h-[17rem] sm:h-[350px] md:min-w-[26svw] md:h-[315px] lg:h-[25.5rem] xl:h-[31rem] sm:max-md:min-w-[40svw] "
            // }
            isLetter={true}
          />
        </div>

        <div className="px-6 min-[375px]:h-[25rem] sm:h-[15rem] md:h-[17rem] xl:h-[24rem] 2xl:h-[28rem] min-[1920px]:h-[34rem]">
          <Frame
            location={building3}
            c={"w-full h-full"}
            // c={
            //   "min-[375px]:max-sm:min-w-[50svw] min-[375px]:h-[17rem] md:min-w-[26svw] sm:h-[350px]  md:h-[315px] lg:h-[25.5rem] xl:h-[31rem] sm:max-md:min-w-[40svw] "
            // }
            isLetter={true}
          />
        </div>

        <div className="px-6 min-[375px]:h-[25rem] sm:h-[15rem] md:h-[17rem] xl:h-[24rem] 2xl:h-[28rem] min-[1920px]:h-[34rem]">
          <Frame
            location={building4}
            c={"w-full h-full"}
            // c={
            //   "min-[375px]:max-sm:min-w-[50svw] min-[375px]:h-[17rem] md:min-w-[26svw] sm:h-[350px] md:h-[315px] lg:h-[25.5rem] xl:h-[31rem] sm:max-md:min-w-[40svw] "
            // }
            isLetter={true}
          />
        </div>

        <div className="px-6 min-[375px]:h-[25rem] sm:h-[15rem] md:h-[17rem] xl:h-[24rem] 2xl:h-[28rem] min-[1920px]:h-[34rem]">
          <Frame
            location={building5}
            c={"w-full h-full"}
            // c={
            //   "min-[375px]:max-sm:min-w-[50svw] min-[375px]:h-[17rem] md:min-w-[26svw] sm:h-[350px] md:w-[27svw] md:h-[315px] lg:h-[25.5rem] xl:h-[31rem] sm:max-md:min-w-[40svw] "
            // }
            isLetter={true}
          />
        </div>
      </Slider>
      {/* </div> */}
    </div>
  );
}
export default About;
