# HTML Class: Media and Iframe

## Table of Contents
1. [Introduction](#introduction)
2. [Embedding Images](#embedding-images)
    - [Example: Adding an Image](#example-adding-an-image)
3. [Adding Videos](#adding-videos)
    - [Example: Embedding a Video](#example-embedding-a-video)
4. [Adding Audio](#adding-audio)
    - [Example: Embedding Audio](#example-embedding-audio)
5. [Using Iframes](#using-iframes)
    - [Example: Embedding an Iframe](#example-embedding-an-iframe)
6. [Conclusion](#conclusion)

---

## Introduction
In this class, I learned how to use HTML to embed different types of media (images, videos, and audio) and how to use iframes to embed external content like other web pages.

---

## Embedding Images
The `<img>` tag is used to display images in an HTML document. You can specify the source of the image using the `src` attribute and add alternative text with the `alt` attribute for accessibility.

### Example: Adding an Image
```html
<img src="example.jpg" alt="A beautiful example image" width="300" height="200">
```
**Explanation:**
- `src`: Specifies the path to the image file.
- `alt`: Provides alternative text if the image cannot be displayed.
- `width` and `height`: Control the size of the image.

---

## Adding Videos
The `<video>` tag is used to embed videos. You can include controls for play, pause, and volume by adding the `controls` attribute.

### Example: Embedding a Video
```html
<video src="example.mp4" controls width="400" height="300">
  Your browser does not support the video tag.
</video>
```
**Explanation:**
- `src`: Specifies the video file.
- `controls`: Adds play, pause, and volume control buttons.
- `width` and `height`: Control the size of the video player.

---

## Adding Audio
The `<audio>` tag is used to embed audio files. Similar to videos, you can include controls for play and volume.

### Example: Embedding Audio
```html
<audio src="example.mp3" controls>
  Your browser does not support the audio tag.
</audio>
```
**Explanation:**
- `src`: Specifies the audio file.
- `controls`: Adds play and volume control buttons.

---

## Using Iframes
The `<iframe>` tag allows you to embed content from another website, like a map or a YouTube video, into your webpage.

### Example: Embedding an Iframe
```html
<iframe src="https://www.example.com" width="600" height="400" >
  Your browser does not support iframes.
</iframe>
```
**Explanation:**
- `src`: Specifies the URL of the content to embed.
- `width` and `height`: Control the size of the iframe.
- `style`: Adds custom styling, like borders.

---

## Conclusion
In this class, you learned how to embed images, videos, and audio into your HTML documents and how to use iframes to display external content. These elements make your web pages more dynamic and engaging for users.

---
