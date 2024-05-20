import Nav from "../../Navigation/Nav";

import contactHead from "./contactHead.png";
import mobilecontactHead from "./mobileContact.png";

import Footer from "../../footer/main-footer";
import { UserContext } from "../../App";
import { useContext } from "react";

function Contact() {
  const {dark,setDark} = useContext(UserContext);
  return (
    <>
      <Nav />
      <div className={dark === 'dark' ? "dark" : ""}>
        <Head />
        <Footer />
      </div>
    </>
  );
}
function Head() {
  return (
    <>
      <div className="relative h-fit ">
        <img
          src={contactHead}
          alt="headbuilding"
          className="min-[375px]:hidden sm:block dark:brightness-50 "
        />
        <img
          src={mobilecontactHead}
          alt="mobileheadbuilding"
          className="sm:hidden w-full -mt-[1px] -z-10 border-primary"
        />
      </div>
      <div className="absolute min-[375px]:flex top-12  flex-col  justify-center left-8 min-[375px]:gap-44 sm:gap-28  min-[375px]:w-fit  sm:top-52  xl:top-2/3 md:top-96 sm:left-16 xl:left-36 font-header h-fit min-[375px]:top-[30%]">
        <h1 className="min-[375px]:text-4xl sm:text-6xl  md:text-8xl text-primary font-normal uppercase tracking-wider text-shadow ">
          Contact us
        </h1>
        <p className="lg:text-3xl text-neutralWhite w-3/4 mt-8">
          Hope to see you again, Hope to see you again, Hope to see you again,
          Hope to see you again,Hope to see you again.
        </p>
      </div>
    </>
  );
}
export default Contact;
