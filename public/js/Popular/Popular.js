import Card_api from "./Card_api";
import Scroll from "./Scroll";

async function Popular() {
  let newData = await fetch("https://omidxalili71.github.io/filimo-api/db.json");
  let newRes = await newData.json();
  let cardList = newRes.favList.filter((item) => {
    return item.categury === "serial";
  });


  let popFilm = document.querySelector("#pop-film");
  let popSerial = document.querySelector("#pop-serial");
  let nextButton = document.querySelector(".mySwiper .swiper-button-next")
  let prevButton = document.querySelector(".mySwiper .swiper-button-prev")
  popFilm.addEventListener("click", function () {
    popSerial.classList.remove("active");
    popFilm.classList.add("active");
    nextButton.classList.add("hidden")
    prevButton.classList.add("hidden")
    cardList = newRes.filter((item) => {
      return item.categury === "film";
    });
    Card_api(cardList);
  });
  popSerial.addEventListener("click", function () {
    popFilm.classList.remove("active");
    popSerial.classList.add("active");
    nextButton.classList.remove("hidden")
    prevButton.classList.remove("hidden")
    cardList = newRes.filter((item) => {
      return item.categury === "serial";
    });
    Card_api(cardList)
  });  
  Card_api(cardList)
  Scroll()
}
export default Popular;
