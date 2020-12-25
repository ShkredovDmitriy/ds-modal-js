## ds-modal-js
<img src="https://badgen.net/npm/v/ds-modal-js"/><img src="https://badgen.net/npm/dw/ds-modal-js"/></br>
ds-modal-js - lightweight and easy to use javascript modal dialog

### Demo
<a href="https://shkredovdmitriy.github.io/ds-modal-js/" target="_blank">github.io</a> <a href="https://codepen.io/shkredovdmitriy/pen/MWepKGv" target="_blank">codepen.io</a> 

### Advantages
- Easy to use
- Has no dependencies </br>
- Small size (less than 5kb min+gzip) </br>
- Closing modal on overlay click </br>
- Using data attributes

### How to use in older browsers
For older browsers please use <a href="https://www.npmjs.com/package/promise-polyfill" target="_blank">promise-polyfill</a>

### Use without installation
Add this line to head
```
<link href="https://unpkg.com/ds-modal-js/dist/ds-modal.min.css" rel="stylesheet">
```
Add this line to the bottom of the body
```
<script src="https://unpkg.com/ds-modal-js/dist/ds-modal.min.js"></script>
```

### Simple working example
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title>ds-modal-js</title>
  <link href="https://unpkg.com/ds-modal-js/dist/ds-modal.min.css" rel="stylesheet">
</head>
<body>

<button data-ds-modal-open="example-modal">
  Open example modal
</button>

<div class="ds-modal__container" data-ds-modal="example-modal">
  <div class="ds-modal__wrapper">
    <div class="ds-modal">
      <div class="ds-modal__close-button" data-ds-modal-close="example-modal"></div>
      <div class="ds-modal__header">Example</div>
      <div class="ds-modal__body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div class="ds-modal__footer"></div>
    </div>
  </div>
</div>
  
  <script src="https://unpkg.com/ds-modal-js/dist/ds-modal.min.js"></script>
</body>
</html>

```

### Installation
```
npm install ds-modal-js -save
```
```
import dsModal from 'ds-modal-js';
```
```
@import 'ds-modal-js/dist/ds-modal.min.css';
```

### Use in automatic mode
Specify data-ds-modal-open="example-modal" on the button and data-ds-modal="example-modal" on the modal. This is enough to work.

### API
```
dsModal.open("example-modal");        // open modal data-ds-modal="example-modal"
```
```
dsModal.close("example-modal");       // close modal data-ds-modal="example-modal"
```
```
dsModal.status();                     // show status
```
```
dsModal.config({"logs": false});      // show logs in console (true/false, default false)
```
```
dsModal.config({"outClick": true});   // close modal on overlay click (true/false, default true)
```
```
dsModal.config({"zIndex": 9999});     // set modal z-index ( from 1 to 99999, default 9999)
```

### License
MIT License
