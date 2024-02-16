let mapClicker = document.querySelector('.map');
let popOver = document.querySelector(".popover");
let body = document.querySelector("body");

function handleClicks (event) {
  event.preventDefault();

  console.log(event.target);

  body.classList.toggle("showme");
  
}

document.addEventListener ("click", handleClicks);
