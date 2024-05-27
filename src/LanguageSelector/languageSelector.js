import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n.js";
import { changeLanguage } from "i18next";
import { UserContext } from "../App.js";

const languages = [
  { code: "en", lang: "English" },
  { code: "mm", lang: "Myanmar" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  //   const [lng, setLng] = useState(i18n.changeLanguage(lng));
  //   const { lng, setLng } = useContext(UserContext);
  window.localStorage.setItem(
    "lang",
    i18n.language || window.localStorage.getItem("lang"),
  );
  //   console.log(window.localStorage.getItem('lang'));
  const changeLanguage = (lng) => {
    // if (lng === "en") {
    //   setLng("mm");
    // } else {
    //   setLng("en");
    // }
    i18n.changeLanguage(lng);
    // console.log();
  };
  //   console.log(changeLanguage);

  //   console.log(i18n.t("firstName"));
  return (
    <div className="flex flex-col xl:flex-row gap-4 min-[375px]:gap-0">
      {languages.map((lan) => (
        <button
          key={lan.code}
          onClick={() => changeLanguage(lan.code)}
          className={
            lan.code === i18n.language
              ? "text-chip min-[375px]:bg-primary min-[375px]:mt-[1px] xl:mt-0 py-2"
              : " min-[375px]:bg-primary min-[375px]:mt-[1px] xl:mt-0 py-2 px-3 w-full"
          }
        >
          {/* {console.log(i18n.language)}
          {console.log(lan.lang)} */}
          {lan.lang}
        </button>
      ))}
    </div>
  );
}
export default LanguageSelector;
