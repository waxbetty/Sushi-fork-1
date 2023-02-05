document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  } else {
    document.querySelector("body").classList.remove("showme");
  }
}