import Nav from "../../Navigation/Nav";
import condo1 from "../../pages/Project/assests/condo/condo1.png";
import condo2 from "../../pages/Project/assests/condo/condo2.png";
import condo3 from "../../pages/Project/assests/condo/condo3.png";
import condo4 from "../../pages/Project/assests/condo/condo4.png";
import condo5 from "../../pages/Project/assests/condo/condo5.png";
import condo6 from "../../pages/Project/assests/condo/condo6.png";
import condo7 from "../../pages/Project/assests/condo/condo7.png";
import condo8 from "../../pages/Project/assests/condo/condo8.png";

import office1 from "../../pages/Project/assests/office/office1.png";
import office2 from "../../pages/Project/assests/office/office2.png";
import office3 from "../../pages/Project/assests/office/office3.png";
import office4 from "../../pages/Project/assests/office/office4.png";
import office5 from "../../pages/Project/assests/office/office5.png";
import office6 from "../../pages/Project/assests/office/office6.png";
import office7 from "../../pages/Project/assests/office/office7.png";
import office8 from "../../pages/Project/assests/office/office8.png";

import luxury1 from "../../pages/Project/assests/luxury/luxury1.png";
import luxury2 from "../../pages/Project/assests/luxury/luxury2.png";
import luxury3 from "../../pages/Project/assests/luxury/luxury3.png";
import luxury4 from "../../pages/Project/assests/luxury/luxury4.png";
import luxury5 from "../../pages/Project/assests/luxury/luxury5.png";
import luxury6 from "../../pages/Project/assests/luxury/luxury6.png";
import luxury7 from "../../pages/Project/assests/luxury/luxury7.png";
import luxury8 from "../../pages/Project/assests/luxury/luxury8.png";

import popular1 from "../../pages/Project/assests/popular/popular1.png";
import popular2 from "../../pages/Project/assests/popular/popular2.png";
import popular3 from "../../pages/Project/assests/popular/popular3.png";
import popular4 from "../../pages/Project/assests/popular/popular4.png";
import popular5 from "../../pages/Project/assests/popular/popular5.png";
import popular6 from "../../pages/Project/assests/popular/popular6.png";
import popular7 from "../../pages/Project/assests/popular/popular7.png";
import popular8 from "../../pages/Project/assests/popular/popular8.png";
import { Frame } from "../About/About";
import vector from "./assests/downarrow vector.png";
import { useState } from "react";
import Footer from "../../footer/second-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import bgImage from "../../pages/Project/assests/luxury/bg-image.png";

// import center from "./assests/header/center.png";
// import leftTop from "./assests/header/left-top.png";
// import leftBot from "./assests/header/left-bot.png";
// import rightTop from "./assests/header/right-top.png";
// import right from "./assests/header/right.png";
// import rightBot from "./assests/header/right-bot.png";

// import mobile1 from "./assests/header/mobile1.png";
// import mobile2 from "./assests/header/mobile2.png";
// import mobile3 from "./assests/header/mobile3.png";
import { UserContext } from "../../App";
import { useContext } from "react";

