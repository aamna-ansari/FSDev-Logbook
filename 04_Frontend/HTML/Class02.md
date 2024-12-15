# HTML 
In this Lecture, I explored different types of HTML tags, learn about lists, and understand attributes in HTML.

---

## Table of Contents
1. [HTML Tags](#html-tags)
   - [Types of Tags](#types-of-tags)
     - [Semantic Tags](#semantic-tags)
     - [Structural Tags](#structural-tags)
     - [Formatting Tags](#formatting-tags)
2. [HTML Lists](#html-lists)
   - [Ordered List](#ordered-list)
   - [Unordered List](#unordered-list)
   - [Description List](#description-list)
3. [HTML Attributes](#html-attributes)
4. [Homework](#homework)
   - [What is Emmet Abbreviation?](#what-is-emmet-abbreviation)
   - [Explore Emmet Abbreviations](#explore-emmet-abbreviations)

---

## HTML Tags

Tags are the building blocks of HTML. They are used to define the structure and appearance of web content. HTML tags can be broadly categorized into three types.

### Types of Tags
#### Semantic Tags
Semantic tags clearly define the meaning and purpose of content, making it more accessible and readable for both humans and machines.

**Examples:**
- `<header>`: Defines the header section of a webpage.
- `<footer>`: Defines the footer section.
- `<article>`: Represents a self-contained piece of content.
- `<nav>`: Defines navigation links.

```html
<header>
  <h1>Welcome to My Website</h1>
</header>
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

#### Structural Tags
Structural tags are used to create the basic structure of a webpage.

**Examples:**
- `<div>`: Defines a division or section.
- `<section>`: Represents a thematic grouping of content.
- `<aside>`: Contains content related to the main content.

```html
<section>
  <h2>About Us</h2>
  <p>This section contains information about our website.</p>
</section>
<div>
  <p>This is a general division.</p>
</div>
```

#### Formatting Tags
Formatting tags are used to style text and emphasize content.

**Examples:**
- `<b>`: Makes text bold.
- `<i>`: Makes text italic.
- `<u>`: Underlines text.
- `<mark>`: Highlights text.

```html
<p>This is <b>bold</b> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <u>underlined</u> text.</p>
```

---

## HTML Lists

Lists in HTML are used to display items in an organized way. There are three types of lists in HTML:

### Ordered List
An ordered list displays items in a numbered sequence.

**Syntax:**
```html
<ol>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ol>
```
**Output:**
1. First Item
2. Second Item
3. Third Item

### Unordered List
An unordered list displays items with bullet points.

**Syntax:**
```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
```
**Output:**
- Item One
- Item Two
- Item Three

### Description List
A description list pairs items with descriptions.

**Syntax:**
```html
<dl>
  <dt>HTML</dt>
  <dd>A markup language for web pages.</dd>
  <dt>CSS</dt>
  <dd>Used to style web pages.</dd>
</dl>
```
**Output:**
- **HTML**: A markup language for web pages.
- **CSS**: Used to style web pages.

---

## HTML Attributes

Attributes in HTML provide additional information about an element. They are always written in the opening tag of an element as name-value pairs.

**Examples:**
- `href` in `<a>`: Specifies the URL of a link.
- `src` in `<img>`: Specifies the source of an image.
- `alt` in `<img>`: Provides alternative text for an image.

**Syntax:**
```html
<a href="https://example.com">Visit Example</a>
<img src="image.jpg" alt="A sample image">
```

---

## Homework

### What is Emmet Abbreviation?
Emmet is a plugin for many text editors that allows developers to write HTML and CSS more quickly using shorthand syntax. It expands abbreviations into full HTML or CSS code.

### Explore Emmet Abbreviations
Learn how to use Emmet to speed up your coding workflow. Refer to the official Emmet documentation:
[Emmet Documentation](https://docs.emmet.io/)

Try using Emmet abbreviations in your IDE to create HTML structures faster. For example:
- Typing `ul>li*3` will expand to:
  ```html
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  
