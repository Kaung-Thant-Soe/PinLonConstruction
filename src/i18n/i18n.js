import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  fallbackLng: window.localStorage.getItem('lang'),
  debug: true,
  resources: {
    en: {
      translation: {
        firstName: "First Name",
        secondName: "Second Name",
        email: "Your Name",
        phoneNumber: "Your Phone Number",
        help: "How Can we help you?",
      },
    },
    mm: {
      translation: {
        firstName: "သင့်ရဲ့ ပထမနာမည် ",
        secondName: "သင့်ရဲ့ ဒုတိယနာမည်",
        email: "သင့်ရဲ့ emailလိပ်စာ",
        phoneNumber: "သင့်ရဲ့ ဖုန်းနံပါတ်",
        help: "ဘယ်လိုအကူအညီပေးရပါမလဲ",
      },
    },
  },
});

