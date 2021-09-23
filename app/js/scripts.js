// EXAMINING AND CHANGING THE DOCUMENT  //
console.log("Hello from scripts.js!");
// console.log(document.title);
// document.title = 123;

/* 1. QUERYSELECTOR - uncomment in sequence */
// var bodyElement = document.querySelector("body");
/* view variable in console */
// bodyElement.textContent = "Text content set in JavaScript";
// bodyElement.style.borderBottom = "solid 30px red";
/* elements in dev tools VS view source */
/* comment out all the above */

/* 2. QUERYSELECTORALL */
// var listItems = document.querySelectorAll("li");
/* view the variable in the console. Returns a NodeList */

/*  Gives an error - and the console log command never runs */
// listItems.style.backgroundColor = "red";
/* errors block the rest of the code from running */
// console.log("This will not run b/c the line above causes a blocking error");

/* HERE'S 3 methods that WOULD work */
/* a. */
// listItems.forEach(function (listItem) {
//   listItem.style.backgroundColor = "red";
// });

/* b. */
// for (var i of listItems) {
//   i.style.backgroundColor = "green";
// }

/* c. */
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = "blue";
// }

/* 3. EVENTLISTENERS */
/* ADD a class of 'map' to the map ANCHOR tag in the sidebar */
// var mapLink = document.querySelector(".map");
// mapLink.style.borderBottom = "solid 8px red";

// mapLink.addEventListener("click", function () {
//   console.log("It works!");
// });

/* ADD a external link to the map ANCHOR tag in the sidebar */

// mapLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("It works!");
// });

// mapLink.addEventListener("click", function() {
//   event.preventDefault();
//   console.log("event::", event);
//   console.log("event.target::", event.target);
//   console.log("event.target.href::", event.target.href);
// });

// document.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("event.target::", e.target);
//   console.log("event.target.textContent::", e.target.textContent);
// });

/* 4. FUNCTIONS */
// var mapLink = document.querySelector(".map");
// mapLink.addEventListener("click", buttonClick);

// function buttonClick(e) {
//   e.preventDefault();
//   console.log("className::", e.target.className);
//   e.target.className = "foo";
// }

/*
.foo {
  font-size: 200px;
  color: rebeccapurple;
}
*/

/* 5. DYNAMICALLY CREATE AN ELEMENT */

/* CREATE a div and then look at it in the console */
// var newDiv = document.createElement("div");

/* Add a class */
// newDiv.className = "popover";
// console.log(newDiv);

/* Add text */
// newDiv.innerText = "Hello World";

/* Add styles to the div */
// newDiv.style.fontSize = "40px";
// newDiv.style.color = "#600";

/* Store a reference to the H1 */
// var headerOne = document.querySelector("header h1");

/* Add the new div to the document */
// headerOne.append(newDiv);
// headerOne.prepend(newDiv);
