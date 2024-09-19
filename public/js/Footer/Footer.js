async function Footer() {
  let data = await fetch("https://omidxalili71.github.io/filimo-api/db.json");
  let res = await data.json();
  let generateFoter = res.footer.map((item) => {
    if (item.svgUrl !== "") {
      if (item.subMenu.length === 0) {
        return `<div class="nav__item group">
                    <img src=${item.svgUrl} alt="">
                    <a href=${item.href}>${item.title}</a>
                  </div>`;
      } else if (item.subMenu.length > 0) {
        return `<div class="nav__item group">
                    <img src=${item.svgUrl} alt="">
                    <a href=${item.href}>${item.title}</a>
                    <div class="submenu">
                      ${item.subMenu
                        .map((elem) => {
                          return `<div class="submenu__item">
                        <a href=${elem.href}>${elem.title}</a>
                      </div>`;
                        })
                        .join("")}
                  </div>`;
      }
    } else if (item.svgUrl === "") {
      if (item.subMenu.length === 0) {
        return `<div class="nav__item group">
                    <a href=${item.href}>${item.title}</a>
                  </div>`;
      } else if (item.subMenu.length > 0) {
        return `<div class="nav__item group">
                    <img src=${item.svgUrl} alt="">
                    <a href=${item.href}>${item.title}</a>
                    <div class="submenu">
                      ${item.subMenu
                        .map((elem) => {
                          return `<div class="submenu__item">
                        <a href=${elem.href}>${elem.title}</a>
                      </div>`;
                        })
                        .join("")}
                  </div>`;
      }
    }
  });
  document
    .querySelector(".footer__center nav")
    .insertAdjacentHTML("afterbegin", generateFoter.join(""));
}
export default Footer;
