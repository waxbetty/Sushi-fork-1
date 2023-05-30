// var mapClicker = document.querySelector(".map");
// var body = document.querySelector("body"); // NEW

// mapClicker.addEventListener("click", show);

// function show(e) {
//   body.classList.toggle("showme"); // NEW
//   e.preventDefault();
// }

document.addEventListener("click", show);

function show(e) {
  console.log(e.target);
  // 'event.target' is the clicked element
  e.preventDefault();
}
