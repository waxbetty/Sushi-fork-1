# Session One

## Resources

[Email](mailto:daniel.deverell@nyu.edu)

[Syllabus](http://daniel.deverell.com/)

[Github](https://github.com/front-end-foundations) - this will be the source for all files used in this class

You will be provided with server space on an NYU web server. Your username will be the first seven letters of your last name + the first letter of first name. e.g `devereld`. (If your name is less than 7 characters your username is your entire last name plus the first letter of your first name.)

Test to see if your account is active by entering this URL into a new browser tab (use your username after the tilde):

`http://oit2.scps.nyu.edu/~******/` where `******` is your username.

Your password is your first initial plus your last initial plus 123890. e.g. `dd123890`

The computer name is `oit2.scps.nyu.edu`

You can upload and download files using SFTP (Secure File Transfer Protocol). Recommended free SFTP clients include [Cyberduck](https://cyberduck.io) and [Filezilla](https://filezilla-project.org). Note - you _must_ use port 22 or SFTP in order to connect.

When you log into your account you will see a number of files and folders. The `web` folder is where you place folders and files in order to make them accessible at `http://oit2.scps.nyu.edu/~******/`.

## Homework

1. Download Sublime text and install [Package Control](https://packagecontrol.io/) on your computer
1. Install [Emmet](https://packagecontrol.io/packages/Emmet) into Sublime text using Package Control
1. Download the files as distributed in class from Github and, using [the notes below](https://github.com/front-end-foundations/session1#exercise---converting-to-standards), try to recreate the design we did in class from scratch
1. Examine the provided homework samples (in the homeworksamples folder) in Chrome's developer tools. Pick two or three visual formatting features that appeal to you and try to apply them to your page. Be sure to Google any CSS properties you are unfamiliar with.

Note: the finished files I was working on in class can be [downloaded](https://github.com/front-end-foundations/session1/tree/work) from the `work` branch of this repo for reference.

## Additional Reading

These are good resources for absolute beginners and go into more depth (in some areas) than we will have time for in class. They are rather long but you should try to watch them over the first two weeks of the semester.

* Video: [HTML Crash Course for Absolute Beginners](https://youtu.be/UB1O30fR-EE)
* Video: [CSS Crash Course for Absolute Beginners](https://youtu.be/yfoY53QXEnI)

Be sure to [download the accompanying files](https://www.youtube.com/redirect?redir_token=1Yb19FwXTj2Zp4L-bRWo-VIllCl8MTUxODAxNjc4OUAxNTE3OTMwMzg5&event=video_description&v=UB1O30fR-EE&q=http%3A%2F%2Fwww.traversymedia.com%2Fdownloads%2Fhtmlcheatsheet.zip) in the comments in order to follow along in a text editor.

## Text Editors, Browsers and Developer Tools

In this class we will be using [Sublime Text](https://www.sublimetext.com/).

Other popular text editors you can try include:

* [Atom](https://atom.io/)
* [Visual Studio Code](https://code.visualstudio.com/)

In order to extend Sublime Text you need to install [Package Control](https://packagecontrol.io/). Once installed you can take advantage of a huge assortment of add ons (or Packages).s

I will demonstrate a couple of the more [popular packages](https://packagecontrol.io/browse/popular) for Sublime text over the course of the semester.

(Note that in NYU labs, configuration changes are not saved after restart. You should install Package Control, Emmet and other Packages that might be useful to you _on your own computer_.)

Create the following in [Sublime Text](https://www.sublimetext.com/):

```html
<!doctype html>
<html>
  <head>
    <title>Box Model</title>
    <style media="screen">

    </style>
  </head>
  <body>
    <p>A paragraph is a block element. Is is rendered inside a box. <em>Italic text</em> is an inline element.
    Here is a <a href="#">link</a>.</p>
  </body>
</html>
```

* html comments
* lorem
* auto complete

Save it as `box-model.html`

In Chrome, right click on the text and choose `Inspect`.

* The inspector is your first line of defense when troubleshooting and should be kept open at all times
* Safari's developer tools are not turned on by default and must be enabled in Safari preferences

### User Agent Styles

User agent styles are the default styles for HTML elements. By default the browser has placed margins above and below the paragraph.

### Block vs Inline

Most HTML tags or elements all have a default `display` property which is set to `block` which means that they create a rectangular region in the browser.

The "opposite" of block in HTML is inline. An example might be a piece of italicized text `<em>` or a link `<a>` inside a paragraph.

* Try: use the inspector to set the em tag to display block.

The paragraph tag - `<p>` - creates a box and by default has space above and below it while the italicized text does not and simply flows along with the rest of the text.

A `<div>` tag is a special block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics.

A `<span>` tag is used to create arbitrary inline (like `<em>`) elements.

### The Box Model

Block elements are interpreted as a box by the browser. But boxes have other characteristics such as spacing, borders and margins. Taken together these elements form the box model. You can view this in the inspector.

* Try: adding a 3em margin to the em tag with and w/o display: block

Let's add padding, border and override the margins.

```html
<style media="screen">
p {
    padding: 16px;
    margin: 6px;
    border: 3px solid #333;
    height: 200px;
    width: 300px;
}
</style>
```

Refresh the page and inspect the paragraph again. Note the changes in the inspector.

##### Semantics

HTML tags are divorced from the way they appear and can be 'reprogrammed' to look any way you want. They convey meaning to the code that comprises the document and make it human readable. _ HTML tags are [semantically important](https://en.wikipedia.org/wiki/Semantic_HTML) _ - not stylistically important.

This is part of the _separation of concerns_. For example:

* content, display, behavior (html, css, javascript)
* model, view, controller (MVC - database, interface, logic)

Concerns are the different aspects of software functionality. For instance, the "business logic" of software is a concern, and the interface through which a person uses this logic is another.

The separation of concerns is keeping the code for each of these concerns separate. Changing the interface should not require changing the business logic code, and vice versa.

## CSS syntax, whitespace and comments

CSS rules consist of a selector, a set of curly braces, and a series of property(s) and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property1: value;
  property2: value;
}
```

The selector determines which HTML will be selected.

The properties (there are many but we will be focusing on a few of the most useful at the outset) are set by the value after the full colon. These almost always have a unit when used for measurements.

Note the padding, margin and border properties. This are CSS shortcuts. Our border property could also be written in long form.

```
border-style: solid;
border-color: #333;
border-width: 3px;
```

See the full specifications in the inspector (use the triangle drop down).

### Theory: Box Sizing

Boxes are additive by default - their width will be a combination of width, padding and border (margins are outside the box model). There is another sizing method that is often prefered called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```html
<style media="screen">
    p {
        ...
        box-sizing: border-box;
    }
</style>
```

### Theory: Media Queries

Add a media query:

```css
@media (min-width: 500px) {
  p {
    border: 3px solid red;
  }
}
```

Note:

* overrides in the inspector
* min-width = greater than
* the css for > (greater than) 500px is _added_ to the styles when the condition is true.

Change it to:

```css
@media (max-width: 500px) {
  p {
    width: 100%;
  }
}
```

Note

* the inspector overrides (cascade)
* max-width = less than
* the css for < (less than) 500px is _added_ to the styles when the condition is true.

### Debugging CSS with the inspector

* misspelling
* bad selectors
* missing units
* whitespace

# Exercise - Converting to Standards

Open before.html in an editor and examine the HTML. Then examine index.html. The latter is an html5 document that uses HTML tags semantically. The former is often referred to as tag soup as it makes little sense to humans looking at the code.

Examine index.html in the browser inspector to display the default (user agent) styling. Note the defaults for margins and padding used to display the body and the unordered list (`<ul>`).

## Terminal

```sh
$ cd <path-to-folder>
$ python -m SimpleHTTPServer 9000
```

Add a CSS block within the `<head>`of index.html as follows:

```html
<style>
    body {
        margin: 0;
        color: #333;
        font-family: Verdana, Arial, sans-serif;
    }
</style>
```

## Google fonts

Google has a CDN offering (free fonts)[https://fonts.google.com] for use in HTML documents. We'll use this as an example of using external stylesheets via @import and the `<link>` tag.

We will use [Lato](https://fonts.google.com/specimen/Lato) for our main text and [Lobster](https://fonts.google.com/specimen/Lobster) for our branding.

### Linking to a css file from css

```
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
```

Add this to the top of our css (@import statements should always come first) to use the font within our stylesheet. Add to the body css rule:

```
font-family: 'Lato', sans-serif;
```

### Linking to a css file from html

THe html link tag:

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
```

in use:

```css
header {
  font-family: 'Lobster', cursive;
  font-weight: normal;
}
```

Note the bold property belongs to the H1 tag, not the header tag.

```css
header h1,
header h2 {
  font-weight: normal;
}
```

Note the use of weights in Lato:

```
h2 {
  font-weight: 300;
}
```

## Formatting the Navigation

Add a _class_ to the `<ul>` that will form the navigation for our page.

```html
<ul class="nav">
    <li><a href="#">Cuisines</a></li>
    ...
</ul>
```

By doing so we have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply two different styles.

Add the following to our style block:

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
  background-color: #bada55;
}
```

Examine display options for making the buttons horizontal using block, float, inline-block, and flex.

Examine the inspector's color picker. Note the ability to force element hover state.

Add css to `nav a`:

```
transition: all 0.5s linear;
```

Edit the animation using the inspector's animation settings.

To animate only one difference specify it instead of `all`:

```
transition: background-color 0.5s linear;
```

## Absolutely Positioning the Navigation

_Edit_ the nav CSS rule to position it

```css
.nav {
  list-style: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 60px;
}
```

Add an `<aside>` tag around the table and list then add the following CSS:

```css
aside {
  position: absolute;
  top: 200px;
  left: 10px;
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
  padding: 16px;
  font-size: 24px;
}
article img {
  float: right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content.

## Converting the document to fixed width

Currently our document flexes as we make the browser wider to makes use of all the available horizontal space. While flexibility is generally a good practice, most sites use fixed widths to improve readability. cf [Wikipedia](https://en.wikipedia.org/wiki/Line_length) vs [The Guardian](https://www.theguardian.com)

Add wrapper `<div id="wrapper">` to entire content area (after the `<body>` tag and close it before the closing `</body>` tag) and add the following to our CSS style block.

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

Add a relative positioning instruction.

```css
#wrapper {
  position: relative;
  ...;
}
```

Note the impact the relative positioning has on the layout (toggle it on and off using the inspector). The two absolutely positioned elements (aside and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box. The rule here is that absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree. This is an important CSS design pattern and well will see it again.

## Adding color to our layout

Edit the CSS body rule.

```css
body {
   : #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper.

```css
#wrapper {
  ...
    background-color: #fff;
}
```

Note the body background color is grayed out in the inspector. Neither it nor the margin are inherited by other elements.

## Formatting the content

Note the h1's margin outside the containing elements (not part of the box model).

```css
h1,
h2 {
  color: #600;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 3rem;
  margin-bottom: 0;
}
h2 {
  font-size: 32px;
  margin-top: 0;
}
```

Note - selector strength here. Note that the lack of namespacing allows this to effect the Matsu text as well.

Format elements in the list and table

```css
aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  margin: 1em;
  padding: 0;
}
```

### Inline, In Page & External CSS

We've already seen the link tag and @import methods of adding css to our document. Let's examine all the ways to add CSS to an HTML document:

* Inline via the HTML `style=` attribute
* In page via the HTML `<style>` tag
* As an external .CSS file via linking (HTML `<link>` tag)
* As an external .CSS file via importing (CSS `@import` statements)

Inline styles are inefficient:

```html
<p style="margin-top: 12px;">
```

However, this method is often used when dynamically changing the page after it has been loaded in the browser.

Try using the inspector to inspect a dynamic page (such as http://www.w3schools.com/jquery/jquery_animate.asp). Note how it displays animation by temporarily highlighting inline css in purple.

Remove the CSS from the head of the document and paste it into a new text document. Save it in a new css directory calling it styles.css. We have two options here: link to our CSS file using an HTML tag, or to use a CSS @import statement.

```html
<link href="css/styles.css" media="all" />
```

Try not to use the alternative:

```html
<style>
  @import url("css/styles.css");
</style>
```

Note: ideally, all your stylesheets should be in one file to reduce the number of requests the browser needs to make to the server (a major cause of slow loading sites).

## Some simple CSS3 Enhancements

As work on a new version of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee (http://W3C.org) decided to break the process into modules. (For compatibility and advice see http://CanIuse.com.)

Some of the earlier CSS 3 specifications include provisions for visual effects such as rounded corners, drop shadows and gradients. A useful page that allows you to become familiar with these enhancements is http://css3generator.com/.

Add rounded corners to the info div. (See https://developer.mozilla.org/en/CSS/border-radius for specifications.)

```css
aside {
  ...
    border-radius: 6px;
}
```

Add a drop shadow to the CSS for the info div using the inspector (...).

```css
aside {
   : 3px 4px 3px 2px #d6d6d6;
}
```

Add a box shadow to the wrapper's CSS:

```
box-shadow: 10px 10px 20px #ddd;
```

<!-- Add CSS 3 Gradients. (See: http://www.colorzilla.com/gradient-editor/) -->

## Highlight one of the tabs

This is a simple way to create color coded navigation on a web site.
Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
```

Add a list item to the nav list with a class of review-link.

```html
<li><a class="t-review" href="#">Reviews</a></li>
```

Add the following to our CSS block:

```css
.review-page .review-link {
    color: #fff;
    background:#600;
 }
```

Note that the tab is now highlighted.

### Adding Simple Responsiveness

At the bottom of the stylesheet

```css
@media print {
  * {
    display: none !important;
  }
}

@media all and (max-width: 800px) {
  .nav {
    top: 0;
    left: 0;
    margin: 0;
  }
  aside {
    position: static;
    float: left;
    margin-right: 20px;
  }
  article {
    margin-left: 20px;
  }
  blockquote {
    width: 100%;
    float: none;
    margin: 0;
  }
}
```

### Using Flexbox (optional - demo only)

```css
.nav {
  display: flex;
  padding: 0;
}
.nav li {
  flex: 1;
  background-color: #f0dfb4;
  list-style: none;
}
```

### Notes

slack
daniel.deverell@nyu.edu
simple
klynch@cbury.org • email address bounced

```
Delete:
git branch -d branch_name
Delete on github:
git push origin --delete <branch_name>
Force a push:
git push -f <remote> <branch>
```

```
$ open /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl
$ ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```