function Project() {
  const { dark, setDark } = useContext(UserContext);
  const isMobile = window.innerWidth < 1025;
  const condo = [
    { src: condo1, title: "condo", buildingName: "44TH STREET" },
    { src: condo2, title: "condo", buildingName: "TOKYO HOUSE" },
    { src: condo3, title: "condo", buildingName: "CB BANK (HPA-AN) " },
    { src: condo4, title: "condo", buildingName: "3 STOREYED R.C.C BUILDINGT" },
    { src: condo5, title: "condo", buildingName: "  MIN NANDAR" },
    { src: condo6, title: "condo", buildingName: "NAT CHAUNG" },
    { src: condo7, title: "condo", buildingName: "133RD STREET" },
    { src: condo8, title: "condo", buildingName: "MYA KHWAR NYO" },
  ];
  const office = [
    { src: office1, title: "office", buildingName: "BARGAYAR" },
    { src: office2, title: "office", buildingName: "ARTHARWADDY" },
    { src: office3, title: "office", buildingName: "NGUWAR " },
    {
      src: office4,
      title: "office",
      buildingName: "2 STOREYED R.C.C BUILDING",
    },
    { src: office5, title: "office", buildingName: " 42ND STREET" },
    { src: office6, title: "office", buildingName: "GENERAL HOSPITAL" },
    { src: office7, title: "office", buildingName: "WAI ZAYANDAR" },
    { src: office8, title: "office", buildingName: "FACTORY" },
  ];
  const luxury = [
    { src: luxury1, title: "luxury", buildingName: "SINMIN" },
    {
      src: luxury2,
      title: "luxury",
      buildingName: "4 STOREYED R.C.C BUILDING",
    },
    { src: luxury3, title: "luxury", buildingName: "SHWE POE EAIN" },
    { src: luxury4, title: "luxury", buildingName: "THAZIN MYAING" },
    { src: luxury5, title: "luxury", buildingName: " CO-OPERATIVE UNIVERSITY" },
    { src: luxury6, title: "luxury", buildingName: "THUMINGALAR" },
    { src: luxury7, title: "luxury", buildingName: "DUBAI" },
    { src: luxury8, title: "luxury", buildingName: "MYINTAWTHAR" },
  ];
  const popular = [
    {
      src: popular1,
      title: "popular",
      buildingName: "4 STOREYED R.C.C BUILDING",
    },
    { src: popular2, title: "popular", buildingName: "TOKYO HOUSE" },
    { src: popular3, title: "popular", buildingName: "NGUWAR" },
    {
      src: popular4,
      title: "popular",
      buildingName: "3 STOREYED R.C.C BUILDING",
    },
    { src: popular5, title: "popular", buildingName: "MIN NANDAR" },
    { src: popular6, title: "popular", buildingName: "NAT CHAUNG" },
    { src: popular7, title: "popular", buildingName: "WAI ZAYANDAR" },
    { src: popular8, title: "popular", buildingName: "MYINTAWTHAR" },
  ];
  function Head() {
    // const mobileImage = {
    //   backgroundImage: `url(${mobile1}),url(${mobile2}),url(${mobile3})`,
    //   backgroundSize: "initial",
    //   backgroundRepeat: " no-repeat",
    //   height: "73vh",
    //   backgroundPosition: " 2px 117px, 178px 33px, 14px 26rem",
    // };
    // const image = {
    //   backgroundImage: `url(${leftTop}),url(${leftBot}),url(${center}),url(${rightTop}),url(${right}),url(${rightBot})`,
    //   backgroundRepeat: "no-repeat",
    //   height: "120vh",
    //   backgroundSize: "initial",
    //   backgroundPosition:
    //     "-34px -100px, 0px  26rem, 3px -68px, 41.3rem -8.5rem, 71rem 12rem, 25.5rem  660px",
    // };
    return (
      <>
        <div className="dark:bg-black desktopImage ">
          <div className="min-[375px]:max-sm:translate-x-3  min-[375px]:max-sm:translate-y-3 translate-y-52 text-primary  font-header translate-x-80 2xl:translate-x-96 min-[1920px]:ml-40 w-full h-full 2xl:translate-y-96">
            <h1 className="min-[375px]:max-md:text-5xl text-6xl mb-2 uppercase font-semibold tracking-wider text-shadow 2xl:text-8xl ">
              Project
            </h1>
            <p className="text-2xl 2xl:text-4xl text-primary min-[375px]:text-neutralWhite">
              Just find your place
            </p>
          </div>
        </div>
      </>
    );
  }
  function BuildingBtn() {
    const [mobile, setMobile] = useState(false);
    const [bname, setBname] = useState("All");
    const btnName = ["Condo", "Office", "Luxury", "Popular"];
    function SelectSection() {
      if (bname.toLowerCase() === "condo") {
        return <Condo />;
      } else if (bname.toLowerCase() === "office") {
        return <Office />;
      } else if (bname.toLowerCase() === "luxury") {
        return <Luxury />;
      } else if (bname.toLowerCase() === "popular") {
        return <Popular />;
      } else
        return (
          <>
            <Condo />
            <Office />
            <Luxury />
            <Popular />
          </>
        );
    }
    const listBtn = btnName.map((item, index) => (
      <li
        key={index}
        className="bg-neutralWhite h-full text-centermin-[375px]:max-lg:w-36 font-medium min-[375px]:max-lg:bg-primary min-[375px]:max-lg:text-neutralWhite  min-[375px]:max-lg:ring-1 min-[375px]:max-lg:ring-black  z-10  "
      >
        <a
          className={`${bname === item ? "bg-chip text-neutralWhite" : ""} block w-full h-full px-6 py-3`}
          onClick={() => setBname(item)}
        >
          {item}
        </a>
      </li>
    ));
    return (
      <>
        <div className="h-full bg-primary min-[375px]:max-lg:h-36   flex flex-row justify-center dark:bg-black">
          <ul className="flex w-fit h-fit flex-row justify-center text-lg items-center gap-20 text-primary py-8 min-[375px]:max-lg:flex-col  min-[375px]:max-lg:gap-0 uppercase tracking-widest ">
            <li
              className="bg-neutralWhite h-full text-center min-[375px]:max-lg:py-0  min-[375px]:max-lg:w-36   visited:text-neutralWhite min-[375px]:max-lg:bg-chip min-[375px]:max-lg:text-neutralWhite font-medium min-[375px]:max-lg:mt-3"
              onClick={() => setMobile(!mobile)}
            >
              <a
                className={` w-full flex flex-row items-center justify-center gap-4 min-[375px]:max-lg:py-4 px-6 py-2 ${bname === "All" ? "bg-chip text-neutralWhite" : ""}`}
                onClick={() => setBname("All")}
              >
                <span>All</span>
                <img
                  src={vector}
                  alt="down arrow"
                  className="lg:hidden min-[375px]:block"
                />
              </a>
            </li>
            <div
              className={`z-20 lg:flex lg:flex-row lg:gap-20 ${mobile ? "min-[375px]:max-lg:flex min-[375px]:max-lg:flex-col" : "min-[375px]:max-lg:hidden"}`}
            >
              {listBtn}
            </div>
          </ul>
        </div>
        <SelectSection />
      </>
    );
  }
  function Condo() {
    return (
      <div>
        <div className="bg-secondary dark:bg-[#101827] xl:hidden min-[375px]:block">
          <MobileBuilding building={condo} />
        </div>
        <div className="bg-secondary dark:bg-[#101827] min-[375px]:hidden xl:block">
          <DesktopBuilding building={condo} />
        </div>
      </div>
    );
  }
  function Office() {
    return (
      <div>
        <div className="bg-secondary dark:bg-black xl:hidden min-[375px]:block">
          <MobileBuilding building={office} />
        </div>
        <div className="bg-secondary dark:bg-black min-[375px]:hidden xl:block">
          <DesktopBuilding building={office} />
        </div>
      </div>
    );
  }
  function Luxury() {
    return (
      <div>
        <div
          className={`bgMobile bg-blend-lighten bg-secondary dark:bg-blend-soft-light dark:bg-[#101827] xl:hidden min-[375px]:block`}
        >
          <MobileBuilding building={luxury} />
        </div>
        <div
          className={`bgImageDesktop bg-blend-lighten bg-secondary dark:bg-blend-soft-light dark:bg-[#101827] min-[375px]:hidden xl:block`}
        >
          <DesktopBuilding building={luxury} />
        </div>
      </div>
    );
  }
  function Popular() {
    return (
      <div>
        <div className="bg-secondary dark:bg-[#101827] xl:hidden min-[375px]:block">
          <MobileBuilding building={popular} />
        </div>
        <div className="bg-secondary dark:bg-[#101827] min-[375px]:hidden xl:block">
          <DesktopBuilding building={popular} />
        </div>
      </div>
    );
  }
  return (
    <>
        <Nav />
      <div className={dark === "dark" ? "dark" : ""}>
        <Head />
        <BuildingBtn />
        <Footer />
      </div>
    </>
  );
  function DesktopBuilding({ building }) {
    return (
      <div>
        <h2 className="uppercase  text-5xl text-primary ml-32 pt-20 dark:text-neutralWhite">
          {building[0].title}
        </h2>
        <div className="flex flex-row items-center justify-center gap-20 min-[1920px]:gap-48 mt-20">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <Frame location={building[0].src} isLetter={true} />
              <p className="mt-10  text-primary max-w-52 text-center border-[1px] py-3 px-10 ml-6 border-black  dark:text-neutralWhite dark:bg-primary">
                {building[0].buildingName}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Frame location={building[4].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-10 ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {" "}
                {building[4].buildingName}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-12 pb-52">
            <div className="flex flex-col items-center">
              <Frame location={building[1].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-6 tracking-wider font-medium ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {building[1].buildingName}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Frame location={building[5].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-6 tracking-wider font-medium ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {building[5].buildingName}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <Frame location={building[2].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-6 tracking-wider font-medium ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {building[2].buildingName}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Frame location={building[6].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-6 tracking-wider font-medium ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {building[6].buildingName}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-12 pb-52 ">
            <div className="flex flex-col items-center">
              <Frame location={building[3].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-6 tracking-wider font-medium ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {" "}
                {building[3].buildingName}{" "}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Frame location={building[7].src} isLetter={true} />
              <p className="mt-10  border-[1px] py-3 px-6 tracking-wider font-medium ml-6 border-black  text-primary max-w-52 text-center dark:text-neutralWhite dark:bg-primary">
                {building[7].buildingName}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function MobileBuilding({ building }) {
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
    const condoList = building.map((item, index) => (
      <div key={index} className="min-[375px]:pb-36 ">
        <div className="w-full px-6 min-[375px]:h-[25rem] sm:h-[15rem] lg:h-[19rem] ">
          <Frame location={item.src} isLetter={true} c={"w-full h-full"} />
          <div className="w-full text-center py-4 min-[375px]:py-8 px-12 sm:px-0 lg:py-6 h-[10rem]">
            <p className="border-[1px] border-black text-lg px-1 lg:px-6 tracking-wider font-medium py-4 text-primary text-center dark:text-neutralWhite dark:bg-primary">
              {item.buildingName}
            </p>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="px-4 py-8">
        <h2 className="uppercase text-5xl text-primary  py-16 text-center dark:text-neutralWhite">
          {building[0].title}
        </h2>
        <Slider {...settings}>
          {/* <div className=""> */}
          {condoList}
          {/* </div> */}
        </Slider>
      </div>
    );
  }
}

export default Project;
