# CSS Lecture: Inline, Block, and Inline-Block

## Table of Contents
1. [Introduction](#introduction)
2. [Inline Elements](#inline-elements)
3. [Block Elements](#block-elements)
4. [Inline-Block Elements](#inline-block-elements)
5. [Examples](#examples)

---

## Introduction
In this lecture, we explored the differences between three key display properties in CSS: `inline`, `block`, and `inline-block`. Understanding these properties is essential for controlling the layout and behavior of HTML elements on a webpage.

---

## Inline Elements
- **Description**: Inline elements do not start on a new line and only take up as much width as necessary. These elements are typically used for text-level content.
- **Behavior**:
  - Size will be fit to the content.
  - It will not take `width` and `height` properties.
  - It will take padding from all sides.
- **Common Inline Elements**: `<span>`, `<a>`, `<strong>`, `<em>`

---

## Block Elements
- **Description**: Block elements start on a new line and take up the full width of their parent container by default.
- **Behavior**:
  - By default, the width spans from the extreme left to the extreme right of the container.
  - It takes `width` and `height` properties.
  - It can take custom margin and padding from all sides.
- **Common Block Elements**: `<div>`, `<p>`, `<h1>`, `<section>`

---

## Inline-Block Elements
- **Description**: Inline-block elements are similar to inline elements but allow setting width and height, which inline elements do not.
- **Behavior**:
  - Combines the flow of inline elements with the dimensional control of block elements.
  - Elements appear inline but respect `width` and `height` properties.
- **Use Case**: Useful for creating layouts where elements should appear inline but require specific dimensions.

---

## Examples
### Example 1: Inline Element
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .inline {
            color: blue;
        }
    </style>
</head>
<body>
    <p>This is an <span class="inline">inline</span> element example.</p>
</body>
</html>
```

### Example 2: Block Element
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .block {
            background-color: lightgray;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="block">This is a block element example.</div>
</body>
</html>
```

### Example 3: Inline-Block Element
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .inline-block {
            display: inline-block;
            width: 100px;
            height: 50px;
            background-color: lightblue;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="inline-block">Inline-Block</div>
    <div class="inline-block">Example</div>
</body>
</html>
```

