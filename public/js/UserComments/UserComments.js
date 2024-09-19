async function UserComments() {
  let data = await fetch("https://omidxalili71.github.io/filimo-api/db.json");
  let res = await data.json();
  let slider = res.feedback.map((item) => {
    return `<div class="swiper-slide">
                    <div id="userName__box">
                      <div id="userName">
                        <img src="./public/images/faq/avatar.png" alt="adamak">
                        <h5>${item.userName}</h5>
                      </div>
                      <div id="userIcon">
                        <img src="./public/images/faq/virgul.png" alt="chat">
                      </div>
                    </div>
                    <div id="text__box">
                      <p>${item.description}</p>
                    </div>
                </div>`;
  });
  document
    .querySelector(".ucSwiper .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", slider.join(""));
}
export default UserComments;
