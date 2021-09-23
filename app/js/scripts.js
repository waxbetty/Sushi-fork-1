document.addEventListener("click", handleClicks);

function handleClicks(e) {
  console.log(e.target);
  if (e.target.matches(".map")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  }
}
