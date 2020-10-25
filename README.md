## ds-modal-js
<img src="https://badgen.net/npm/v/ds-modal-js"/><img src="https://badgen.net/npm/dw/ds-modal-js"/></br>

ds-modal-js - lightweight and easy to use javascript modal dialog


### Demo
https://shkredovdmitriy.github.io/ds-modal-js/

### Advantages
- Easy to use
- Has no dependencies
- Small size (less than 5kb min+gzip) </br>
- Closing modal on overlay click </br>
- Using data attributes


### Without installation

Add this line to head
```
<link href="https://unpkg.com/ds-modal-js@0.1.24/dist/ds-modal.min.css" rel="stylesheet">
```
Add this line to the bottom of the body
```
<script src="https://unpkg.com/ds-modal-js@0.1.24/dist/ds-modal.min.js"></script>
```

### Installation
```
npm install ds-modal-js -save
```
```
import dsModal from 'ds-modal-js';
```
```
@import 'ds-modal-js/src/ds-modal.scss';
```
### Simple working example
```
<button data-ds-modal-open="example-modal">
  Open example modal
</button>
```
```
<div class="ds-modal-container" data-ds-modal="example-modal">
  <div class="ds-modal-wrapper">
    <div class="ds-modal">
      <div class="ds-modal-close" data-ds-modal-close="example-modal"></div>
      <div class="ds-modal-header">Example</div>
      <div class="ds-modal-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div class="ds-modal-footer"></div>
    </div>
  </div>
</div>     
```
### Use in automatic mode
Specify data-ds-modal-open="example-modal" on the button and data-ds-modal="example-modal" on the modal. This is enough to work.

### Use in manual mode
```
dsModal.open("example-modal");
```
```
dsModal.close("example-modal");
```

### API
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

### History

### License
MIT License
