# Table of Contents

1. [Element in HTML](#element-in-html)
2. [Types of Elements](#types-of-elements)
   - [Inline Elements](#inline-elements)
   - [Block Elements](#block-elements)
   - [Inline-Block Elements](#inline-block-elements)
3. [Attributes in HTML](#attributes-in-html)
   - [src Attribute](#src-attribute)
   - [alt Attribute](#alt-attribute)
   - [target Attribute](#target-attribute)
     - [_self](#self)
     - [_parent](#parent)
     - [_blank](#blank)
     - [_top](#top)
4. [Homework Solutions](#homework-solutions)

---

## Element in HTML
An **element** in HTML is the fundamental building block of a webpage. It is composed of:

- **Start tag**: `<tagname>`
- **Content**: Text, images, or nested elements
- **End tag**: `</tagname>` (optional for self-closing elements)

![](/images/html-elements-diagram.webp)
### Example:
```html
<p>This is a paragraph element.</p>
```
Here, `<p>` is the start tag, `This is a paragraph element.` is the content, and `</p>` is the end tag.

---

## Types of Elements

### Inline Elements
- These elements only take up as much width as necessary.
- They don’t start on a new line.

#### Examples:
```html
<span>This is inline</span>
<a href="#">Link</a>
<strong>Bold Text</strong>
```

### Block Elements
- These elements take up the full width of their container.
- They always start on a new line.

#### Examples:
```html
<div>This is a block</div>
<p>Paragraph</p>
<h1>Heading 1</h1>
```
### Inline-Block Elements
- These combine properties of both block and inline elements.
- They can have set width and height but don’t break onto a new line by default.

#### Examples:
```html
<img src="image.jpg" alt="Inline-block image">
<button>Button</button>
```

---
![](/images/block_vs_inline_diagram.png)


## Inline vs Block vs Inline-Block

| Property        | Inline                        | Block                           | Inline-Block                   |
|-----------------|-------------------------------|----------------------------------|--------------------------------|
| Width/Height    | Not adjustable               | Adjustable                      | Adjustable                    |
| Line Break      | Doesn’t start on a new line | Always starts on a new line     | Doesn’t start on a new line   |
| Default Width   | Content width only           | Full width of container         | Content width only            |

#### Example to Convert:
- **Inline to Block**: Add `display: block;` in CSS.
- **Block to Inline**: Add `display: inline;` in CSS.

---

## Attributes in HTML
Attributes provide additional information about HTML elements. They are written inside the start tag.

### src Attribute
Defines the source file for embedded content like images, videos, or scripts.
```html
<img src="image.jpg" alt="Description">
```

### alt Attribute
Provides alternative text for an image, used when the image fails to load or for accessibility.
```html
<img src="image.jpg" alt="A beautiful scenery">
```

### target Attribute
Specifies how links open in browsers. Used with the `<a>` tag.
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

#### Values of `target`:
- **_self**: Default. Opens the link in the same tab.
- **_parent**: Opens the link in the parent frame.
- **_blank**: Opens the link in a new tab/window.
- **_top**: Opens the link in the full body of the window.

---

## Homework Solutions

1. **Search about the attribute "target":**
   - The `target` attribute specifies how the browser opens a link. Additional values include custom names for frames or windows in framed websites.

2. **How can we use the anchor tag for bookmarks in a website?**
   - Use the `id` attribute to define a bookmark and reference it with the `href` attribute:
   ```html
   <h2 id="section1">Section 1</h2>
   <a href="#section1">Go to Section 1</a>
   ```

3. **Why should we use the `<strong>` tag instead of `<b>`? Similarly with `<i>` and `<em>` tags.**
   - `<strong>` and `<em>` add semantic meaning (importance or emphasis) to the text, whereas `<b>` and `<i>` only style the text without conveying any meaning.

4. **Examples of Inline and Block Elements:**
   - Inline: `<a>`, `<strong>`, `<span>`
   - Block: `<div>`, `<p>`, `<h1>`

5. **How to convert inline to block?**
   - Use CSS:
   ```css
   display: block;
   ```

6. **How to convert block to inline?**
   - Use CSS:
   ```css
   display: inline;
   ```

7. **What are inline-block elements?**
   - Inline-block elements allow setting width and height but do not break onto a new line.

8. **"img" is which type of element?**
   - `<img>` is an inline-block element because it allows width and height adjustments while staying inline with surrounding content.

---


