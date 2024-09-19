async function Description(descData) {
  descData.map((desc) => {
      return (
        document.querySelector("#film__title h5").innerText = desc.description.title,
        document.querySelector("#film__title h4").innerText = desc.description.coach,
        document.querySelector("#tags span:nth-of-type(1)").innerText = desc.description.tags.tag1,
        document.querySelector("#tags span:nth-of-type(2)").innerText = desc.description.tags.tag2,
        document.querySelector("#film__description p").innerText = desc.description.summury
      );
    });
  }
  
  export default Description;
  