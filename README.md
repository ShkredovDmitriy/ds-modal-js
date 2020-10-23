## ds-modal-js
ds-modal-js - lightweight and easy to use javascript modal window


## Demo
https://shkredovdmitriy.github.io/ds-modal-js/

## Without installation

Add this line to head
```
<link href="https://unpkg.com/ds-modal-js@0.1.21/dist/ds-modal.min.css" rel="stylesheet">
```
Add this line to the bottom of the body
```
<script src="https://unpkg.com/ds-modal-js@0.1.21/dist/ds-modal.min.js"></script>
```

## Installation
```
npm install ds-modal-js -save
```
```
import dsModal from 'ds-modal-js';
```
```
@import 'ds-modal-js/src/ds-modal.scss';
```
## Simple working example
```
<button data-ds-modal-open="example-modal">
  Open example modal
</button>
```
```
<div class="ds-modal-container" data-ds-modal="example-modal">
  <div class="ds-modal-wrapper">
    <div class="ds-modal">
      <div class="ds-modal-close"></div>
      <div class="ds-modal-header">Example</div>
      <div class="ds-modal-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div class="ds-modal-footer"></div>
    </div>
  </div>
</div>
```
## Use in automatic mode
Specify data-ds-modal-open on the button and data-ds-modal on the modal window, for example "example-modal". This is enough to work.

## Use in manual mode
dsModal.open("example-modal");
dsModal.close("example-modal");

## History

## License
MIT License
