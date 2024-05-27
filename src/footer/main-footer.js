import facebook from "../footer/assests/facebook.png";
import instagram from "../footer/assests/instagram.png";
import twitter from "../footer/assests/twitter.png";
import tiktok from "../footer/assests/tiktok.png";
import whatup from "../footer/assests/whatsup.png";
import youtube from "../footer/assests/youtube.png";
import map from "../footer/assests/location.png";
import mobileMap from "../footer/assests/mobileLocation.png";
import "../footer/main.css";
import location from "../footer/assests/location icon.png";
import phone from "../footer/assests/phone icon.png";
import mail from "../footer/assests/mail icon.png";

import darklocation from "../footer/assests/dark mode/darkgps.png";
import darkphone from "../footer/assests/dark mode/darkPhone.png";
import darkmail from "../footer/assests/dark mode/darkMail.png";

import darkfacebook from "../footer/assests/dark mode/darkFacebook.png";
import darkinstagram from "../footer/assests/dark mode/darkInstagram.png";
import darktwitter from "../footer/assests/dark mode/darkTwitter.png";
import darktiktok from "../footer/assests/dark mode/darkTiktok.png";
import darkwhatup from "../footer/assests/dark mode/darkWhatsUp.png";
import darkyoutube from "../footer/assests/dark mode/darkYoutube.png";

