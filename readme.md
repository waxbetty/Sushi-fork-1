# Sushi Restaurant Review

- [Sushi Restaurant Review](#sushi-restaurant-review)
  - [Today's Homework](#todays-homework)
    - [Additional Reading](#additional-reading)
  - [Sushi Exercise](#sushi-exercise)
  - [Google fonts](#google-fonts)
    - [Linking to a css file from css](#linking-to-a-css-file-from-css)
  - [Formatting the Navigation](#formatting-the-navigation)
  - [Absolute Positioning](#absolute-positioning)
  - [Responsive Design](#responsive-design)
    - [Adding Simple Responsiveness](#adding-simple-responsiveness)
  - [CSS Demos](#css-demos)
  - [Highlighting the Navigation](#highlighting-the-navigation)
  - [JavaScript - DOM Scripting](#javascript---dom-scripting)
    - [End Sushi](#end-sushi)

## Today's Homework

1. Play [Practice your CSS selectors](https://flukeout.github.io) - see how far you can get
2. Read [A Complete Guide to CSS Concepts and Fundamentals | Tania Rascia](https://www.taniarascia.com/overview-of-css-concepts/)

1. Install [NodeJS](https://nodejs.org/en/) LTS - "long term service" - version, currently 16.13.2)
2. Install [Git](https://git-scm.com/) 
3. Create a free account on [Github](http://github.com)
4. Create a free account on [Netlify](https://www.netlify.com)

<!-- 2. Examine the provided sample (in `other/menu`). Try to implement a sticky navigation bar in wide screen mode using the sample for guidance. -->

<!-- ### 2. Review JavaScript -->

<!-- Some guidance for this assignment is provided at the bottom of this ReadMe.

1. Add a popover window to your page using a link to _your_ favorite restaurant
2. Add a close button ("X") to the popover div using HTML (see this [final file](http://oit2.scps.nyu.edu/~devereld/session2/Sushi/))
3. Use CSS to style the close button
4. Add JavaScript to make the close button close the popover when clicked
5. Upload your homework to the NYU server. ([See session one](https://github.com/front-end-foundations/session1)) for access instructions -->

<!-- 1. Review the documentation for
   - [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp),
   - [addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp),
   - [querySelectorAll](https://www.w3schools.com/jsref/met_document_queryselectorall.asp), and
   - [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp).
1. Install [NodeJS](https://nodejs.org/en/) (the latest version) and [Git](https://git-scm.com/) on your personal computer. Create a free account on [Github](http://github.com) -->

### Additional Reading

These are good resources for beginners and go into more depth in some areas than we have time for in class. Be sure to download any accompanying files in order to follow along on your own.

If you prefer video:

- [HTML Crash Course for Absolute Beginners](https://youtu.be/UB1O30fR-EE), and the [accompanying files](https://www.traversymedia.com/downloads/htmlcheatsheet.zip)
- [CSS Crash Course for Absolute Beginners](https://youtu.be/yfoY53QXEnI), and the [accompanying files](https://www.traversymedia.com/downloads/csscrashcourse.zip)

If you prefer to read:

- [MDN's Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN's Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSSL)

<!-- #### DOM Scripting

Read MDNs [Intro to JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) to learn how to create [this game](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#Example_%E2%80%94_Guess_the_number_game). -->

## Sushi Exercise

<!-- A finished version of this exercise is available [here](http://oit2.scps.nyu.edu/~devereld/session2/Sushi/). Be sure to test the Map link. Be sure to resize the browser to see the responsive features. -->

In this exercise we use the contents of the app folder to begin looking at layout focusing on the following properties:

- margin
- padding
- display
- float
- overflow
- position
- z-index
- visibility

Open `before.html` in VS Code. This is often referred to as tag soup - it makes little sense to anyone looking at the code. Note the lack of semantics and the preponderance of visual markup code in the HTML. This is how HTML was written from the late 90's to about a decade ago and is similar to how HTML emails are written today.

Open `index.html`. This is an HTML5 document that uses semantic HTML.

Open `index.html` in Chrome using Go Live. Note the defaults for margins and padding used to display the body and the unordered list (`<ul>`).

Add a CSS declaration to `styles.css` as follows:

```css
body {
  margin: 12px;
  color: #333;
  font-family: Verdana, Arial, sans-serif;
}
```

and link it to `index.html` in the head:

```html
<link rel="stylesheet" href="css/styles.css" />
```

## Google fonts

Google has a CDN (Content Delivery Network) offering [free fonts](https://fonts.google.com) for use in HTML documents.

(We'll use this as an example of loading external stylesheets via `@import` vs the `<link>` tag.)

We will use [Lato](https://fonts.google.com/specimen/Lato) for our main text and [Lobster](https://fonts.google.com/specimen/Lobster) for our headers.

### Linking to a css file from css

```css
@import url("http://fonts.googleapis.com/css?family=Lato:300,400,700");
```

Add this to the _top_ of our css (@import statements should always come first) to use the font within our stylesheet.

Edit the body css rule:

```css
font-family: Lato, Verdana, Arial, sans-serif;
```

Link a second Google font css file from `index.html`:

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
```

In `styles.css`:

```css
header {
  font-family: "Lobster", cursive;
  font-weight: normal;
}
```

`<link>` is generally preferred over `@import`.

Note: `h1` tags are bold by default but Lobster has no bold version. Thus we use `font-weight: normal` to keep the browser from applying bold.

```css
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
header h2 {
  font-size: 2rem;
}
```

`header h1` is a [_descendant selector_](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator).

Here we apply the same properties to multiple items using a comma in the selector:

```css
header h1,
header h2
```

and then override one of the properties in the next CSS rule.

In CSS, order is important. The second CSS rule will cancel out the first in this example:

```css
header h2 {
  font-size: 2rem;
}
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
```

CSS selector [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is important. The first CSS rule will now be applied since its selector - `body header h2` - is more specific than the second - `header h2`:

```css
body header h2 {
  font-size: 2rem;
}
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
```

Note the _margin collapsing_ between the H1 and H2 and paragraph tags.

## Formatting the Navigation

Note that we have two `<ul>`s - unordered lists - in our page.

Add a _class_ to the `<ul>` that will form the navigation for our page. We now have a name space that will allow us to target it exclusively:

```html
<ul class="nav">
  <li><a href="#">Cuisines</a></li>
  ...
</ul>
```

We have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply different styles.

Add the following to our style sheet:

```css
.nav {
  list-style: none;
  padding: 0;
}
.nav li {
  display: inline-block;
  margin-right: 10px;
}
.nav a {
  color: #fff;
  text-decoration: none;
  padding: 4px;
  display: block;
  background-color: #600;
}
.nav a:hover {
  color: #222;
  background-color: #f0dfb4;
}
```

Note:

- `list-style` (bullet styles)
- `display: inline-block`
- `text-decoration` (link underlining)
- `display: block`

Also note the use of a colon to target the hover state. This is an example of a _pseudo_ selector. So called because, unlike other selectors, it doesn't really target an HTML tag.

Examine the inspector's color picker. Also, note again the ability to force element hover state.

Add css to `nav a`:

```css
transition: all 0.5s linear;
```

Transition is another CSS [short cut](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). Try editing the animation's timing using the inspector's animation settings.

Note: to animate only one difference specify it instead of `all`:

```css
transition: background-color 0.5s linear;
```

## Absolute Positioning

_Edit_ the nav CSS rule to position it

```css
.nav {
  list-style: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 24px;
}
```

Examine the nav ul in the inspector. Note the coordinate system.

Toggle the position property on and off in the inspector.

In the HTML, add an `<aside>` tag around the table and the unordered list.

```html
<!-- HERE -->
<article>
  <h2>Geido</h2>
  <p class="summary">...</p>
  <aside>
    <table>
      ...
    </table>

    <ul>
      ...
    </ul>
    <!-- AND CLOSE IT HERE -->
  </aside>
</article>
```

Then add the following CSS:

```css
aside {
  position: absolute;
  top: 200px;
  left: 24px;
  width: 180px;
  background-color: #f0dfb4;
  padding: 6px;
  border: 1px solid #600;
}
```

Note how the text flows under the aside.

Add margin to move the article over to the right:

```css
article {
  margin: 0 20px 0 240px;
}
```

The four values for margin run clockwise from the top.

<!-- ### CSS Variables

(These)[https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables] allow us to store commonly used information as a variable for use throughout our css.

```
html {
  --bg-color: #f0dfb4;
}
```

```
.nav a {
  ...
  background-color: var(--bg-color);
}

aside {
  ...
  background-color: var(--bg-color);
}
``` -->

### Floating

Format the pull quote and image:

```css
blockquote {
  float: right;
  width: 40%;
  font-size: 24px;
}
article img {
  float: right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content. [Live example](https://theintercept.com/2019/02/04/google-ai-project-maven-figure-eight/) - use the inspector to examine the blockquote at multiple widths.

## Pseudo Elements vs Pseudo Classes

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`. A pseudo-element allows you to create items that do not normally exist in the document tree such as `::before` or `::first-line`.

- Pseudo Class: `:hover`
- Pseudo Element: `::before`

```css
blockquote::before {
  content: "“";
  font-size: 4rem;
  font-family: serif;
  color: #333;
  line-height: 0.1em;
  vertical-align: -0.4em;
  color: #600;
}
```

Or

```css
aside + p::first-line {
  font-weight: bold;
}
```

Note the `+` in the selector. This is an [adjacent sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

A complete list of pseudo classes and pseudo elements is located [on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements).

See my Pen <a href="https://codepen.io/DannyBoyNYC/pen/ZwrwoQ/">Intro-pseudo</a> on <a href="https://codepen.io">CodePen</a>.

## Relative Positioning

Currently our document "flexes" as we make the browser wider to make use of all the available horizontal space. While flexibility is a good practice, we need to understand more about the drawbacks of fixed widths.

Add a wrapper `<div id="wrapper">` to the entire content area (after the `<body>` tag and close it before the closing `</body>` tag) and add the following to our CSS style block.

```css
#wrapper {
  width: 840px;
}
```

vs.

```css
#wrapper {
  max-width: 840px;
}
```

Then center it in the browser.

```css
#wrapper {
  max-width: 840px;
  margin: 0 auto 0 auto;
  border: 1px solid #999;
}
```

Add a relative positioning property.

```css
#wrapper {
  position: relative;
  ...;
}
```

Note the impact the relative positioning has on the layout (toggle it on and off using the inspector). The two absolutely positioned elements (aside and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box. The rule here is that absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree. This is an important CSS design pattern and well will see it again.

## More Design Elements

Edit the CSS body rule to include `background-color: #ddd;`:

```css
body {
  margin: 12px;
  color: #333;
  font-family: "Lato", Verdana, Arial, sans-serif;
  line-height: 1.6;
  background-color: #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper.

```css
#wrapper {
  background-color: #fff;
  padding: 1rem;
  ...;
}
```

Note the body background color is grayed out in the inspector. Neither it nor the margin are inherited by other elements.

Add a box shadow to the wrapper CSS:

```css
#wrapper {
  box-shadow: 6px 6px 10px #999;
  ...;
}
```

Note the chip in the styles inspector that allows you to finesse the box shadow.

Make it more of a glow:

```css
#wrapper {
  box-shadow: 0px 0px 6px 2px #aaa;
  ...;
}
```

## Formatting the Content

Add color and a border:

```css
header h1,
header h2 {
  color: #600;
  ...;
}

header h2 {
  ...
  border-bottom: 1px dotted #600;
  padding-bottom: 0.5rem;
}
```

<!-- Note - selector strength here. Note that the lack of namespacing allows this to effect the "Geido" text as well. -->

Format elements in the list and table:

```css
aside {
  font-size: 0.875rem;
  box-shadow: 3px 3px 3px #ddd;
  border-radius: 4px;
  ...;
}

aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  margin: 0.5rem;
  padding: 0;
}
```

And change the ugly default blue for the links:

```css
a {
  color: #600;
}
```

### A Note on Inline CSS

We've already seen the link tag and @import methods of adding css to our document.

- As an external .css file via linking (HTML `<link>` tag)
- As an external .css file via importing (CSS `@import` statements)

Here are some additional ways to add CSS to an HTML document:

- Inline via the HTML `style=` attribute
- In page via the HTML `<style>` tag

The style tag is inefficient because it applies to a specific page only.

Inline styles are inefficient because they apply to a single element on a single page:

```html
<p style="margin-top: 12px;"></p>
```

We are not using them here however each has its use cases.

<!-- However this method is often used when dynamically changing the page after it has been loaded in the browser.

Try using the inspector to inspect a dynamic page (such as [http://www.w3schools.com/jquery/jquery_animate.asp](http://www.w3schools.com/jquery/jquery_animate.asp)). Note how it displays animation by temporarily highlighting inline css in purple.

Ideally, all your stylesheets should be located in a single file to reduce the number of requests the browser needs to make to the server (a major cause of slow loading sites). -->

<!-- ## Additional CSS3 Enhancements

As work on new versions of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee [http://W3C.org](http://W3C.org) decided to break the process into modules. (For compatibility and advice see [http://CanIuse.com](http://CanIuse.com).)

Some of the earlier CSS 3 specifications included provisions for visual effects such as rounded corners, drop shadows and gradients. A useful page that allows you to become familiar with these enhancements is [http://css3generator.com/](http://css3generator.com/).

Newer CSS modules that we will look at include CSS Grids and Flexbox.

Add rounded corners to the info div and buttons. (See [https://developer.mozilla.org/en/CSS/border-radius](https://developer.mozilla.org/en/CSS/border-radius) for specifications.)

```css
aside {
  border-radius: 6px;
  ...;
}
``` -->

<!-- ```css
nav a {
  border-radius: 3px;
  ...;
}
``` -->

<!-- Add a [drop shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) to the CSS for the info div:

```css
aside {
  box-shadow: 3px 4px 6px #d6d6d6;
  ...;
}
```

Add a box shadow to the `wrapper`'s CSS:

```css
box-shadow: 10px 10px 20px #aaa;
``` -->

<!-- Add CSS 3 Gradients. (See: http://www.colorzilla.com/gradient-editor/) -->

<!-- ## Highlight one of the tabs

A simple way to create navigation on a web site.

1 Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review"></body>
```

2 Add a list item to the nav list with a class of review-link.

```html
<li><a class="t-review" href="#">Reviews</a></li>
```

3 Add the following to our CSS block:

```css
.review-page .review-link {
  color: #fff;
  background: #600;
}
```

Note that the tab is now highlighted. -->

## Responsive Design

Take a moment to resize the browser.

Toggle the device button in the developer tools.

Add the device meta tag to the head of the HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Toggle the device button in the developer tools again.

### Adding Simple Responsiveness

Responsive design uses media queries in conjunction with a flexible layout to allow us to adapt the page to various devices.

The first media query was the _print_ media query. Demo:

```css
@media print {
  * {
    /* display: none !important; */
    color: red;
  }
}
```

We will use `max-width` and add CSS that overrides undesirable features to correct the display on smaller devices.

Begin by removing the margin from the body and article and fixing the nav to the top of the screen.

```css
@media all and (max-width: 800px) {
  body {
    margin: 0;
  }
  article {
    margin-left: 0;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
  }
}
```

Use the [flexbox CSS module](https://codepen.io/DannyBoyNYC/pen/QYaNab) on the nav:

```css
@media all and (max-width: 800px) {
  /* ... omitted for bevity  */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
  }
  .nav li {
    margin: 0;
    flex-grow: 1;
  }
  .nav li a {
    border-radius: 0;
  }
}
```

Note that the absolutely positioned aside region scrolls _over the top_ of the navbar. Normally you'd use `z-index` to control this.

Revert aside's position property to `static` (the default).

```css
@media all and (max-width: 800px) {
  /* ... omitted for bevity  */
  aside {
    position: static;
    float: none;
    margin-right: 20px;
    width: 100%;
  }
}
```

Add adjustments to the image and blockquote:

```css
@media all and (max-width: 800px) {
  /* ... omitted for bevity  */
  blockquote {
    width: 100%;
    float: none;
    margin: 0;
  }
  img {
    float: none;
    width: 100%;
  }
}
```

## CSS Demos

Below are some demos of the major layout features covered so far.

[Front end foundations collection](https://codepen.io/collection/nZyrPj/) on Codepen.io.

CodePen [Intro-margin-auto](https://codepen.io/DannyBoyNYC/pen/qgpVaL)

```html
<div class="container">
  <div class="inner">Hello</div>
</div>
```

```css
.container {
  width: 300px;
  height: 200px;
  border: 3px solid red;
  margin: 0 auto;
}
.inner {
  width: 150px;
  height: 100px;
  border: 2px solid black;
  margin: 0 auto;
}
```

CodePen [Intro-position](https://codepen.io/DannyBoyNYC/pen/YBYyoq)

```html
<div class="container">
  <div class="inner"></div>
</div>
```

```css
div {
  width: 200px;
  height: 200px;
  border: 20px solid;
  position: relative;
  box-sizing: border-box;
}

.inner {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  border-color: red;
}
```

CodePen [Intro-float](https://codepen.io/DannyBoyNYC/pen/pGpgyQ)

```html
<div class="container">
  <div class="inner">Hello</div>
</div>
```

```css
div {
  width: 200px;
  border: 20px solid;
}

.inner {
  width: 100px;
  height: 100px;
  border-color: red;
  float: right;
}
```

CodePen [Intro-flexbox](https://codepen.io/DannyBoyNYC/pen/QYaNab)

```html
<div class="container">
  <nav>
    <ul>
      <li><a href="#">Cuisines</a></li>
      <li><a href="#">Recipes</a></li>
      <li><a href="#">Reviews</a></li>
      <li><a href="#">Delivery</a></li>
    </ul>
  </nav>
</div>
```

```css
ul {
  margin: 0;
  padding: 6px;
  /*   display: flex; */
}

ul li {
  display: inline;
  /*   flex-grow: 1 */
}

ul a {
  padding: 8px;
  border: 1px solid #333;
}
```

See also - [Pseudo Classes](https://codepen.io/DannyBoyNYC/pen/ZwrwoQ).
See also - [Border Box Model](https://codepen.io/DannyBoyNYC/pen/gqeKqd)

## Highlighting the Navigation

A simple way to create opportunities for section differentiation or themes across a web site is to add a class at a high level of the page.

Note: before continuing note the behavior of the navigation tabs in the device simulator - there is no such thing as `:hover` on devices.

Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
  ...
</body>
```

('p-' stands for page.)

Edit the nav so it uses classes on the tabs and 'real' links:

```html
<nav>
  <ul class="nav">
    <li class="t-cuisine"><a href="cuisines.html">Cuisines</a></li>
    <li class="t-recipe"><a href="recipes.html">Recipes</a></li>
    <li class="t-review"><a href="index.html">Reviews</a></li>
    <li class="t-delivery"><a href="delivery.html">Delivery</a></li>
  </ul>
</nav>
```

('t-' stands for tab.)

I have placed a series of placeholder HTML pages in today's directory.

<!-- Move them to the `app` folder and click on the tabs to test. -->

Add the following to our CSS block:

```css
.p-review .t-review a {
  color: #600;
  background: #f0dfb4;
}
```

The Reviews tab is now highlighted - but only on the reviews section.

Expand the css rule to allow the other tabs to display highlighted as well.

```css
.p-review .t-review a,
.p-cuisines .t-cuisine a,
.p-delivery .t-delivery a,
.p-recipes .t-recipe a {
  color: #600;
  background: #f0dfb4;
}
```

Note that we could use these top level page classes and some CSS to customize other items on the page.

## JavaScript - DOM Scripting

This semester we will observe how the three pillars of web development come together to create the modern web. Even though we have just begun learning HTML and CSS, I will briefly introduce JavaScript so that we can cover all three as a cohesive system.

<!-- An example of [mobile first design](https://www.nytimes.com/interactive/2018/12/28/nyregion/nyc-property-tax-photos.html?fallback=0&recId=1GuXvkf8n9fJPZ4Orme791unw08&locked=0&geoContinent=NA&geoRegion=CA&recAlloc=story-desks&geoCountry=US&blockId=signature-journalism-vi&imp_id=986464160&action=click&module=editorsPicks&pgtype=Article&region=Footer). -->

"DOM" is an acronym for [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model).

The DOM is an application programming interface (API) that treats an HTML document as a tree structure where each node on the tree is an object representing a part of the document.

Conceptual demo:

`https://react-all-the-news.netlify.app/` - inspect and then view source
formatted with `https://webformatter.com/html`.

This page has very little HTML. It relies on DOM manipulation to display.

Compare with `pitchfork.com`

<!-- ### Variable Assignment and Types

In the browser console (one line at a time):

```js
var width = 100;
width;
typeof width;

width + 300;
width; // still 100
width = width + 300;
width; // now 400

var wide = true;
wide;
typeof wide;

var testString = '123456';
typeof testString;
``` -->

Link `scripts.js` to `index.html` before the closing body tag:

```html
...
  <script src="js/scripts.js"></script>
</body>
```

Currenty we have this list item in the aside region of `index.html`:

```html
<li><a href="#">Map</a> | <a href="#">Directions</a></li>
```

Add a link to a [Google map](https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734) to the map link's href:

```html
<li>
  <a
    class="map"
    target="_blank"
    href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734"
  >
    Map
  </a>
</li>
```

Note the target attribute for the anchor tag. We have also used `class="map"` to identify the href.

## Aside - playing with the console

Note the contents of `scripts.js`. Open the developer tools in Chrome and display the JavaScript Console.

In order to gain insight into the DOM and some central concepts we will uncomment and recomment lines in `scripts.js` and examine the output in the console.

If you are interested in an additional run through of this content please see [Traversy's video series](https://youtu.be/0ik6X4DJKCc) on DOM scripting.

---

The DOM scripting techniques we will start with are:

- [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll)
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

You will also be introduced to:

- [event types](https://developer.mozilla.org/en-US/docs/Web/Events)
- [functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)

### A Quick Note on jQuery

[jQuery](https://jquery.com) is an incredibly popular JavaScript library that has been in use for over a decade. When you search for information about JavaScript or JavaScript techniques your results will likely contain a multitude of references to it. The rational for using jQuery has dramatically decreased in recent years due to the rapid evolution of JavaScript as well as increasing standardization.

For the purposes of this course, you should try to ignore these as we focus solely on "vanilla JavaScript."

### Creating the Popover

#### QuerySelector

Make sure everything in `scripts.js` is commented or deleted _and_ that the map link in the HTML has a class of `map`.

Add this to `scripts.js`:

```js
var mapClicker = document.querySelector(".map");
console.log(mapClicker);
```

Note: you use the `document.querySelector()` method to find _the first_ matching element on a page.

If an element isn’t found, querySelector() returns null. If you try to do something with the nonexistent element, an error will be thrown.

#### addEventListener

Use `addEventListener` to listen for a click on `mapClicker`:

```js
var mapClicker = document.querySelector(".map");

mapClicker.addEventListener("click", function () {
  event.preventDefault();
  console.log("You clicked on the map link.");
});
```

Without `preventDefault()` a click would launch the link in a new tab. Since we want to show a map on _our_ page we need to prevent navigating away from the page.

You use the `EventTarget.addEventListener()` method to listen for events on an element. You can find a full list of available [events on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Events).

Let's examine the event.

When you click on anything on the page an event occurs. We can examine the event in the console.

```js
var mapClicker = document.querySelector(".map");

mapClicker.addEventListener("click", function (e) {
  console.log(e); // The event details
  console.log(e.target); // The clicked element
  e.preventDefault();
});
```

We run the `EventTarget.addEventListener()` method on the element we want to listen for events on. It accepts two arguments: the event to listen for, and a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) to run when the event happens.

The `event.target` property is the element that triggered the event. The event object has other properties as well, many of them specific to the type of event that occurred.

A [JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) is a list of commands or statements that, in this case, are run when the event occurs.

Create and call a `show` function to run when the event (the user clicks on `mapClicker`) occurs:

```js
var mapClicker = document.querySelector(".map");

mapClicker.addEventListener("click", show);

function show(e) {
  console.log(e); // The event details
  console.log(e.target); // The clicked element
  e.preventDefault();
}
```

Add the following HTML to the bottom of the `index.html` - after the footer and before `<script>`:

```html
<div class="popover">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.821674756671!2d-73.97492268461596!3d40.67789794763805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1490213487125"
    width="300"
    height="225"
    frameborder="0"
    style="border:0"
    allowfullscreen
  ></iframe>
</div>
```

The div and iframe will be visible at the bottom of the page.

Note that it uses an [iframe](https://www.w3schools.com/tags/tag_iframe.asp). An inline frame is used to embed another HTML document within the current HTML document. It is often used in advertising.

Style the popover div:

```css
.popover {
  padding: 1rem;
  width: 300px;
  height: 225px;
  background: #fff;
  border: 2px solid #600;
  border-radius: 4px;
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  /*display: none;*/
}
```

Note the `position: fixed` as well as the `top` and `left` properties - we center the div with 50% and then use `calc` to subtract half the width and height of the div.

Uncomment / add `display: none` so the popover div is initially hidden.

Add a new utility rule to the css:

```css
.showme {
  display: block;
}
```

Try:

- In the Elements inspector, try adding the `showme` class to the popover.

Create a new variable with a reference to the popover div.

```js
var mapClicker = document.querySelector(".map");
var popOver = document.querySelector(".popover"); // NEW

mapClicker.addEventListener("click", show);

function show(e) {
  e.preventDefault();
}
```

Use `classList` to toggle the `showme` class:

```js
var mapClicker = document.querySelector(".map");
var popOver = document.querySelector(".popover");

mapClicker.addEventListener("click", show);

function show(e) {
  popOver.classList.toggle("showme"); // NEW
  e.preventDefault();
}
```

The map should appear and disappear when you click on the link.

### Moving the Toggle

If we want to manipulate the display of other items based on the presence of the popover we need to add the `showme` class higher up in the DOM.

We'll go all the way to the top by adding the class on the body tag:

```js
var mapClicker = document.querySelector(".map");
var body = document.querySelector("body"); // NEW

mapClicker.addEventListener("click", show);

function show(e) {
  body.classList.toggle("showme"); // NEW
  e.preventDefault();
}
```

This will entail editing the CSS selector:

```css
.showme .popover {
  display: block;
}
```

Placing the new class at a higher level in the DOM allows us to manipulate the display of other items:

```css
.showme #wrapper {
  filter: blur(4px) grayscale(100%) opacity(50%);
}
```

Note - it becomes more difficult for the user to close the popover.

### Using Event Delegation

This will be the final iteration of this script. It is a standard to use what is known as _event delegation_ in JavaScript.

Event Delegation refers to the process of using the browser's native event propagation or "bubbling" to handle events at a higher level in the DOM than the element on which the event originated.

Events "bubble up" from the targeted element to their parent elements and all the way up through their ancestors and eventually to the document and window - the highest levels of a page.

So instead of listening to specific elements, we’ll listen for all click events on the page, and then test to see if the clicked item has a specific name before running the function.

Let's start over again by examining the event targets:

```js
document.addEventListener("click", show);

function show(e) {
  console.log(e.target);
  // 'event.target' is the clicked element
  e.preventDefault();
}
```

Note: `preventDefault()` here disables _all_ our links - even those on our navbar.

Try:

- clicking elsewhere on the page with the Console open.

We will use [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) and an `if` statement to test for the item being clicked on, then use `classList` to toggle a class:

```js
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  console.log(e.target);
  if (e.target.matches(".map")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  }
}
```

This is somewhat analogous to using a class at a high level - see for example the first part of today's exercise - as it allows us to control things at a higher level.

## HomeWork

### A Close (✖︎) Button

<!-- 1. We will use [Font Awesome](https://fontawesome.com/cheatsheet) for icons
1. Examine some usage samples from [Font Awesome](http://fontawesome.io/examples/)
2. Load Font Awesome with:

```html
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
```

Use it once to add an icon to the web site link:

```html
<li><a href="#"><i class="fa fa-external-link-square-alt"></i>Web site</a></li>
```

Use the inspector to examine it.

1. [Examine](http://fontawesome.io/icons/) looks like `fa-times` will work.

Add a link to the popover:

```html
<div class="popover">
	<a class="closer"><i class="fa fa-times" aria-hidden="true"></i></a>
	<iframe>...</iframe>
</div>
```

```css
.popover .closer {
	float: right;
}
``` -->

Add to the top of the `popover` div:

```html
<a class="closer" href="#">✖︎</a>
```

E.g.:

```html
  <div class="popover">
    <a class="closer" href="#">✖︎</a>
    <iframe>
      ...
  </div>
```

To format the close link, temporarily disable the `display: none` property on the popover's CSS and add:

```css
.popover .closer {
  position: absolute;
  top: -11px;
  right: -14px;
  color: #600;
  cursor: pointer;
}
```

The close button will be positioned relative to its nearest positioned ancestor which, in this case, is the popover div which already has a `position: static` property.

Note the (here superfluous) `cursor` property. Here is a [list of available cursors](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor) in CSS.

Add some additional formatting to the close link:

```css
.popover .closer {
  ...
  text-decoration: none;
  background-color: #fff;
  padding: 0.25rem;
  border: 2px solid #600;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
```

Note: `border-radius: 50%` creates a circle - as long as the box is perfectly square.

Re-enable the `display:none` property on the popover div.

<!-- Create a new script at the bottom of `scripts.js` to include a reference to the new close button:

```js
var closeButton = document.querySelector('.closer');
closeButton.addEventListener('click', close);

function close(){
  var body = document.querySelector('body');
  body.classList.toggle('showme');
  event.preventDefault();
}
```

Note that the close function is identical to the show function we currently have. -->

We will use - [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) and an `if` statement to test for the item being clicked on, then use `classList` to add or remove a class:

```js
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map")) {
    document.querySelector("body").classList.add("showme");
    e.preventDefault();
  }
  if (e.target.matches(".closer")) {
    document.querySelector("body").classList.remove("showme");
    e.preventDefault();
  }
}
```

Let's refactor the script by using an 'or' operator `||` in JavaScript:

```js
if (
  event.target.classList.contains('map') ||
  event.target.classList.contains('closer')
)
```

With our toggle, e.g.:

```js
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  }
}
```

See the samples on CodePen for [querySelector](https://codepen.io/DannyBoyNYC/pen/wNXPKY) and [querySelectorAll](https://codepen.io/DannyBoyNYC/pen/exKegp)].

<!-- Try a [recipe](http://fontawesome.io/examples/) from font-awesome:

```html
<a class="closer">
	<span class="fa-stack fa-md">
		<i class="fa fa-square fa-stack-2x"></i>
		<i class="fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
	</span>
</a>
``` -->

<!-- Add a shadow to the popover:

```css
box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
``` -->

<!-- Add an overlay for effect:

```html
<body>
<div class="overlay"></div>
<div id="wrapper">
``` -->

<!-- ```css
.overlay {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.5);
}
```

Note that it blocks all the clicks.

...and turn it on:

```js
...
var overlay = document.querySelector('.overlay')
...

function show(){
	popOver.classList.toggle('showme')
	overlay.classList.toggle('showme')
	event.preventDefault()
}
```

We used the z-index css property to control stacking order for the menu (review).

We need to control z-index in this case by giving the popover a hight number than the overlay.

Note that there is no possibility of animating this because we are using `display: block` and `display: none`. These are binary states and cannot be used for effects like fading on etc. More on this in a later class. -->

<!-- Event delegation allows us to listen for click events anywhere on the page and then do different things depending on which item is clicked on. It also improves code organization.

The last argument in `addEventListener()` (`false`) is known as "Use Capture." It allows you to force bubbling on events that don't do it by default. Setting `useCapture` to true allows you to take advantage of event bubbling for events that otherwise don’t support it.

For example, focus does not bubble, so in the example below we force it so we can listen for events on the document or window:

```js
// Listen for all focus events in the document
document.addEventListener(
  'focus',
  function(event) {
    // Run functions whenever an element in the document comes into focus
  },
  true,
);
```
-->

### End Sushi

<!-- ## Styling a List: Floats vs Flexbox

<img src="Tabs/tabs-image.jpg">

In this exercise we will focus on list styling and navigation but instead of using `display: inline` or `display: inline-block` to create horizontal navigation we will use floats. -->

<!-- ## Demo in Sublime

* Install [package control](https://packagecontrol.io)

* Install [emmet](https://packagecontrol.io/packages/Emmet)

* Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

Using emmet -->

<!-- ```sh
!

ul>li*4>a[href="#"]{link}

nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}
``` -->

<!-- Create an HTML file and save it as `cuisines.html` into the `Tabs` folder. -->

<!-- * duplicate lines `cmd-d` and
* use multiple cursors `cmd` to complete the classes and links so you end up with: -->

<!-- ```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cuisines</title>
    <style></style>
  </head>

  <body>
    <nav>
      <ul class="nav">
        <li class="t-cuisines"><a href="cuisines.html">Cuisines</a></li>
        <li class="t-chefs"><a href="chefs.html">Chefs</a></li>
        <li class="t-reviews"><a href="reviews.html">Reviews</a></li>
        <li class="t-delivery"><a href="delivery.html">Delivery</a></li>
      </ul>
    </nav>
  </body>
</html>
```

Take a moment to examine the default user agent styles using the inspector.

Add and review some basic formatting (in the `<style>` block):

```css
body {
  margin: 0;
  font-family: 'Lucida Grande', sans-serif;
}
.nav {
  background: #ffcb2d;
  margin: 0;
  padding: 10px 0 0 46px;
}
```

Remove the bullets from the `<ul>`:

```css
.nav {
  ...
  list-style: none;
}
```

Float the list items to the left:

```css
li {
  float: left;
}
```

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>` has collapsed. This behavior is important as "collapsing" is a common design issue when using floats.

There are a number of methods in use to prevent this:

- float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element
- the clearfix hack - this entails creating a utility class and will be covered later
- adding a clearing div - this entails adding an HTML element to the page and is discouraged

For our current example let's use the second FNE method.

Try adding a float to the 'collapsed' element:

```css
.nav {
  ...
  float: left;
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width.

```css
.nav {
  ...
  width: 100%;
}
```

_When you float an element you usually have to specify a width._

Extend the [background property](https://www.w3schools.com/css/css_background.asp) to add a background color and image to the `<ul>`.

```css
.nav {
  ...
  background-color: #ffcb2d;
  background-image: url(i/nav_bg.gif);
}
```

Aside: demo the background property using `pattern.gif`.

Add positioning to the background.

```css
.nav {
  ...
  background-color: #ffcb2d;
  background-image: url(i/nav_bg.gif);
  background-repeat: repeat-x;
  background-position: bottom left;
}
```

Next we'll tackle the `<a>` tags. Add the following to our CSS block.

```css
a {
  text-decoration: none;
  color: #333;
}
```

Adding padding, margins to separate, and a border to make them more tab-like:

```css
a {
  ...
  padding: 4px 8px;
  border: 1px solid #9b8748;
  margin: 0 6px 0 0;
}
```

Although it may be a little difficult to discern, the same issue we had with collapsing earlier has occurred here as well. We will use the same method as before to make the container expand to fit its floated children. Let's remove the redundant border while we're at it.

```css
a {
  ...
  border-bottom: none;
  float: left;
}
```

By floating the anchors we cause the `<li>`s to expand to contain their floated children.
Now we add a background image to the `<a>`. Note the use of the background shortcut and that the image has a gradient and transparency.

```css

a {
  ...
  background: #f9eaa9 url(i/off_bg.gif) repeat-x top left;

```

Note what happened to the background graphic we placed in the `<ul>`. It is hidden behind the anchors.

Now we create hover states for our tabs by swapping out the background image:

```css
a:hover {
  background: #fff url(i/on_bg.gif) repeat-x top left;
}
```

### Finishing touches

This part is a but tricky since it uses padding to show or hide the background graphic running along the bottom of the `<ul>`. We will be increasing the height by one pixel on hover to hide the image.

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css
a:hover {
  ... padding-bottom: 5px;
}
```

If you roll over the tabs now the height of the anchor increases by one pixel causing the `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs.

Due to the fact that there is no selected tab (only hovered) the height of the element appears to jump slightly. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors by adding `.t-cuisines a` as a second selector to the hover rule.

```css
a:hover,
.t-cuisines a {
  ...;
}
```

Note that when you use two selectors they must be separated by a comma.

Many prefer to keep the multiple selectors on separate lines like so:

```css
a:hover,
.t-cuisines a {
  ...;
}
```

Now, if we add an id to the body tag we can edit the selector to make it page specific.

Add `class="cuisines"` to the body tag.

```html
<body class="p-cuisines"></body>
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover,
.p-cuisines .t-cuisines a {
  ...;
}
```

We are going to create a second HTML page shortly so let's copy our CSS into an external file as `styles.css` and link to it:

```html
<link href="css/styles.css" rel="stylesheet" type="text/css" />
```

Note that because we used a new directory, the paths to the images are no longer correct. Correct them now using this pattern:

```css
background-image: url(../i/nav_bg.gif);
```

Save a new copy of the HTML page as `chefs.html` and edit the ID:

```html
<body class="chefs"></body>
```

Add a new selector to the CSS.

```css
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...;
}
```

Now when you navigate between the two pages you should see a friendly reminder of what page you are on courtesy of the CSS file.

- There is a demo of this in the `Tabs > demo` directory.

### Removing the on- off- images

Images and any other externally linked asset increases the time it takes to download and render your page. It is considered a best practice to minimize the number of images whereever possible so let's remove as many as we can.

Aside: [Hex color vs. RGB vs. RGBA](https://www.w3schools.com/colors/colors_converter.asp)

- [Intro to gradients in css](https://css-tricks.com/css3-gradients/) has more information than you'll ever need
- The [Gradient editor](http://www.colorzilla.com/gradient-editor/) is still a useful tool

Edit the background properties for the tabs:

Normal (eg. non-hovered) state:

```css
background-image: linear-gradient(
  to bottom,
  rgba(255, 236, 165, 1) 0%,
  rgba(232, 213, 149, 1) 6%,
  rgba(253, 233, 162, 1) 94%,
  rgba(253, 233, 162, 1) 100%
);
```

Highlighted (eg. hovered) state:

```css
background-image: linear-gradient(
  to bottom,
  rgba(255, 255, 255, 1) 0%,
  rgba(224, 226, 240, 1) 6%,
  rgba(254, 254, 254, 1) 53%
);
```

We cannot use `border` for the underline on the `<ul>` so let's use a very thin gradient:

```css
background-image: linear-gradient(
  to bottom,
  #ffcb2d 0%,
  #ffcb2d 96%,
  #9b8748 100%
);
```

### Using Flexbox

We will be covering flexbox in a future class. For now, note that a more modern method of creating the same design would be to use `display: flex`.

Remove the float from the `ul` and add `display: flex`:

```css
.nav {
  ... /* float: left; */ display: flex;;
}
```

Remove the float from the `<li>` tags and add flex:

```css
li {
  /* float: left; */
  display: flex;
}
```

Remove the float and underline from the anchors: -->

<!-- ```css
a {
  ...
  /* border-bottom: none; */ /* float: left; */ ;;
}
``` -->

<!-- Add `border-bottom: none;` to the active state:

```css
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  border-bottom: none;
  ...;
}
```

## Looking Forward

Examine the other demos in the `demo` folder. -->
