async function FaqApi() {
    
    let data= await fetch("https://omidxalili71.github.io/filimo-api/db.json")
    let res= await data.json()
    let filimoFaq=res.faq.map((item)=>{
      return `<div class="accordion-single-item js-acc-item">
                  <h2 class="accordion-single-title js-acc-single-trigger">${item.question}</h2>
                  <div class="accordion-single-content">
                    <p>${item.answer}</p>
                  </div>
                </div>`
    })
    document.querySelector(".accordion-single").insertAdjacentHTML("afterbegin",filimoFaq.join(""))
  }
  export default FaqApi;
  