import { UserContext } from "../App";
import { useContext } from "react";
import { useHref } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
console.log(i18next);
function FirstFooter() {
  const dark = useContext(UserContext);
  const { lng, setLng } = useContext(UserContext);
  const { t } = useTranslation();

  return (
    <>
      <div className="sm:bg-secondary dark:bg-[#0A0B14] min-[375px]:bg-neutralWhite min-[375px]:py-6 min-[375px]:gap-4 sm:gap-4 sm:py-8 sm:px-4 flex sm:flex-row xl:py-20 lg:px-12 lg:py-12 lg:gap-12 xl:px-28 items-center min-[375px]:flex-col min-[375px]:w-full xl:gap-12">
        <div className="sm:w-3/6 min-[375px]:px-6 sm:px-0">
          <h2 className="sm:mb-16 min-[375px]:text-2xl  text-primary sm:text-4xl lg:text-6xl min-[375px]:text-center min-[375px]:mb-4 dark:text-neutralWhite">
            Contact Us
          </h2>
          <img
            src={map}
            alt="map location"
            className="w-full h-full sm:block min-[375px]:hidden"
          />
          <img
            src={mobileMap}
            alt="mobile map location"
            className="sm:hidden w-full h-full border-t-primary divide-y-2"
          />
        </div>
        <div className="sm:w-3/6 xl:px-8 ">
          <div className="min-[375px]:py-6 min-[375px]:px-0  sm:px-4 sm:py-6 min-[375px]:bg-secondary sm:bg-neutralWhite dark:bg-[#1a2e42]  xl:py-12 lg:px-12 xl:px-6  lg:py-10 h-full flex flex-col justify-center min-[1920px]:px-12">
            <div className="p-5">
              <h2 className="min-[375px]:text-xl sm:text-3xl min-[375px]:px-8 sm:px-0 dark:text-neutralWhite text-primary font-header  min-[1920px]:text-5xl">
                Get In touch
              </h2>
              <h3 className="min-[375px]:text-base sm:text-xl min-[375px]:px-8 sm:px-0 dark:text-secondary text-primary font-body min-[1920px]:text-3xl">
                You can reach us anytime
              </h3>
            </div>
            <form
              className={
                i18next.language === "mm"
                  ? "flex min-[375px]:px-8 sm:px-0 flex-col justify-center lg:gap-4 mt-6 min-[375px]:mt-3 min-[375px]:gap-2 "
                  : "flex min-[375px]:px-8 sm:px-6 flex-col justify-center lg:gap-4 mt-6 min-[375px]:mt-3 min-[375px]:gap-2 "
              }
            >
              <div className="flex w-full h-full">
                <div className="flex flex-row justify-between w-full gap-4">
                  <label className="w-full min-[375px]:h-12 sm:h-9 2xl:h-16">
                    <input
                      type="text"
                      placeholder={t("firstName")}
                      className={`w-full placeholder:opacity-50 ps-2 h-8 2xl:h-full 2xl:py-4 placeholder:text-sm 2xl:placeholder:text-2xl min-[375px]:h-full`}
                    />
                  </label>
                  <label className="w-full min-[375px]:h-12 sm:h-9 2xl:h-16">
                    <input
                      type="text"
                      placeholder={t("secondName")}
                      className={`w-full sm:ps-2 placeholder:opacity-50 ps-2 h-8 2xl:h-full 2xl:py-4 placeholder:text-sm 2xl:placeholder:text-2xl min-[375px]:h-full`}
                    />
                  </label>
                </div>
              </div>
              <label className="w-full min-[375px]:h-12 sm:h-9 2xl:h-16">
                <input
                  type="email"
                  className="w-full placeholder:opacity-50 ps-2 h-8 2xl:h-full 2xl:py-4 placeholder:text-sm 2xl:placeholder:text-2xl min-[375px]:h-full"
                  placeholder={t("email")}
                />
              </label>
              <label className="w-full min-[375px]:h-12 sm:h-9 2xl:h-16">
                <input
                  type="tel"
                  className="w-full placeholder:opacity-50 ps-2 h-8 2xl:h-full 2xl:py-4 placeholder:text-sm 2xl:placeholder:text-2xl min-[375px]:h-full"
                  placeholder={t("phoneNumber")}
                />
              </label>
              <textarea
                cols="30"
                rows="10"
                className="lg:h-28 sm:h-16 placeholder:opacity-50 placeholder:pt-4 ps-2 2xl:placeholder:text-2xl min-[375px]:h-24 2xl:h-32"
                placeholder={t("help")}
              ></textarea>
              <div className="text-center flex justify-center mt-4">
                <div className="min-[375px]:w-[5rem]  lg:w-[7.1rem]   border-2 border-black dark:border-primary">
                  <input
                    type="submit"
                    className="h-full min-[375px]:py-1 min-[375px]:px-2 lg:py-1 lg:px-6 bg-chip text-neutralWhite mt-1 ml-1 lg:mt-2 lg:ml-2 text-xl"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" min-[375px]:flex-col min-[375px]:gap-6 lg:flex-row flex justify-center lg:gap-12 lg:ps-12 xl:gap-28 xl:ps-28 lg:pe-12 bg-neutralWhite lg:py-12 dark:bg-[#0A0B14] min-[375px]:py-6 ">
        <div className="flex flex-col justify-center w-full gap-6 min-[375px]:items-center ">
          <h2 className="underline underline-offset-4 decoration-solid lg:text-2xl xl:text-3xl text-primary decoration-inherit dark:text-secondary">
            Our Social Media
          </h2>
          <div className="flex items-center xl:gap-8 lg:gap-6 sm:gap-6 min-[375px]:gap-3">
            <a href="https://www.facebook.com/">
              <img
                src={dark.dark === "dark" ? darkfacebook : facebook}
                alt="facebook"
              />
            </a>
            <a href="https://www.instagram.com/">
              {" "}
              <img
                src={dark.dark === "dark" ? darkinstagram : instagram}
                alt="instagram"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src={dark.dark === "dark" ? darkyoutube : youtube}
                alt="youtube"
              />
            </a>
            <a href="https://x.com/">
              <img
                src={dark.dark === "dark" ? darktwitter : twitter}
                alt="twitter"
              />
            </a>
            <a href="https://www.tiktok.com/">
              <img
                src={dark.dark === "dark" ? darktiktok : tiktok}
                alt="tiktok"
              />
            </a>
            <a href="https://web.whatsapp.com/">
              <img
                src={dark.dark === "dark" ? darkwhatup : whatup}
                alt="whatup"
              />
            </a>
          </div>
        </div>
        <div
          className="w-full min-[375px]:py-4 min-[375px]:px-6  sm:items-center flex flex-col lg:items-start font-header min-[375px]:gap-2 lg:gap-1 min-[375px]:text-base lg:text-xl xl:text-3xl text-primary dark:text-neutralWhite cursor-pointer
        "
        >
          <div className="flex items-center bg-[rgba(33,67,102,0.03)] lg:py-0 xl:py-4 sm:px-8 min-[375px]:px-4 dark:bg-[#161515]  cursor-pointer">
            <img
              src={dark.dark === "dark" ? darklocation : location}
              alt="location"
              className="min-[375px]:py-6 lg:py-6 xl:py-8  mr-6"
            />
            <p className="">
              No.136, Aungmingalar Str,
              <br className="min-[375px]:hidden" /> Hlaing Tsp, Yangon, Myanmar.
            </p>
          </div>
          <div
            className="flex items-center bg-[#21436608] lg:py-0 xl:py-4 sm:px-8 min-[375px]:py-2 min-[375px]:px-4 dark:bg-[#161515]  cursor-pointer"
            onClick={() => (window.location = "mailto:lin453248@gmail.com")}
          >
            <img
              src={dark.dark === "dark" ? darkmail : mail}
              alt="mail"
              className="lg:py-6 xl:py-4 mr-6 "
            />
            <p className="">lin453248@gmail.com</p>
          </div>
          <div
            className="flex items-center bg-[#21436608] lg:py-0 xl:py-4 sm:px-8  min-[375px]:py-2 min-[375px]:px-4 dark:bg-[#161515]  cursor-pointer"
            onClick={() => (
              (window.location = "tel:+959778589398"), console.log("calldiv")
            )}
          >
            <img
              src={dark.dark === "dark" ? darkphone : phone}
              alt="phone"
              className="lg:py-6 xl:py-4 mr-6 "
            />
            <a className="" href="tel:+959778589398">
              +959-778-589-398
            </a>
          </div>
        </div>
      </div>
      <div className="py-6 text-center sm:text-xl min-[375px]:text-sm lg:text-3xl text-primary font-header dark:bg-black dark:text-secondary bg-secondary">
        <p>Copyright @ Green Lotus Eatery I Design By Webloom</p>
      </div>
    </>
  );
}
export default FirstFooter;
