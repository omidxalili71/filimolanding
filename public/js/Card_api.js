import Card_description from "./Card_description";
import Description from "./Description";
import Card_slider from "./Card_slider";
import Cover_logo from "./Cover_logo";

async function Card_api(cardList) {
  let activeTab = document.querySelector(".pop__link .active");

  // create cart component
  let card = cardList.map((item) => {
    return `<div id="${item.exclusiveCode}" class="card" data-bg=${item.bgURL}>
                <img src=${item.cardSrc} alt=${item.cardAlt} />
                <div class="filimo__special">

                </div>
              </div>`;
  });
  document.querySelector(".pop__top .cards").innerHTML = card.join("");

  //select defult card
  let cardsChildren = document.querySelectorAll(".card");
  let result = [...cardsChildren];
  function defultCard() {
    result[0].classList.add("active");
  }
  defultCard();

  //set defult card banner
  let currentElement = document.querySelector(".cards .active");
  let banner = document.querySelector(".popular__center .pop__down");
  function cardBanner(currentElement) {
    let itemStyle = currentElement.attributes[2].nodeValue;
    banner.style.backgroundImage = `url('${itemStyle}')`;
  }
  cardBanner(currentElement);

  //get card description
  function getCardDesc() {
    let currentElementValue = currentElement.attributes[0].nodeValue;
    let newFilter = cardList.filter((item) => {
      return item.exclusiveCode === currentElementValue;
    });
    return newFilter;
  }
  getCardDesc();

  //set defult card description and slider and logo
  Card_description(getCardDesc(),);
  Card_slider(getCardDesc());
  Cover_logo(getCardDesc());


  //set eventListener for cards and change data
  function clickHandler(result) {
    result.map((item) => {
      item.addEventListener("click", function () {
        currentElement.classList.remove("active");
        item.classList.add("active");
        currentElement = item;
        let itemStyle = currentElement.attributes[2].nodeValue;
        banner.style.backgroundImage = `url('${itemStyle}')`;

        Description(getCardDesc());
        Card_slider(getCardDesc());
        Cover_logo(getCardDesc());
      });
    });
  }
  clickHandler(result);
}
export default Card_api;
