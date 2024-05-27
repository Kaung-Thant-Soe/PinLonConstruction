import facebook from "../footer/assests/facebook.png";
import twitter from "../footer/assests/twitter.png";
import whatup from "../footer/assests/whatsup.png";
import instagram from "../footer/assests/instagram.png";
import youtube from "../footer/assests/youtube.png";
import tiktok from "../footer/assests/tiktok.png";

import gps from "../footer/assests/location icon.png";
import email from "../footer/assests/mail icon.png";
import phone from "../footer/assests/phone icon.png";

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
function SecondaryFooter() {
  const dark = useContext(UserContext);
  function MobileFooter() {
    
    return (
      <div className="md:hidden min-[375px]:block dark:bg-[#0A0B14]">
        <div className="flex flex-row items-center w-full justify-center gap-6 py-12 px-3 md:justify-around sm:gap-8 ">
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
        <div className="bg-secondary dark:bg-[#0A0B14] py-6  dark:border-t-[1px] dark:border-t-secondary ">
          <p className=" text-sm text-primary opacity-50 text-center dark:text-secondary">
            Copyright @ Green Lotus Eatery I Design By Webloom
          </p>
        </div>
      </div>
    );
  }
  function DesktopFooter() {
    return (
      <>
        <div className="min-[375px]:hidden md:block dark:bg-[#0A0B14]  ">
          <div className="sm:flex  flex-col items-center text-3xl py-8 md:py-12 gap-4 md:text-xl text-primary font-body dark:text-secondary">
            <div className="flex flex-row items-center bg-secondary dark:bg-[#161515] justify-center w-fit py-2 px-6 rounded gap-6 cursor-pointer">
              <img
                src={dark.dark === "dark" ? darklocation : gps}
                alt="gps icon"
              />
              <p>No.136, Aungmingalar Str,Hlaing Tsp, Yangon, Myanmar.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-8">
              <div
                className="flex flex-row items-center justify-center bg-secondary dark:bg-[#161515] w-fit py-2 px-6 rounded  gap-6 cursor-pointer"
                onClick={() => (window.location = "mailto:lin453248@gmail.com")}
              >
                <img
                  src={dark.dark === "dark" ? darkmail : email}
                  alt="mail icon"
                />
                <p>lin453248@gmail.com</p>
              </div>
              <div
                className="flex flex-row items-center justify-center bg-secondary dark:bg-[#161515] w-fit py-2 px-6 rounded gap-6 cursor-pointer"
                onClick={() => (
                  (window.location = "tel:+959778589398"),
                  console.log("calldiv")
                )}
              >
                <img
                  src={dark.dark === "dark" ? darkphone : phone}
                  alt="phone icon"
                />
                <p>+959-778-589-398</p>
              </div>
            </div>
          </div>
          <div className=" py-4 dark:bg-black dark:border-t-[1px] dark:border-t-secondary bg-secondary">
            <p className=" text-3xl md:text-xl dark:text-secondary text-primary opacity-50 text-center">
              Copyright @ Green Lotus Eatery I Design By Webloom
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <MobileFooter /> <DesktopFooter />
    </>
  );
}
export default SecondaryFooter;
