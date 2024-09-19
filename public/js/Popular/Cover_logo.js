async function Cover_logo(getLogo) {
  let LogoUrl= getLogo
  let setLogo = LogoUrl.map((item)=>{
    return `<img src="${item.logoUrl}" alt="${item.cardAlt}">`
  })
  
  document.querySelector(".cover__logo").innerHTML=setLogo
}
export default Cover_logo;


