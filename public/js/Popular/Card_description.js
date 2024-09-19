async function Card_description(descData) {

  let finalFilter = descData.map((element) => {
    return element.exclusiveCode;
  });  
  
  let card = descData.map((item) => {
    if (finalFilter.join("").includes("s")) {
      return `<div id="film__title">
      <h5>${item.description.title}</h5>
      <h4>${item.description.coach}</h4>
    </div>
    <div id="tags">
      <span>${item.description.tags.tag1}</span>
      <span>${item.description.tags.tag2}</span>
    </div>
    <div id="film__description">
      <p>${item.description.summury}</p>
    </div>`;
    } else if (finalFilter.join("").includes("f")){
      return `<div id="film__title">
      <h5>${item.description.title}</h5>
      <h4>${item.description.coach}</h4>
    </div>
    <div id="tags">
      <span>${item.description.tags.tag1}</span>
      <span>${item.description.tags.tag2}</span>
    </div>
    <div id="film__description">
      <p>${item.description.summury}</p>
    </div>
    <div id="film__more__title">
  <div class="permium" id="permium">
    <span class="pc:block">
      <img src="./public/svg/ticket.svg" alt="" />
    </span>
    <a class="permium__title parastyle" href="#">
      خرید اشتراک و تماشا
    </a>
  </div>
  <p>
    ${item.filmDetail.esra} - ${item.filmDetail.duration} - ${item.filmDetail.born} - ${item.filmDetail.quality}
  </p>
</div>`;
    }
    ;
  });
  document.querySelector(".pop__down .description").innerHTML = card.join("");
}

export default Card_description;

