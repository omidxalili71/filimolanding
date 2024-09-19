async function Slider() {
  let sliderContainer = document.querySelector("#slider-container");
  let images = sliderContainer.children;

  setInterval(() => {
    let currentImage = sliderContainer.querySelector(".active");
    let nextImage = currentImage.nextElementSibling;
    if (!nextImage) {
      nextImage = images[0];
    }
    nextImage.classList.add("active");
    currentImage.classList.remove("active");
  }, 5000);

  let sliderData = await fetch(
    "https://omidxalili71.github.io/filimo-api/db.json"
  );
  let sliderDataJson = await sliderData.json();
  let firstSlider = "";
  firstSlider = sliderDataJson.slider.map((item) => {
    return `<img id="slider-img" class="active" src=${item.src} alt=${item.alt} />`;
  });
  document
    .querySelector("#slider-container")
    .insertAdjacentHTML("afterbegin", firstSlider.join(""));
}

export default Slider;
