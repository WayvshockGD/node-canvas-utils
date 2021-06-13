# Node-Canvas-Utils

This a package i made for reasons idk why.

examples:

```js
let Canvas = require("canvas");
let Utility = require("node-canvas-utils");

let canvas = Canvas.createCanvas(300, 300);
let ctx = canvas.getContext("2d");
let util = new Utility(ctx);

util.circleClip();

util.createText("hi", 5, 5, {
    font: "60px sans-serif",
    fillText: "#ffffff"
});

let attachment = Canvas.toBuffer();
```