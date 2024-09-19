import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import Popular from "./Popular/Popular";
import Card_slider from "./Popular/Card_slider";
import FreeContent from "./FreeContent/FreeContent";
import OnlineCinema from "./OnlineCinema/OnlineCinema";
import UserComments from "./UserComments/UserComments";
import FaqApi from "./Faq/FaqApi";
import Footer from "./Footer/Footer";

function generateSlider() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
function generateFcSlider() {
  var swiper = new Swiper(".fcSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      950: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
}

function generateUcSlider() {
  var swiper = new Swiper(".ucSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

function Faq() {
  const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");
  accSingleTriggers.forEach((trigger) =>
    trigger.addEventListener("click", toggleAccordion)
  );

  function toggleAccordion() {
    const items = document.querySelectorAll(".js-acc-item");
    const thisItem = this.parentNode;

    items.forEach((item) => {
      if (thisItem == item) {
        thisItem.classList.toggle("is-open");
        return;
      }
    });
  }
}
async function allData() {
  await Menu();
  await Slider();
  await Popular();
  await FreeContent();
  await OnlineCinema();
  await UserComments();
  await FaqApi();
  await Footer();
  generateSlider();
  generateFcSlider();
  generateUcSlider();
  Faq()
}
allData();
