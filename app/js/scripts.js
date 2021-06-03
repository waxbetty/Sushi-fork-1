// EXAMINING AND CHANGING THE DOCUMENT  //
// console.log('Hello from scripts.js!');
// console.log(document);
// console.log(document.body);
// console.log(document.links);
// console.log(document.title);
// document.title = 123;

/* FIND the tags in the header in the list */
// console.log(document.all);
// console.log(document.all[19]);
// document.all[19].textContent = 'Hello';

/* QUERYSELECTOR - uncomment in sequence */
// console.log(document.querySelector('body'));
// var bodyElement = document.querySelector('body');
// bodyElement.textContent = 'Text content set in JavaScript';
// bodyElement.style.borderBottom = 'solid 30px red';

// QUERY SELECTOR ALL //
// var listItems = document.querySelectorAll('li');
// NOTE - view the variable in the console. Returns a NodeList

// Gives an error - and the console log command never runs
// listItems.style.backgroundColor = 'red';
// console.log('This will not run b/c the line above causes a blocking error');

// HERE'S how you would have to do it
// listItems.forEach(function(listItem) {
//   listItem.style.backgroundColor = 'red';
// });

// OR
// for(var item of listItems){
//   item.style.backgroundColor = 'green';
// }

// OR
// for (var i = 0; i<listItems.length; i++){
//   listItems[i].style.backgroundColor = 'blue'
// }

// EVENTS //
// FIRST - add a class of 'map' to the map anchor tag in the sidebar
// var mapLink = document.querySelector('.map');
// mapLink.style.borderBottom = 'solid 8px red';

// ADDEVENTLISTENER
// mapLink.addEventListener('click', function() {
//   console.log('It works!');
// });

// mapLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('It works!');
// });

// mapLink.addEventListener('click', function() {
//   event.preventDefault();
//   console.log('event::', event);
//   console.log('event.target::', event.target);
//   console.log('event.target.href::', event.target.href);
// });

// CALLING A FUNCTION - click twice
// mapLink.addEventListener('click', buttonClick);

// function buttonClick() {
//   event.preventDefault();
//   console.log('className::', event.target.className);
//   event.target.className = 'foo'
// }

// DYNAMICALLY CREATE AN ELEMENT //

// // CREATE a div and then look at it in the console
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'popover';
// console.log(newDiv);

// // Add text
// newDiv.innerText = 'Hello World';
// newDiv.innerHTML = '<span>Hello Universe</span>';

// // Add styles to the div
// newDiv.style.fontSize = '40px';
// newDiv.style.color = '#600';

// // Store a reference to the H1
// var headerOne = document.querySelector('header h1');

// // Add the new div to the document
// headerOne.append(newDiv);
// headerOne.prepend(newDiv);
