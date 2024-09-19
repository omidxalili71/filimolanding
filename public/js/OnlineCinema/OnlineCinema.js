async function OnlineCinema() {
  let data = await fetch("https://omidxalili71.github.io/filimo-api/db.json");
  let res = await data.json();

  let cinema = res.onlineCinema.map((item) => {
    return `<div id="ticket__item">
                <div id="ticket__item__image">
                  <img src=${item.src} alt=${item.alt}>
                </div>
                <div id="ticket__item__desc">
                  <div id="online__film__title">
                    <h4>${item.title}</h4>
                    <div id="ekraan">
                      <img src="./public/images/svg/ekraan.png" alt="">
                      <h5>اکران آنلاین</h5>
                    </div>
                  </div>
                  <div id="coach">
                    <h5>کارگردان: ${item.coach}</h5>
                  </div>
                  <div id="tags">
                    <span>${item.tags.tag1}</span>
                    <span>${item.tags.tag2}</span>
                  </div>
                  <div id="buy__ticket">
                    <a href="#">خرید بلیت</a>
                  </div>
                </div>
              </div>`;
  });
  document
    .querySelector(".ticket__box")
    .insertAdjacentHTML("afterbegin", cinema.join(""));
}
export default OnlineCinema;
