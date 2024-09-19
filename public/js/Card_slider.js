async function Card_slider(getElement) {
  let data = await fetch("https://omidxalili71.github.io/filimo-api/db.json");
  let res = await data.json();
  let finalFilter = getElement.map((element) => {
    return element.exclusiveCode;
  });
  
  let finalFetch = res.cardSlider.filter((item) => {
    return item.exclusiveCode === finalFilter.join("");
  });

  let sliderFinal = finalFetch.map((elem) => {
    if (finalFilter.join("").includes("s")) {
      return `<div class="swiper-slide">
                      <div class="slide-div">
                        <img src=${elem.src} alt=${elem.alt}>
                      </div>
                      <div class="slide-title">
                        <p>فصل ${elem.session} قسمت ${elem.part}</p>
                      </div>
                        <div class="lock-div">
                            <img src="./public/images/pop-serial/download.png" alt="lock" >
                        </div>
                    </div>`;
    } 
  });
  document.querySelector(".mySwiper .swiper-wrapper").innerHTML = sliderFinal;

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
export default Card_slider;
